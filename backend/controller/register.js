import Student from "../TodoList/register.js";

export const registers = async (req, res) => {
    const { name, email, password } = req.body;


    try {
        if (!name || !email || !password) {
            return res.status(400).send({ message: "Please enter all the fields" });
        }

        const student = new Student({ name, email, password });
        await student.save();

        // ✅ send full student object
        res.status(201).json(student);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal server error" });
    }
};