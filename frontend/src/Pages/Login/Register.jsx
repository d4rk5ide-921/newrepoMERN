import React, { useState } from 'react'
import "./style.css"
import { useNavigate, Link } from 'react-router-dom'
import { useContext } from 'react'
import { ToDoContext } from '../Context/ToDoContext'
import axios from 'axios'
// import { useState } from 'react'

const Register = () => {
    const [registersData, setregistersData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [errorMsg, setErrorMsg] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")

    const navigate = useNavigate()
    const { register } = useContext(ToDoContext)

    // Handle input change
    const handleChange = (e) => {
        setregistersData({
            ...registersData,
            [e.target.name]: e.target.value
        })
    }

    // Handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (registersData.password !== registersData.confirmPassword) {
            // alert("Passwords do not match!");
            setPasswordError("Passwords do not match!");
            return;
        }

        const { name, email, password } = registersData;

        try {
            const res = await axios.post(
                "http://localhost:5000/user/registers",
                {
                    name, email, password
                }
            );
            console.log(res.data)
            // alert("User registered successfully!");
            setErrorMsg("User registered successfully!");
            navigate("/login");

        } catch (error) {
            console.log(error);
            const errorMessage = error.response?.data?.message || "Registration failed";
            // alert(errorMessage);
            setErrorMsg(errorMessage);
        }
    };

    return (
        <div className="container pixcel-margin">
            <div className="row justify-content-center align-items-center min-vh-100 px-2">

                <div className="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4">
                    <div className="card register-card shadow-lg p-4">

                        <h3 className="text-center text-primary mb-4">Create Account</h3>

                        <form >

                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={registersData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={registersData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={registersData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="confirmPassword"
                                    value={registersData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button onClick={handleSubmit} className="btn btn-primary w-100">
                                Register
                            </button>
                            {errorMsg && (
                                <p className="text-danger text-center">{errorMsg}</p>
                            )}
                            {passwordError && (
                                <p className="text-danger text-center">{passwordError}</p>
                            )}
                            {confirmPasswordError && (
                                <p className="text-danger text-center">{confirmPasswordError}</p>
                            )}
                            <p className="text-center mt-3 mb-0">
                                Already have an account?
                                <Link to="/login" className="text-primary fw-semibold">
                                    Login
                                </Link>
                            </p>

                        </form>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Register