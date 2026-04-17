import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = { email, password }
    console.log(1)
    try {
      const res = await axios.post("http://localhost:5000/user/login", user)
      console.log(2)

      const { email: userEmail, name, _id } = res.data
      console.log(3)

      // store user
      localStorage.setItem("user", JSON.stringify({
        email: userEmail,
        name,
        _id
      }))

      setErrorMsg("")

      // ✅ redirect to home
      navigate("/")

    } catch (error) {
      setErrorMsg("Invalid email or password")
      console.log("Login Error:", error.response?.data || error.message)
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center min-vh-100 px-2">

        <div className="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4">
          <div className="card shadow-lg p-4">

            <h3 className="text-center text-primary mb-4">Welcome Back</h3>

            {/* ✅ show error */}
            {errorMsg && (
              <p className="text-danger text-center">{errorMsg}</p>
            )}

            <form>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-2">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="d-flex justify-content-end mb-3">
                <a href="#" className="small text-primary">Forgot Password?</a>
              </div>

              <button onClick={handleLogin} className="btn btn-primary w-100">
                Login
              </button>

              <p className="text-center mt-3 mb-0">
                Don’t have an account?{" "}
                <Link to="/register" className="text-primary fw-semibold">
                  Register
                </Link>
              </p>

            </form>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Login