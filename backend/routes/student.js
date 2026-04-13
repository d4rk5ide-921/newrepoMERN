import express from "express";
import {
    registerStudent,
    getStudent,
    updateStudent,
    deleteStudent,
} from "../controller/student.js";

const router = express.Router();

router.post("/add", registerStudent);
router.get("/get", getStudent);
router.post("/update", updateStudent);
router.delete("/delete", deleteStudent);

export default router; 