import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    image: String,
  },
  { timestamps: true },
);

const User = mongoose.model("User", UserSchema);

export default User;
