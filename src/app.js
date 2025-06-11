import express from "express";
import authRoutes from "./routes/routes.js"
import dotenv from "dotenv";


dotenv.config();

const app = express();

app.use(express.json());
app.use("/api", authRoutes);

export default app;