import React from 'react';

const Cert = () => {
  return (
    <div
      id="certCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >

      {/* Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#certCarousel" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#certCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#certCarousel" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#certCarousel" data-bs-slide-to="3"></button>
        <button type="button" data-bs-target="#certCarousel" data-bs-slide-to="4"></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">

        <div className="carousel-item active d-flex flex-row gap-4">
          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" className="d-block w-100" alt="Slide 1" />
          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" className="d-block w-100" alt="Slide 5" />

        </div>

        <div className="carousel-item">
          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" className="d-block w-100" alt="Slide 2" />
        </div>

        <div className="carousel-item">
          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" className="d-block w-100" alt="Slide 3" />
        </div>

        <div className="carousel-item">
          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" className="d-block w-100" alt="Slide 4" />
        </div>



      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#certCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#certCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>

    </div>
  );
};

export default Cert;
