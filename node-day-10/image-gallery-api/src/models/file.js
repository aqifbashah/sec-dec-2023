import pool from "../database/connection";

export async function createFilesTable() {
  const query = `
      CREATE TABLE IF NOT EXISTS files (
        id SERIAL PRIMARY KEY,
        fieldname TEXT NOT NULL,
        originalname TEXT NOT NULL,
        encoding TEXT NOT NULL,
        mimetype TEXT NOT NULL,
        destination TEXT NOT NULL,
        filename TEXT NOT NULL,
        path TEXT NOT NULL,
        size INTEGER NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );`;

  pool
    .query(query)
    .then(() => {
      console.log("files table created");
    })
    .catch((err) => {
      console.log(err);
    });
}
