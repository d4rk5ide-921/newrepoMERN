import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Free-Break'
import FreeBreak from './Free-Break'
import Blog from './Blog'
import Cert from './Cert'
import Footer from './Component/Footer'
import Header from './Component/Header'
import Register from './Login/Register'
import Login from './Login/Login'
import Admin from '../admin'
import TodoTable from './Todo'
// import Footer from './Component/Error'


const Pages = () => {
  return (
    <div className="app">
      <Header classes={"header-sticky"} />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/free-break" element={<FreeBreak />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/todo" element={<TodoTable />} /> */}
          <Route path="/cert" element={<Cert />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="*" element={<>Page Not Found 404</>} />

        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default Pages
