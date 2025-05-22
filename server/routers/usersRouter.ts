import express from "express";
import usersController from "../controllers/usersController.ts";

const router = express.Router();

router.post("/createuser", usersController.createUser);

export default router;
