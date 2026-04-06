import React, { useState } from 'react'
import "./style.css"

const Blog = () => {

  const [articlees, setArticlees] = useState([
    {
      bg: "back-1",
      title: "Cybersecurity Career Path Roadmap to $200k",
      desc: "From Zero to Cyber Hero: Your No-BS Cybersecurity Career Path Roadmap..."
    },
    {
      bg: "back-2",
      title: "Kali Linux Tutorial",
      desc: "Introduction to Kali Linux. Debian-based OS for pentesting..."
    },
    {
      bg: "back-3",
      title: "Unix Commands Cheat Sheet",
      desc: "Core commands for security analysts and pentesters..."
    },
    {
      bg: "back-1",
      title: "Cybersecurity Career Path Roadmap to $200k",
      desc: "From Zero to Cyber Hero: Your No-BS Cybersecurity Career Path Roadmap..."
    },
    {
      bg: "back-2",
      title: "Kali Linux Tutorial",
      desc: "Introduction to Kali Linux. Debian-based OS for pentesting..."
    },
    {
      bg: "back-3",
      title: "Unix Commands Cheat Sheet",
      desc: "Core commands for security analysts and pentesters..."
    }

  ]);

  // ✅ Added missing array (this was crashing your app)
  const moreArticles = [
    {
      bg: "back-1",
      title: "Cybersecurity Career Path Roadmap to $200k ✅",
      desc: "From Zero to Cyber Hero: Your No-BS Cybersecurity Career Path Roadmap..."
    },
    {
      bg: "back-2",
      title: "Kali Linux Tutorial",
      desc: "Introduction to Kali Linux. Debian-based OS for pentesting..."
    },
    {
      bg: "back-3",
      title: "Unix Commands Cheat Sheet",
      desc: "Core commands for security analysts and pentesters..."
    } 

  ];

  const loadmore = () => {
    setArticlees(prev => [...prev, ...moreArticles]);
  };

  const Categories = [
    "All",
    "Android Tips",
    "CEH Practice Tests",
    "Cross Site Scripting",
    "Cryptography",
    "Cybersecurity",
    "DDOS",
    "Email Hacking",
    "Ethical Hacking",
    "Hack Tools",
    "Statistics and Trends"
  ];

  return (
    <div>

      {/* HERO SECTION */}
      <div className='img11 d-flex justify-content-center align-items-center text-center'>
        <div className="container">
          <p className="fs-2 text-white fw-bold">Hackingloops Blog</p>

          <p className='text-white fs-5'>
            The Hackingloops Blog is created to help you break in cybersecurity—without the overwhelm.
          </p>

          <p className='text-white fs-5'>
            <b>Subscribe to get the latest posts, tools, and guides.</b>
          </p>

          <div className="d-flex justify-content-center mt-4">
            <div className="input-group custom-subscribe">
              <input
                type="email"
                className="form-control border-0"
                placeholder="Email Address"
              />
              <button className="btn btn-warning text-white fw-bold px-4">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CATEGORY SECTION */}
      <div className='container mt-4'>
        <div className='d-flex justify-content-between'>
          <p className='fs-2 fw-bold blue-text'>Explore Categories</p>

          <div className='input-custom d-flex'>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet" />
            <i className="bi bi-search fs-4 d-flex align-items-center"></i>
            <input className='input-cus' placeholder='Type to Start Searching...' />
          </div>
        </div>

        <div className='d-flex flex-wrap gap-2 mt-3'>
          {Categories.map((item, index) => (
            <button key={index} className='font-js'>{item}</button>
          ))}
        </div>
      </div>

      {/* ARTICLES SECTION */}
      <div className='container mt-4'>
        <div className='row'>
          {articlees.map((article, index) => (
            <div className="col-md-4 d-flex mt-4" key={index}>
              <div className="shadow w-100 d-flex flex-column">

                <div className={article.bg}></div>

                <div className="p-3 d-flex flex-column flex-grow-1">
                  <b className="fs-5 text-blue">{article.title}</b>

                  <p className="mt-2 flex-grow-1">
                    {article.desc}
                  </p>

                  <button className="all-in mb-2">
                    <b>Read More</b>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* LOAD MORE BUTTON */}
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={loadmore}>
            Load More
          </button>
        </div>

      </div>

    </div>
  )
}

export default Blog;  