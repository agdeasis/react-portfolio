import React from "react";

const About = () => {
  return (
    <section className="mt-5" id="about">
      <div className="section container">
        <div className="title-wrapper">
          <div className="text-center">
            <h1 className="section-title">About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="row section-about">
            <div className="col-md-5 p-3">
              <div className="div-img">
                <img
                  src="./images/rak.jpg"
                  className="img-fluid mx-auto d-block"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-7 text-left about-right">
              <div className="about-right-details">
                <h1 className=" header-title">
                  Arnel De Asis
                  <span>About</span>
                </h1>
                <span className="mt-2">
                  <i>Front-end Developer</i>
                </span>
                <hr />
                <p style={{ marginTop: "40px" }}>
                  I am a Web Developer, and I'm very passionate and dedicated to
                  my work.
                </p>
                <br />
                <p>
                  With 5 years experience as a Web developer, I have acquired
                  the skills and knowledge necessary to make your project a
                  success. I enjoy every step of the design process, from
                  discussion and collaboration.
                </p>
                <br /> <br />
                <a
                  href="/agdeasis.pdf"
                  target="_blank"
                  className="btn-custom btn"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
