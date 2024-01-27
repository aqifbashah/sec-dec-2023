import express from "express";
import dbInit from "./database/dbinit.js";
import checkHealth from "./controller/health.js";
import {
  allUsers,
  deleteUser,
  login,
  register,
  updateUser,
  usersById,
} from "./controller/auth.js";
import todoController from "./controller/todo.js";
import isAuth from "./middleware/isAuth.js";

const app = express();
const PORT = 3000;

// middleware for req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbInit();

app.get("/", checkHealth);
app.post("/register", register);
app.post("/login", login);
app.get("/all-users", allUsers);
app.post("/user-by-id", usersById);
app.post("/update-user", updateUser);
app.post("/delete-user", deleteUser);

app.post("/todo", isAuth, todoController.create);
app.get("/todo", isAuth, todoController.list);
app.post("/todo-update", isAuth, todoController.update);
app.post("/todo-delete", isAuth, todoController.delete);
app.get("/todo-get-id", isAuth, todoController.get);

// middleware

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
