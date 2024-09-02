import express from "express";
const app = express();
import dotenv from "dotenv";
import UserRouter from "./routes/userRoute.js";
import adminRoute from "./routes/adminRoute.js";
import cors from "cors";
dotenv.config();
const PORT = process.env.PORT;

app.use(cors());

app.use("/api/v1/um", UserRouter);
app.use("/api/v1/am", adminRoute);
app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
