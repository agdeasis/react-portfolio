import React from "react";

const Contact = () => {
  return (
    <section className="section-contact" id="contact">
      <div className="container p-4">
        <div className="text-center py-2" style={{ paddingTop: "100px" }}>
          <h1 className="section-title white">
            Let's discuss on <br /> something cool together
          </h1>
        </div>
        <div className="row py-5">
          <div className="col-lg-6">
            <h1 className="white notify-h1">Notify me!</h1>
            <div className="mt-2 contact-des">
              <p className="mb-3">
                Want to say "Hey!"? Got something you'd like to ask? New project
                or opportunity?
              </p>
              <p className="mb-3">
                Get your space suit ready and tell me your ideas to develop your
                dream application.
              </p>
              <p className="mb-3">
                Alternatively, notify me an email at
                <a
                  href="arnelgdeasis@gmail.com"
                  className="font-weight-bold ml-1"
                >
                  <b className="ml-1">arnelgdeasis@gmail.com</b>
                </a>
              </p>

              <div className="medias my-5">
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/agdeasis"
                  target="_blank"
                >
                  <img src="./images/contact/git.svg" alt="" />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://ph.linkedin.com/in/arnel-de-asis-a70183248?trk=public_profile_samename-profile"
                  target="_blank"
                >
                  <img src="./images/contact/li.svg" alt="" />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/arnelgdeasis"
                  target="_blank"
                >
                  <img src="./images/contact/fb.svg" alt="" />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/arneldeeasis/"
                  target="_blank"
                >
                  <img src="./images/contact/ins.svg" alt="" />
                </a>
                <address>
                  <a href="mailto:arnelgdeasis@gmail.com">
                    <img src="./images/contact/email.svg" alt="" />
                  </a>
                </address>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <form>
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Subject"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  required
                  placeholder="Message"
                  rows="5"
                ></textarea>
              </div>
              <div className="form-group mb-5 pb-5">
                <button className="btn-custom btn" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
