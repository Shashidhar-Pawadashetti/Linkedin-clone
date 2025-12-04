import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import postRoutes from "./routes/posts.routes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(postRoutes);

connectDB();

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});