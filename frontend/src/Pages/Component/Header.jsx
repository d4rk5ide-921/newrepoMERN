import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

  const user = JSON.parse(localStorage.getItem("user"))
  console.log(user)
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("user")
    navigate("/login")
  }


  return (
    <nav className={`navbar navbar-expand-lg navbar-dark h-back px-4 fixed-top`}>
      <div className="container-fluid">

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="https://www.hackingloops.com/wp-content/uploads/2025/07/grayscale_transparent_nobuffer.png"
            alt=""
            className="imag"
          />
        </Link>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible */}
        <div className="collapse navbar-collapse" id="navbarContent">

          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link text-white txt fs-5" to="/"><b>Home</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white txt fs-5" to="/free-break">
                <b>Cyber Guide</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white txt fs-5" to="/blog"><b>Blog</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white txt fs-5" to="/cert">
                <b>Certscape</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white txt fs-5" to="/about"><b>About</b></Link>
            </li>
            <li className="nav-item">
              {
                user?.name ?
                  <button onClick={handleLogout} className="nav-link text-white txt fs-5"><b>LogOut</b></button> :
                  <Link className="nav-link text-white txt fs-5" to="/login"><b>Login</b></Link>
              }
            </li>
          </ul>

          <Link to="/admin/private/student" className="btnu mx-auto mx-lg-0 px-3">
            <strong>ToDo</strong>
          </Link>

        </div>
      </div>
    </nav>

  )
}

export default Header 