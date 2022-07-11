import React from 'react'

const Banner = () => {
  return (
    <div className='banner'>
        <div className='container h-100 d-flex align-items-center  justify-content-center'>
            <div className="row h-100 align-items-center row-banner">
                <div className="col-md-6 position-relative bg-images">
                     <img src="./images/vector.png" className="img-fluid mx-auto d-block" alt=""  className='bg-vector'/>
                    <img src="./images/agd.png" alt=""  className='bg-user'/>
                </div>
                <div className="col-md-6">
                    <h1  className='banner-title mt-3'>Hi there,  <br />  I'm <span className='text-success font-weight-bold'>Arnel</span>
                    </h1>
                    <h1>Front End Developer.</h1>
                    <p className='text-work mt-4'>
                        A design-minded Developer
                        focused on building beautiful
                        interfaces & experiences.
                    </p>
                    <p className='text-work'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner