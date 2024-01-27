import pool from "../database/connection.js";
import jwt from "jsonwebtoken";

export async function register(req, res) {
  try {
    const reqBody = req.body;

    //   create new user in database
    // query is always a string, dynamic values are passed as an array with the $ sign

    const values = [reqBody.username, reqBody.email, reqBody.password];

    if (reqBody.username === "") {
      return res.status(400).json({ message: "Username not provided" });
    }
    if (reqBody.email === "") {
      return res.status(400).json({ message: "Email not provided" });
    }
    if (reqBody.password === "") {
      return res.status(400).json({ message: "Password not provided" });
    }
    const query = `
      INSERT INTO "Users" (username, email, "password")
      VALUES($1, $2, $3);
      `;
    await pool.query(query, values);
    const apiResponse = {
      message: "User create successfully",
    };

    res.status(200).json(apiResponse);
  } catch (error) {
    // why 500? because it is a server error due to promise rejection by the database connection pool
    res.status(500).json(error);
  }
}

export async function login(req, res) {
  try {
    const reqBody = req.body;
    // check if email exists in database
    const query = `
        SELECT * FROM "Users"
        WHERE email=$1;
        `;
    const values = [reqBody.email];
    const response = await pool.query(query, values);

    // if email not found, return 404
    if (response.rowCount === 0) {
      return res.status(404).json({ message: "Email not found" });
    }

    // if email found, check if password matches
    if (reqBody.password !== response.rows[0].password) {
      return res.status(401).json({ message: "Password incorrect" });
    }

    // if password matches, create a token using jsonwebtoken
    const userData = {
      id: response.rows[0].id,
      username: response.rows[0].username,
      email: response.rows[0].email,
    };
    const token = jwt.sign(userData, "superDuperSecret");

    // if password matches, return user object
    const apiResponse = {
      message: "Login successful",
      user: response.rows[0],
      token: token,
    };
    res.status(200).json(apiResponse);
  } catch (error) {
    res.status(500).json(error);
  }
}

// list all users
export async function allUsers(req, res) {
  try {
    const query = `
      SELECT username FROM "Users"
      `;
    const response = await pool.query(query);
    const apiResponse = {
      message: "All the users listed below",
      users: response.rows,
    };
    res.status(200).json(apiResponse);
  } catch (error) {
    res.status(500).json({ message: "something wrong" });
  }
}

// get user by id
export async function usersById(req, res) {
  try {
    const reqBody = req.body;

    const query = `
        SELECT * FROM "Users"
        WHERE id=$1
        `;

    const values = [reqBody.id];
    const response = await pool.query(query, values);
    const apiResponse = {
      message: `User with ID ${values}`,
      users: response.rows,
    };
    if (response.rowCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(apiResponse);
  } catch (error) {
    res.status(500).json({ message: "something wrong" });
  }
}

// update user by id
export async function updateUser(req, res) {
  try {
    const reqBody = req.body;

    const query = `
        UPDATE
        "Users"
        SET
        email = $2
        WHERE
        id = $1;
        `;

    const values = [reqBody.id, reqBody.email];
    const response = await pool.query(query, values);
    const apiResponse = {
      message: `User has been updated`,
    };
    if (response.rowCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(apiResponse);
  } catch (error) {
    res.status(500).json({ message: "something wrong" });
  }
}

// delete user by id
export async function deleteUser(req, res) {
  try {
    const reqBody = req.body;

    const query = `
    DELETE FROM "Users" WHERE id = $1;
        `;

    const values = [reqBody.id];
    const response = await pool.query(query, values);
    const apiResponse = {
      message: `User has been deleted`,
    };
    if (response.rowCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(apiResponse);
  } catch (error) {
    res.status(500).json({ message: "something wrong" });
  }
}
