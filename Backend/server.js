import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";

//config env
dotenv.config();

//database config
connectDB();

const app = express();
const port = process.env.PORT || 8080;

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  res.send({
    message: "Hello World",
  });
});

app.listen(port, () => {
  console.log(
    `Server Running ${process.env.DEV_MODE} mode on port ${port}`.bgBlue.white
  );
});
