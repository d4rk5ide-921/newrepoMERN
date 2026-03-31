import React from 'react'
import "./style.css"
import videoBg from "../../assets/5377682-uhd_3840_2160_25fps.mp4"

const blog = () => {
  return (
    <div className='main'>
      <video src={videoBg} autoPlay loop muted></video>
      <div className='content'><b>kldsvnkjs</b></div>
    </div>
  )
}

export default blog