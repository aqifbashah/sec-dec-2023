// establish connection with database
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "admin",
  max: 20,
  database: "todo_app",
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// pool is a passport to send request to database

export async function checkConnection() {
  try {
    const client = await pool.connect();
    console.log("Connected to database", client.database);
  } catch (error) {
    console.log("Could not connect to database", error);
  }
}

export default pool;
