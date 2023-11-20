import dotenv from 'dotenv';

dotenv.config();

export default {
    database: {
        username: process.env.DATABASE_USERNAME || "postgres",
        password: process.env.DATABASE_PASSWORD || "",
        database: process.env.DATABASE || "challenge",
        host: "localhost"
    }
}