import React from 'react';
// import "./style.css";

const Cert = () => {
  return (
    <div className="cert-container bodyy">

      <div className="cert-header d-flex justify-content-center align-items-center">
        <p className='fs-3 text-white'><b>Cybersecurity Certifications</b></p>
      </div>
    <br /><br />
      <div className="container">

        <div className="column green">
          <h2>Beginner</h2>
          <div className="all-in">Network+</div>
          <div className="all-in">CCNA</div>
          <div className="all-in">Security+</div>
        </div>

        <div className="column orange">
          <h2>Cloud / Vendor</h2>
          <div className="all-in">AWS CP</div>
          <div className="all-in">AZ-900</div>
          <div className="all-in">Google ACE</div>
        </div>

        <div className="column black">
          <h2>Security Core</h2>
          <div className="all-in">Security+</div>
          <div className="all-in">SSCP</div>
          <div className="all-in">GSEC</div>
        </div>

        <div className="column blue">
          <h2>Blue Team</h2>
          <div className="all-in">CySA+</div>
          <div className="all-in">GCIA</div>
          <div className="all-in">GCIH</div>
        </div>

        <div className="column red">
          <h2>Red Team</h2>
          <div className="all-in">eJPT</div>
          <div className="all-in">OSCP</div>
          <div className="all-in">CRTO</div>
        </div>

      </div>
      <br /> 
    </div>
  );
};

export default Cert;