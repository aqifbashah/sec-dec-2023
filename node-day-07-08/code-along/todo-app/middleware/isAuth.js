import jwt from "jsonwebtoken";

async function isAuth(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "not authenticated" });
    }
    const decoded = jwt.verify(token, "superDuperSecret");
    console.log(decoded);
    // IMPORTANT: this is how you pass data from middleware to the next function
    req.user = decoded;
    next();
  } catch (error) {
    res.status(500).json(error);
  }
}

export default isAuth;
