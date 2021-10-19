import React from "react";

const Hero = () => {
  return (
    <header className="mastHead">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://miro.medium.com/max/1400/1*YZjfn52wLI-l_ReW9928EA.jpeg"
              className="d-block w-100"
              alt="1"
            ></img>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.theconversation.com/files/389548/original/file-20210315-17-jupa75.jpg?ixlib=rb-1.1.0&rect=0%2C5%2C1985%2C1299&q=45&auto=format&w=926&fit=clip"
              className="d-block w-100"
              alt="..."
            ></img>
          </div>
          <div className="carousel-item">
            <img
              src="https://etonbridgepartners.com/wp-content/uploads/2020/07/Emotional-intelligence-and-leading-through-uncertainty-782x504-1.jpg"
              className="d-block w-100"
              alt="..."
            ></img>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </header>
  );
};

export default Hero;
