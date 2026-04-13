import Student from "../TodoList/student.js";

export const registerStudent = async (req, res) => {
    const { img, Cybersecurity, title, btn } = req.body;
    if (!img || !Cybersecurity || !title || !btn) {
        return res.status(400).send({ message: "Please enter all the fields" });
    }

    const student = new Student({ img, Cybersecurity, title, btn });
    await student.save();

    // ✅ send full student object
    res.status(201).json(student);
};

export const getStudent = async (req, res) => {
    try {
        const student = await Student.find();
        return res.send({ student, message: "Student fetched successfully" });
    } catch (e) {
        console.log(e);
    }
}

export const updateStudent = async (req, res) => {
    try {
        const { id, img, Cybersecurity, title, btn } = req.body;
        const student = await Student.findByIdAndUpdate(id, { img, Cybersecurity, title, btn }, { new: true });
        res.send({ message: "Student updated successfully", student });
    } catch (e) {
        console.log(e);
    }
}

export const deleteStudent = async (req, res) => {
    try {
        const { id } = req.body;
        await Student.findByIdAndDelete(id);
        res.send("Student deleted successfully");
    } catch (e) {
        console.log(e);
    }
}

