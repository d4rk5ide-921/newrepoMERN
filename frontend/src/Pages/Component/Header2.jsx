import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg background ">
      <div className=" container-fluid">
        <a className="navbar-brand" href="#"> <img
          src="https://www.hackingloops.com/wp-content/uploads/2025/07/grayscale_transparent_nobuffer.png"
          alt=""
          className="imag px-2 "
        /></a>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-start text-lg-center "  >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-decoration-none text-white txt ${isActive ? 'active' : ''}`
              }
            >
              <h5><b>Home</b></h5>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-decoration-none text-white txt ${isActive ? 'active' : ''}`
              }
            >
              <h5><b>About</b></h5>
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `text-decoration-none text-white txt ${isActive ? 'active' : ''}`
              }
            >
              <h5><b>Blog</b></h5>
            </NavLink>
            <NavLink
              to="/free-break"
              className={({ isActive }) =>
                `text-decoration-none text-white txt ${isActive ? 'active' : ''}`
              }
            >
              <h5><b>Cyberjump</b></h5>
            </NavLink>
            <NavLink
              to="/cert"
              className={({ isActive }) =>
                `text-decoration-none text-white txt ${isActive ? 'active' : ''}`
              }
            >
              <h5><b>
                Certscape</b></h5>
            </NavLink>


          </ul>
          <form className="d-flex">
            <button className="btnu">
              <h5 className="m-0"><strong>Membership</strong></h5>
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Header