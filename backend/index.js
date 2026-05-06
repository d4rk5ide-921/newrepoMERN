import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ConnectionDB from "./DB/Connection.js";
import todo from "./routes/todo.js";
import Student from "./routes/student.js";
import registers from "./routes/register.js";
import cards from "./routes/cards.js";
dotenv.config();

const app = express();
app.use(express.json());

app.use(cors({ origin: "*" })); // Vercel pe localhost:5173 nahi hoga

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/todo", todo);
app.use("/student", Student);
app.use("/user", registers);
app.use("/cards", cards);

ConnectionDB();

// Ye line hata do: app.listen(5000, ...)

// Ye add karo sab se end me:
export default app;