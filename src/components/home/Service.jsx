import React from 'react'

const Service = () => {
  return (
    <section>
        <div className='section container service'>
            <div className='text-center title-wrapper'>
                <h1 className='section-title mb-5'>What I Offer?</h1>
                <p>aboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div className='mt-5 row  mb-5 text-center'>
                <div className='col-md-4 mt-3'>
                    <img src="./images/service/resdes.svg" className='mx-auto d-block img-fluid mb-5 mt-5' alt="" />
                    <h2 className='mb-4'>Responsive Design</h2>
                    <p className='text-work branding-p'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
                <div className='col-md-4 mt-3'>
                    <img src="./images/service/dev.svg" className='mx-auto d-block img-fluid mb-5 mt-5' alt="" />
                    <h2 className='mb-4'>Convert your design into a working website</h2>
                    <p className='text-work branding-p'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className='col-md-4 mt-3'>
                    <img src="./images/service/collab.svg" className='mx-auto d-block img-fluid mb-5 mt-5' alt="" />
                    <h2 className='mb-4'>Team Collaboration</h2>
                    <p className='text-work branding-p'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service