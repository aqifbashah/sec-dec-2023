import pool from "../database/connection.js";
//  model is a file where we define out database schema / tables

// table user
export async function createUserTable() {
  try {
    const query = `
    CREATE TABLE IF NOT EXISTS "Users" (
        id SERIAL PRIMARY KEY,
        username VARCHAR(120) UNIQUE,
        email TEXT UNIQUE,
        password TEXT
    );
    `;
    const response = await pool.query(query);
    console.log("User table craeted successfully");
  } catch (error) {
    console.log(error);
  }
}

// table todos
export async function createTodosTable() {
  try {
    const query = `
    CREATE TABLE IF NOT EXISTS "Todos" (
        id SERIAL PRIMARY KEY,
        title TEXT,
        description TEXT,
        user_id INTEGER REFERENCES "Users"(id)
    );
    `;
    await pool.query(query);
    console.log("Todos table craeted successfully");
  } catch (error) {
    console.log(error);
  }
}
