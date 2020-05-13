import "reflect-metadata";
import { createConnection } from "typeorm";
import path from 'path';

export async function createConn() {
    return new Promise((resolve, reject) => {
        createConnection({
            type: "sqlite",
            database: "express.db",
            entities: [
                path.resolve(__dirname, "..", "entity") + "/*{.ts,.js}"
            ],
            migrationsTableName: "custom_migration",
            migrations: [
                "./migrations/*{.ts,.js}"
            ],
            cli: {
                migrationsDir: "./migrations"
            }
        })
            .then(() => {
                console.log("Successfully connected to database");
                resolve();
            })
            .catch((e) => {
                console.log("Error connection to database", e);
                reject(e);
            });
    })
}