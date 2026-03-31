import React from 'react'
import { FaEnvelope, FaLocationDot } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="footer py-4 sub-div ">
      <div className="container-fluid">
        <div className="row g-4 ">

          <div className="col-md-4 p-0 m-0">
            <img src="https://www.hackingloops.com/wp-content/uploads/2025/07/grayscale_transparent_nobuffer.png" alt="" className='imag imaga' />
            <br />
            <p className='para my-0'>This was created for those who want to obtain a lucrative career in cybersecurity. Get this free guide delivered to your email that will show you step-by-step how to get into cybersecurity.</p>
          </div>

          <div className="col-md-4">
            <h5 ><b>Quick Links</b></h5>
            <ul className="list-unstyled quick">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Membership</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="col-md-4 contact">
            <h5><b>Contact Details</b></h5>
            <div>
              <div className='d-flex  gap-2  justify-content-center aling item centerm'>
                <div className='  '>
                  <FaLocationDot size={15} />
                </div>
                <p className='  word-gap'>500 Westover Dr #8208, Sanford, NC 27330</p>


              </div>
              <div className='d-flex gap-2 justify-content-center aling item center'>
                <div>
                  <FaEnvelope size={15} />
                </div>
                <p className='word-gap'>hackingloopsteam@hackingloops.com</p>

              </div>
            </div>
            {/* <ul className="list-unstyled ">
              <li className='d-flex'>
                <i class="fa-solid fa-location-dot py-2"></i>
              </li>
              <li className='d-flex'>
                <i class="fa-regular fa-envelope px-2 py-2"></i>
                <p className='word-gap'>hackingloopsteam@hackingloops.com
                </p>
              </li>
            </ul> */}
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
