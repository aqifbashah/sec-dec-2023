import { checkConnection } from "./connection.js";
import { createTodosTable, createUserTable } from "../model/index.js";

async function dbInit() {
  await checkConnection();
  await createUserTable();
  await createTodosTable();
}

export default dbInit;
