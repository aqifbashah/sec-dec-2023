import pool from "../database/connection.js";

async function create(req, res) {
  const title = req.body.title;
  const description = req.body.description;
  // this is how you access the user data from the middleware
  const authData = req.user;
  try {
    //   create a todo in the database
    const query = `
      INSERT INTO "Todos" (title, description, user_id)
      VALUES ($1, $2, $3)
      `;
    const values = [title, description, authData.id];
    const response = await pool.query(query, values);

    return res.json({
      message: "a todo is created",
      data: response.rows,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function list(req, res) {
  try {
    const authData = req.user;
    const query = `
          SELECT * FROM "Todos" WHERE user_id = $1
          `;
    const values = [authData.id];
    const response = await pool.query(query, values);
    return res.status(200).json({
      message: `${response.rows.length} todos found`,
      data: response.rows,
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

// update controller
// route is PUT /todo/:id
async function update(req, res) {
  try {
    const authData = req.user;
    const reqBody = req.body;
    const id = reqBody.id;
    const description = reqBody.description;
    const values = [authData.id, id, description];
    const query = `
    UPDATE "Todos"
    SET description = $3
    WHERE user_id = $1
    AND id = $2;`;
    await pool.query(query, values);
    return res.status(200).json({
      message: "description successfully updated",
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

// delete controller
// route is DELETE /todo/:id
async function deleteTodos(req, res) {
  try {
    const authData = req.user;
    const reqBody = req.body;
    const id = reqBody.id;
    const values = [authData.id, id];
    const query = `
  DELETE FROM "Todos"
  WHERE user_id = $1
  AND id = $2;
  `;
    await pool.query(query, values);
    return res.status(200).json({
      message: "todos successfully deleted",
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

// get controller
// route is GET /todo/:id
async function get(req, res) {
  try {
    const authData = req.user;
    const reqBody = req.body;
    const id = reqBody.id;
    const values = [authData.id, id];
    const query = `
    SELECT * FROM "Todos"
    WHERE user_id=$1
    AND id = $2;
  `;
    const response = await pool.query(query, values);
    return res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json(error);
  }
}

const todoController = {
  create: create,
  list: list,
  update: update,
  delete: deleteTodos,
  // list: list,
  get: get,
};

export default todoController;
