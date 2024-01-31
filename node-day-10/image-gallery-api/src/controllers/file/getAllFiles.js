import pool from "../../database/connection";

async function getAllFiles(req, res) {
  try {
    const query = `SELECT * FROM files;`;
    const response = await pool.query(query);
    const files = response.rows;
    const message = `Successfully retrieved ${files.length} files`;
    return res.status(200).json({ message, data: files });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
}

export default getAllFiles;
