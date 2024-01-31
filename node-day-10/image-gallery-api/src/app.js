import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import config from "./config";
import errorHandler from "./middleware/errorHandler";
import fourOhFour from "./middleware/fourOhFour";
import root from "./routes/root";
import upload from "./routes/upload";
import { dbInit } from "./database/connection";
import file from "./routes/file";

const app = express();

// Apply most middleware first
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// serve static files from the uploads directory
app.use("/files", express.static("uploads"));

app.use(
  cors({
    origin: config.clientOrigins[config.nodeEnv],
  })
);

app.use(helmet());
app.use(morgan("tiny"));

// init database
dbInit();

// Apply routes before error handling
app.use("/", root);
app.use("/upload", upload);
app.use("/files", file);

// Apply error handling last
app.use(fourOhFour);
app.use(errorHandler);

export default app;
