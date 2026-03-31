import User from "../TodoList/Todo.js";

export const registerTodo = async (req, res) => {
  const { title, description } = req.body;

  if (!description) {
    return res.send("Please enter the description!");
  }

  if (!title) {
    return res.send("Please enter the title!");
  }

  const user = await User.findOne({ title, description });

  if (user) {
    return res.send("List already exists");
  }

  const todo = new User({ title, description });
  await todo.save();

  res.send("List registered successfully");
};

export const updateTodo = async (req, res) => {
  try {
    const { id, title, description } = req.body;

    const user = await User.findByIdAndUpdate(
      id,
      { title, description },
      { new: true },
    );

    res.send({ message: "List is Updated Successfully!", todo: user });
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};
    
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.body;
    console.log("reqBody", req.body);
    await User.findByIdAndDelete({ _id: id });
    res.send("Item is Deleted Successfully!");
  } catch (e) {
    console.log(e);
  }
};

export const getTodo = async (req, res) => {
  try {
    const user = await User.find();
    return res.send({ user, message: "List is fetched successfully" });
  } catch (e) {
    console.log(e);
  }
};

export const allfunc = (req, res, next) => {
  try {
    const { title, description } = req.body;
    console.log(title, description);

    next();
  } catch (error) {}
};
