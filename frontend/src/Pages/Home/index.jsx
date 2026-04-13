import React, { useContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BsLaptop } from "react-icons/bs";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaDatabase } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { AuthContext } from '../Context/AuthContext';
import { ToDoContext } from '../Context/ToDoContext';




const Home = () => {
  const { todo } = useContext(ToDoContext);
  const { student } = useContext(ToDoContext);

  const [count, setCount] = useState(0)
  const [experience, setExperience] = useState(0)
  const [followers, setFollowers] = useState(0)
  console.log(todo);

  setTimeout(() => {
    if (count < 20) {
      setCount(count + 1)
    }
    if (experience < 16300) {
      setExperience(experience + 815)
    }

    if (followers < 1000) {
      setFollowers(followers + 50)
    }




  }, 50)

  const user = [
    {
      count: followers,
      des: "Student Worked With",
      id: 1
    },
    {
      count: count,
      des: "Year Of Experience",
      id: 2
    }, {
      count: experience,
      des: "Social Media Following",
      id: 3
    },
    {
      count: 0,
      des: "Previous Experience Required",
      id: 4
    }
  ]


  const { text, setText } = useContext(AuthContext)



  const handleChange = () => {
    setText({ name: "CDD", dec: "sjfhjhdhddj" })
  }
  const cards = [
    {
      icon: <BsLaptop size={30} className="mb-3" />,
      title: "Ethical Hacking and Penetration Testing",
      desc: "Learn Cybersecurity a fun way, through hands-on Ethical Hacking and Penetration Testing techniques."
    },
    {
      icon: <HiMiniComputerDesktop size={30} className="mb-3" />,
      title: "Cybersecurity Foundations",
      desc: "Build a strong foundation that supports any cybersecurity path."
    },
    {
      icon: <FaDatabase size={30} className="mb-3" />,
      title: "Data & Network Security",
      desc: "Understand how data and networks are protected in real environments."
    },
    {
      icon: <FaLaptopCode size={30} className="mb-3" />,
      title: "Secure Development",
      desc: "Learn how developers write secure and resilient applications."
    }
  ];
  const articles = [
    {
      bg: "back-1",
      title: "Cybersecurity Career Path Roadmap to $200k",
      desc: "From Zero to Cyber Hero: Your No-BS Cybersecurity Career Path Roadmap to a Six-Figures. The $200K Question Nobody Asked. It is 2 AM. You’re sitting..."
    },
    {
      bg: "back-2",
      title: "Kali Linux Tutorial",
      desc: "Introduction to Kali Linux. Kali Linux is a Debian-based Linux distribution designed for penetration testing, forensics and security auditing."
    },
    {
      bg: "back-3",
      title: "Unix Commands Cheat Sheet – Your One-Stop-Shop",
      desc: "As a security analyst or penetration tester, Unix commands aren’t just tools for everyday tasks – they are core tools when investigating a hostile environment."
    }
  ];


  return (
    <div className='full-back'>
      <div className='bg-white'>
        <div className='back-img container-fluid d-flex align-items-center'>
          <div className='container'>
            <p className='text-white'><b>Ready To Hack Your Way Into Cyber Security But Unsure Where To Start?</b></p>
            <h5 className='text-white display-inline fs-1 '><strong>Learn Real-World Cybersecurity Skills <br /> —Without Coding, Certifications, or a <br /> Degree</strong></h5><br />
            <p className='text-white'>Most Effective Cyber Security Career Switch Blueprint To Get You Hired.
            </p>
            <br />
            <div className='d-flex gap-3 flex-lg-row flex-md-row flex-xl-row flex-sm-row'>
              <button className='btnu'>Download Books</button>
              <button className='btnu'>Become A Member</button>
            </div>
          </div>
        </div>
        <div className='container  slide'>
          <div className='row d-flex flex-row lg-flex-column '>



            {
              user.map((item, i) => {



                return (

                  <div className='col-lg-3 col-md-6 col-sm-12 py-5' key={i}>
                    <span className='fs-1 d-flex flex-column align-items-center justify-content-center'>
                      <b>{item?.count}+</b>
                    </span>
                    <p className='fs-5 text-center text-black'><b>{item?.des}</b></p>

                  </div>

                )
              })
            }
            <button onClick={handleChange} style={{ marginTop: "100px", border: "2px solid green" }}>HandlChange</button>



          </div>
        </div>
        <br /><br /><br />
        <div className='container container-md-fluid slider '>
          {
            todo.map((item, i) => {

              return (
                <div key={i} className='row d-flex flex-row flex-lg-row flex-md-row flex-sm-column gap-4 align-items-center'>
                  <div className='col-lg-6 col-md-12 col-sm'>
                    <b>{item?.title}</b><br /><br />
                    <p className='text-black word'>{item?.description}</p>
                  </div>
                  <img src={item?.image} alt="image" className='col-lg-6 col-md-12 col-sm' />
                </div>)
            })
          }
        </div>
        <br /><br /><br />
        <div className="container">
          <h1 className="text-center font mb-5">
            <b>
              Focus On Exactly What Matters <br />
              To Make It In Cybersecurity
            </b>
          </h1>

          <div className="row justify-content-center g-4">

            {cards.map((card, index) => (
              <div className="col-md-6" key={index}>
                <div className="cyber-card p-4 background text-white d-flex flex-column justify-content-center align-items-center text-center">

                  {card.icon}

                  <h5>
                    <b>{card.title}</b>
                  </h5>

                  <p className="fs-5">
                    {card.desc}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>
        <br /><br /><br />
        <div className="container py-5">
          {student.map((item, i) => {
            return (
              <div className="row gx-5 gy-5 align-items-stretch" key={i}>

                {/* IMAGE COLUMN */}
                <div className="col-12 col-md-6 d-flex">
                  <img src={item?.img} alt="image" className='imge' />
                </div>

                {/* CONTENT COLUMN */}
                <div className="col-12 col-md-6">
                  <p className="fs-2 font mb-3">
                    <b>
                      {item?.title}
                    </b>
                  </p>

                  <p className="fs-5 mb-4">
                    {item?.Cybersecurity}
                  </p>

                  <button className="btns fs-5">
                    <b>{item?.btn}</b>
                  </button>
                </div>

              </div>
            )
          })}
        </div>
        <br /><br /><br />
        <div className='container '>
          <h4 className='font text-center '><b>What Other Students Say
          </b></h4>
          <br />
          <div className='row  '>
            <div className='col-1 d-flex justify-content-end  align-items-center font'>&lt;</div>
            <div className='d-flex flex-row justify-content-center col-10 gap-4'>
              <div className="row g-4">
                <div className='col-lg-6 d-flex'>
                  <div className='p-4 px-5  d-flex flex-column justify-content-start align-items-center text-center back-g w-100 h-100'>
                    <p className='mb-3'>
                      I purchased this membership because it seems like a great place for beginners like myself to learn how to set up labs and run tests on our own without much equipment. Also the language is one that is understandable; there isn’t a lot of what I like to call “jargon.” It's very clearly explained, and that’s what I liked the most: simple explanations for tasks that can be complex. The information available on the site is easy to understand and train yourself in the ways of the ethical hacker.
                    </p>

                    <div className='d-flex flex-row gap-2 align-items-center w-100 justify-content-center'>
                      <div className='inner-div'></div>
                      <p className='fs-5 m-0'><b>David Shwan</b></p>
                    </div>
                  </div>
                </div>

                <div className='col-lg-6 d-flex justify-content-center '>
                  <div className='p-4  d-flex flex-column justify-content-center align-items-center text-center back-g w-100 h-100'>
                    <p className='mb-3'>
                      Wow you guys are amazing thanks so much, ethical hacking has always been something I was interested in… thank you so very much for the lessons and knowledge to make my dreams possible
                    </p>
                    <div className='d-flex flex-row gap-2 align-items-center justify-content-center'>
                      <div className='inner-div'></div>
                      <p className='fs-5 m-0'><b>David Shwan</b></p>
                    </div>
                  </div>
                </div>
              </div>



            </div>
            <div className='col-1 d-flex justify-content-start  align-items-center text-center font'>&gt;</div>
          </div>
        </div>
        <br /><br /><br />
      </div>
      <div className='container text-center py-5'>
        <b className='fs-2 text-white'>Gain Real-World Skills Designed To Get You Hired</b>
        <br /> <br />
        <p className='text-white font-size'>At HackingLoops, our blueprint offers real-world training that gives you the practical, hands-on <br /> experience employers demand on day 1 upon hire. All without without needing to code, chase <br /> expensive certifications, or go back for a degree.</p>
        <br />
        <p className='text-white font-size'>By applying your knowledge in real-world scenarios, you’ll bridge the gap that has been keeping you <br /> from getting started — mastering core cybersecurity skills faster, more effectively, and with confidence.</p>
        <button className='btnu'>
          <b>Quickly Get Started In Cybersecurity Today</b>
        </button>
      </div>
      <div className="container-fluid bg-white py-5">
        <div className="container">
          <div className="row g-4">

            {articles.map((article, index) => (

              <div className="col-md-4 d-flex" key={index}>
                <div className="shadow p-0 w-100 d-flex flex-column">

                  <div className={article.bg}></div>

                  <div className="container p-3 d-flex flex-column flex-grow-1">

                    <b className="fs-5 text-blue">
                      {article.title}
                    </b>

                    <p className="mt-2 font-size flex-grow-1">
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
          <br /><br />
          <div className='align-items-center justify-content-center d-flex'>
            <button className=' bg-blue '><b>Read More</b></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home