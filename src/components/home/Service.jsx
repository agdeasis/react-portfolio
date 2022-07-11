import React from 'react'

const Service = () => {
  return (
    <section>
        <div className='section container service'>
            <div className='text-center title-wrapper'>
                <h1 className='section-title mb-5'>What I Offer?</h1>
                <p>Things that I enjoy to do</p>
            </div>

            <div className='mt-5 row  mb-5 text-center'>
                <div className='col-md-4 mt-3'>
                    <img src="./images/service/resdes.svg" className='mx-auto d-block img-fluid mb-5 mt-5' alt="" />
                    <h2 className='mb-4'>Responsive Design</h2>
                    <p className='branding-p'>Build website from different devices, browser and cross platform using media queries.</p>
                </div>
                <div className='col-md-4 mt-3'>
                    <img src="./images/service/dev.svg" className='mx-auto d-block img-fluid mb-5 mt-5' alt="" />
                    <h2 className='mb-4'>Development</h2>
                    <p className='branding-p'>Convert UI/UX in to functional and working website. Integrate REST API from backend.</p>
                </div>
                <div className='col-md-4 mt-3'>
                    <img src="./images/service/collab.svg" className='mx-auto d-block img-fluid mb-5 mt-5' alt="" />
                    <h2 className='mb-4'>Optimization</h2>
                    <p className='branding-p'>Provide solution and fix common problems that affects website's performance and user experience.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service