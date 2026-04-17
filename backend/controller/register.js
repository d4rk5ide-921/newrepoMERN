import Student from "../TodoList/register.js";
import bcrypt from "bcrypt";

// export const registers = async (req, res) => {
//     const { name, email, password } = req.body;


//     try {
//         if (!name || !email || !password) {
//             return res.status(400).send({ message: "Please enter all the fields" });
//         }

//         const findUsers = await Student.findOne({ email })

//         if (findUsers) {
//             return res.status(409).send({ message: "User already exists" })
//         }

//         const hashPassword = await bcrypt.hash(password, 10);


//         const student = new Student({ name, email, password: hashPassword });
//         await student.save();
//         console.log(student)

//         // ✅ send full student object
//         res.status(201).json(student);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({ message: "Internal server error" });
//     }
// };
export const registers = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            return res.status(400).send({ message: "Please enter all fields" });
        }
        const findUser = await Student.findOne({ email })
        if (findUser) {
            return res.status(409).send({ message: "Something went wrong" })
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const student = new Student({ name, email, password: hashPassword });
        await student.save();
        console.log(student);
        res.status(201).json(student);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error" });
    }
}


// export const Login = async (req, res) => {

//     const { email, password } = req.body

//     console.log(1)


//     try {

//         if (!email || !password) {
//             return res.status(400).send({ message: "Please enter all the fields" })
//         }
//         const findUser = await Student.findOne({ email })
//         if (!findUser) {
//             return res.status(401).send({ message: "Invalid credentials" })
//         }
//         console.log(2)

//         const hashPassword = await bcrypt.compare(password, findUser.password)

//         if (!hashPassword) {
//             return res.status(401).send({ message: "Invalid credentials" })
//         }
//         console.log(3)

//         res.status(200).json({
//             email: findUser.email,
//             name: findUser.name,
//             _id: findUser._id,
//             message: "Login successfully"
//         })







//     } catch (error) {
//         console.log(error);
//         res.status(500).send({ message: "Internal server error" });
//     }
// }

export const Login = async (req, res) => {
    const { email, password } = req.body
    try {
        if (!email || !password) {
            return res.status(400).send({ message: "Please enter all the fields" })
        }
        const findUser = await Student.findOne({ email })
        if (!findUser) {
            return res.status(401).send({ message: "Invalid credentials" })
        }
        const hashPassword = await bcrypt.compare(password, findUser.password)
        if (!hashPassword) {
            return res.status(401).send({ message: "Invalid credentials" })
        }
        res.status(200).json({
            email: findUser.email,
            name: findUser.name,
            _id: findUser._id,
            message: "Login successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal server error" })
    }
}