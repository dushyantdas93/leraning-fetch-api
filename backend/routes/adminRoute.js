import express from "express";
import { admin, getadminbyid } from "../controllers/adminController.js";

const adminRoute = express.Router();

adminRoute.get("/admin", admin);
adminRoute.get("/admin/:id", getadminbyid);

export default adminRoute;
