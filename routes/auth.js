import express from "express";
import { deleteUser, loginUser, registerUser } from "../controlers/auth.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.delete("/delete/:id", deleteUser);

export default router;
