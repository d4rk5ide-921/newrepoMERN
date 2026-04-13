import React from 'react';
import "./style.css";

const Cert = () => {
  const cert = [
    {
      h2: "Beginner",
      all_inn: ["Network+", "CCNA", "Security+"],
      color: "success"
    },
    {
      h2: "Cloud / Vendor",
      all_inn: ["AWS CP", "AZ-900", "Google ACE"],
      color: "warning"
    },
    {
      h2: "Security Core",
      all_inn: ["Security+", "SSCP", "GSEC"],
      color: "secondary"
    },
    {
      h2: "Blue Team",
      all_inn: ["CySA+", "GCIA", "GCIH"],
      color: "primary"
    },
    {
      h2: "Red Team",
      all_inn: ["eJPT", "OSCP", "CRTO"],
      color: "danger"
    }
  ]

  return (
    <div className="cert-container bodyy">

      <div className="cert-header d-flex justify-content-center align-items-center">
        <p className='fs-3 text-white'><b>Cybersecurity Certifications</b></p>
      </div>
      <br /><br />
      <div className="container justify-content-center ">
        <div className="row">
          {cert.map((item, i) => {
            return (
              <div className={`  col-6  col-md-4 col-lg-3    bg-${item.color} `}>
                <h2>{item.h2}</h2>
                <div className="all-inn">{item.all_inn[0]}</div>
                <div className="all-inn">{item.all_inn[1]}</div>
                <div className="all-inn">{item.all_inn[2]}</div>
              </div>
            )
          })}
        </div>
      </div>
      <br />
    </div>
  );
};

export default Cert;