import { Pool } from "pg";
import { createFilesTable } from "../models/file";

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "admin",
  database: "image_gallery_sec",
  port: 5432,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export async function dbInit() {
  try {
    // connect to database by sending a query
    const response = await pool.query("SELECT NOW()");
    const time = new Date(response.rows[0].now);
    console.log(`Connected to database at ${time}`);
    // create files table if it doesn't exist
    await createFilesTable();
  } catch (error) {
    console.log("Error connecting to the database");
  }
}

export default pool;
