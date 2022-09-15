import express from "express";
import { sequelize } from "./db";
import "dotenv/config";

const PORT = process.env.PORT || 9090;

const app = express();

app.listen(PORT, async () => {
    console.log(`starting server on port ${PORT}`);
    await sequelize.sync({ force: true });
});
