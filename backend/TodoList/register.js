import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
        confirmPassword: String
    },
    { timestamps: true },
);

const Student = mongoose.model("loginusers", UserSchema);

export default Student;