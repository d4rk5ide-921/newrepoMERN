import express from "express";
import { registerCards, getCards, deleteCards, updateCards, allCards } from "../controller/cards.js";

const router = express.Router();

router.post("/register", registerCards);
router.get("/get", getCards);
router.delete("/delete", deleteCards);
router.post("/update", updateCards);
router.get("/all", allCards);

export default router;