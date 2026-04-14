import express from "express";
import { registers } from "../controller/register.js";

const router = express.Router();

router.post("/registers", registers);

export default router;