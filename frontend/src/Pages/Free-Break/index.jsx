import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='back-p text-center text-white py-5 '>
        <div className='container'>
          <p className='fs-1'><b>Free Guide to Breaking Into Cyber</b></p>
          {/* <br /><br /> */}
          <p className='fs-5'>This was created for those who want to obtain a lucrative career in cybersecurity. Get <br /> this free guide delivered to your email that will show you step-by-step how to get <br /> into cybersecurity.</p>
          <br />
          <div className='d-flex flex-column flex-xl-row flex-lg-row gap-4 justify-content-center align-items-center'>
            <input type="text" className='input-1 px-2 text-start text-black' placeholder='Name' />
            <input type="text" className='input-1 px-2 text-start text-black' placeholder='Email' />
          </div>
          <br />
          <button className='btns'><b>Get Your Free Book Now</b></button>
        </div>
      </div>
      <div className=' my-5 border container'>
        <p className='font text-center'><b>What You’re Getting</b></p>
        <br />
        <div className=' align-items-center text-center d-flex flex-column'>
          <div className=' image-back '></div>
          <br />
          <p className=' fs-4 fonto'><b>Free How To Break Into Cybersecurity Book</b></p>
          {/* <br /> */}
          <p className=' fs-5'>The step-by-step guide you have been waiting for to learn how to get your first cybersecurity guide <br /> without having previous experience or certifications.

          </p>
        </div>
      </div>
      <br /><br /><br />
      <div className=' justify-content-center d-flex'>
        <p className=' price  font px-5'><b>Real Value: $39 book — FREE <br /> today!</b></p>
      </div>
      <br /><br />

      <div className='blue-b '>
        <div className='container'>
          <div className='row py-5'>
            <div className='col-lg-6 col-md-12 text-white'>
              <p className='fs-1'><b>Why You Need This Book</b></p>
              <br />
              <p className='fs-4'><b>(1) Learn Why Cybersecurity is Booming—But Still Hard to Break Into ?</b></p>
              <p className=''>Discover the hidden disconnect between explosive job growth and why so many beginners still struggle to land their first cybersecurity role—and what to do about it.</p>
              <p className='fs-4'><b>(2) How to Choose the Right Cybersecurity Path for You ?</b></p>
              <p>Uncover the key differences between red teaming, blue teaming, AppSec, SOC analysis, and more—so you don’t waste time going down the wrong path.</p>
              <p className='fs-4'><b>(3) What You Actually Need to Learn (Hint: It’s Not Just Certifications) ?</b></p>
              <p>Learn which skills, tools, and experiences matter most—plus how to quickly build a portfolio and resume that stands out, even without years of professional experience.</p>
              <p className='fs-4'><b>(4) The Truth About Getting Hired in Cybersecurity ?</b></p>
              <p>Understand how Applicant Tracking Systems (ATS), LinkedIn, and networking really influence whether you get interviews—and how to make yourself visible to recruiters.</p>
              <p className='fs-4'><b>(5) How to Build a Cybersecurity Portfolio That Opens Doors ?</b></p>
              <p>From bug bounty write-ups to fullstack security projects, see how to create a real-world portfolio that proves your skills—even if you’re brand new to the field.</p>


            </div>
            <div className='col-lg-6 col-md-12 backi pt-5'>
              <div className='container text-center text-black'>
                <div className='back-io'></div>
                <p className='fs-3 my-5'><b>Get Everything You Need To Start Breaking Into Cybersecurity Right Now</b></p>
                <p className=''>We’ll show you exactly how to go from stuck to hired—with the right skills, support, and step-by-step roadmap.</p>
                <p className='fs-5'><b>Get Your Free Book Right Now!</b></p>
                <div className='d-flex flex-column  gap-4'>
                  <input type="text" className=' bg-white user-inp text-start px-2' placeholder='Name' />
                  <input type="text" className=' bg-white user-inp text-start px-2' placeholder='Email' />
                  <button className='btns'><b>Send me the book & course</b></button>
                  <p>No spam. Unsubscribe anytime.</p>
                  <p>Your info stays private.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Contact