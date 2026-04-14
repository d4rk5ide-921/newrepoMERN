import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div class="container">
  <div class="row justify-content-center align-items-center min-vh-100 px-2">
    
    <div class="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4">
      <div class="card login-card shadow-lg p-4">
        
        <h3 class="text-center text-primary mb-4">Welcome Back</h3>

        <form action="/login" method="POST">

          <div class="mb-3">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" name="email" placeholder="example@email.com" required />
          </div>

          <div class="mb-2">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" name="password" placeholder="••••••••" required />
          </div>

          <div class="d-flex justify-content-end mb-3">
            <a href="#" class="small text-primary">Forgot Password?</a>
          </div>

          <button type="submit" class="btn btn-primary w-100">Login</button>

          <p class="text-center mt-3 mb-0">
            Don’t have an account?
            <Link to="/register" class="text-primary fw-semibold">Register</Link>
          </p>

        </form>

      </div>
    </div>

  </div>
</div>
  )
}

export default Login