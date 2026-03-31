import express from "express";
import {
  registerTodo,
  updateTodo,
  deleteTodo,
  getTodo,
  allfunc,
} from "../controller/todo.js";

const router = express.Router();

router.post("/register", registerTodo);
router.post("/update", updateTodo);
router.delete("/delete", deleteTodo);
router.get("/alltodo", getTodo);

export default router;
