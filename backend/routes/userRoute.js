import express from "express";
import { getuserbyid, user } from "../controllers/userController.js";

const UserRouter = express.Router()

UserRouter.get("/users", user);
UserRouter.get("/users/:id", getuserbyid);


export default UserRouter;