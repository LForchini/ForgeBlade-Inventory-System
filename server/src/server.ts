import express from "express";
import { sequelize } from "./db";
import "dotenv/config";
import { expressjwt, GetVerificationKey } from "express-jwt";
import jwks from "jwks-rsa";

import { router as JobRouter } from "./routes/Job.route";

const PORT = process.env.PORT ?? 9090;
const jwtCheck = expressjwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://dev-fq8tyev3.eu.auth0.com/.well-known/jwks.json",
    }) as GetVerificationKey,
    audience: "http://localhost:9090",
    issuer: "https://dev-fq8tyev3.eu.auth0.com/",
    algorithms: ["RS256"],
});

const app = express();
app.use(jwtCheck);
app.use(express.json());

app.use("/jobs", JobRouter);
// app.use("/");

app.listen(PORT, async () => {
    console.log(`starting server on port ${PORT}`);
    await sequelize.sync();
});
