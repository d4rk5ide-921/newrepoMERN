import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        img: String,
        Cybersecurity: String,
        title: String,
        btn: String
    },
    { timestamps: true },
);

const Student = mongoose.model("student", UserSchema);

export default Student;
