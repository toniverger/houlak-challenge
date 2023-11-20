import databaseConfig from '../databaseConfig';
import { Pool } from 'pg';
const { database } = databaseConfig

export default async function createDatabase() {
    const pool = new Pool({ connectionString: `postgresql://${database.username}:${database.password}@${database.host}` })
    const client = await pool.connect();
    try {
        await client.query(`CREATE DATABASE ${database.database}`);
        console.log(`Database "${database.database}" created successfully`);
    } catch (error) {
        console.error('Error creating database:', error);
    } finally {
        client.release();
    }
}
