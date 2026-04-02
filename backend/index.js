import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dns from "node:dns/promises";
import ConnectionDB from "./DB/Connection.js";
import todo from "./routes/todo.js";
dotenv.config();

const app = express();
app.use(express.json());

app.use(cors({ origin: "http://localhost:5173" }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/todo", todo);

// app.post("/register", async (req, res) => {
//   const { title, description } = req.body;

//   if (!description) {
//     return res.send("Please enter the description!");
//   }

//   if (!title) {
//     return res.send("Please enter the title!");
//   }

//   const user = await User.findOne({ title, description });

//   if (user) {
//     return res.send("List already exists");
//   }

//   const todo = new User({ title, description });
//   await todo.save();

//   res.send("List registered successfully");
// });
// app.post("/update", async (req, res) => {
//   const { id, title, description } = req.body;
//   const user = await User.findByIdAndUpdate(
//     { _id: id },
//     { title, description },
//   );
//   res.send("List is Updated Successfully!");
// });
// app.delete("/delete", async (req, res) => {
//   const { id, title, description } = req.body;
//   const user = await User.findByIdAndDelete(
//     { _id: id },
//     { title, description },
//   );
//   res.send("List is Deleted Successfully!");
// });
// app.get("/register", async (req, res) => {
//   const user = await User.find();
//   res.send(user);
// });
dns.setServers(['8.8.8.8', '1.1.1.1']);




ConnectionDB();
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
