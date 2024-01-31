import pool from "../../database/connection";
import fs from "fs";

async function deleteFile(req, res) {
  const filename = req.params.filename;
  console.log(filename);
  try {
    // search for file in database
    const query = `SELECT * FROM files WHERE filename = $1`;
    const values = [filename];
    const response = await pool.query(query, values);
    const file = response.rows[0];
    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }

    // delete file from database
    const deleteQuery = `DELETE FROM files WHERE filename = $1`;
    await pool.query(deleteQuery, values);

    // delete file from uploads directory
    fs.unlinkSync(`uploads/${filename}`);
    return res.status(200).json({ message: "File deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

export default deleteFile;
