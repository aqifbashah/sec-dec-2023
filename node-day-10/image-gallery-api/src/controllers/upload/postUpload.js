import pool from "../../database/connection";

async function postUpload(req, res) {
  try {
    const query = `INSERT INTO files (
      fieldname,
      originalname,
      encoding,
      mimetype,
      destination,
      filename,
      path,
      size
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`;
    const values = [
      req.file.fieldname,
      req.file.originalname,
      req.file.encoding,
      req.file.mimetype,
      req.file.destination,
      req.file.filename,
      req.file.path,
      req.file.size,
    ];
    await pool.query(query, values);
    return res.status(201).send({ message: "File uploaded" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

export default postUpload;
