import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize({
    models: [__dirname + "/models/**/*.model.ts"],
    modelMatch: (filename, member) => {
        return (
            filename.substring(0, filename.indexOf(".model")) ===
            member.toLowerCase()
        );
    },
    database: "fbis",
    dialect: "sqlite",
    storage: "./db.sqlite",
});
