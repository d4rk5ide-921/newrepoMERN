import mongoose from "mongoose";

const ConnectionDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGOOSE_DB_URL)
      .then(() => {
        console.log("Database connected");
      })
      .catch((err) => {
        console.log("Error", err);
      });
  } catch (error) {}
};

export default ConnectionDB;