import dotenv from 'dotenv';

dotenv.config();

export default {
    database: {
        username: `${process.env.DATABASE_USERNAME}`,
        password: `${process.env.DATABASE_PASSWORD}`,
        database: `${process.env.DATABASE}`,
        host: `${process.env.DATABASE_HOST}`
    }
}