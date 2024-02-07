import express from "express";
import isAuth from "../middleware/isAuth";
import postUrlShortener from "../controllers/url/postUrlShortener";
import getOwnUrls from "../controllers/url/getOwnUrls";
import deleteUrl from "../controllers/url/deleteUrl";
import generateCSVReport from "../controllers/url/generateCSVReport";

const url = express.Router();

url.post("/", isAuth, postUrlShortener);
url.get("/all", isAuth, getOwnUrls);
url.delete("/delete/:urlId", isAuth, deleteUrl);
url.get("/CSV-report", isAuth, generateCSVReport);

export default url;
