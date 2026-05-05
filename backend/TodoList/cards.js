import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    title: String,
    description: String
  },
  { timestamps: true },
);

const Card = mongoose.model("Card", UserSchema);

export default Card;
