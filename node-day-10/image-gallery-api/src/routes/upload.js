import express from "express";
import postUpload from "../controllers/upload/postUpload";
import multer from "multer";
import path from "path";
import crypto from "crypto";

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: function (req, file, cb) {
    const id = crypto.randomBytes(16).toString("hex");
    cb(null, `${Date.now()}-${id}${path.extname(file.originalname)}`);
  },
});

const file = multer({ storage: storage });

const upload = express.Router();

// use multer as middleware to handle file uploads
upload.post("/", file.single("image"), postUpload);

// more routes for our API will happen here

export default upload;
