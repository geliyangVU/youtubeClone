import express from "express";
import { registerUserHandler } from "./user.controller";

const router = express.Router();

//prefix: /api/users

router.post("/", registerUserHandler);

export default router;
