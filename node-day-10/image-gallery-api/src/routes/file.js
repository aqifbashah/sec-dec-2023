import express from "express";
import getAllFiles from "../controllers/file/getAllFiles";
import deleteFile from "../controllers/file/deleteFile";

const image = express.Router();

image.get("/", getAllFiles);
image.delete("/:filename", deleteFile);

export default image;
