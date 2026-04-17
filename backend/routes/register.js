import express from "express";
import { registers, Login } from "../controller/register.js";

const router = express.Router();

router.post("/registers", registers);
router.post("/login", Login);

export default router;