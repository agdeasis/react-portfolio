import React from 'react'
import PortfolioCard from './portfolio/PortfolioCard'
import PortfolioData from './portfolio/PortfolioData'

const Portfolio = () => {
  return (
    <section className='portfolio' style={{ background: '#fff' }}>
        <div className='text-center'  style={{paddingTop:'100px'}}>
            <h1 className='section-title text-black'>Some Recent Works</h1>
            <div className='text-center pb-5'>
                <p className='text-dark d-block mx-auto text-work' style={{ maxWidth:'600px' }}>
                    Love residential design and build projects - big and small. From full builds,
                    major renovations or a new lease of life to individual space.
                </p>
            </div>
        </div>

        {
            PortfolioData ? PortfolioData.map( (portolio,index) => (
                <PortfolioCard data={portolio} key={portolio.id} index={index + 1} />
            ) ) : <></>
        }

        {/* <div className='container pb-5 mt-5'>
            <div className='row text-black mb-5 '>
                <div className="col-md-6 p-3">
                    <img className='d-block mx-auto project-img img-fluid' src="https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <div style={{maxWidth:'500px'}} className='mt-5 p-3'>
                        <h2>School Management System <br /> iACADEMY Portal </h2>
                        <p className='mt-4 text-work'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi </p>

                        <div className='use-tools text-right'>
                            <span>HTML</span>
                            <span>Sass</span>
                            <span>Vue Js</span>
                            <span>Laravel</span>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div> */}

        <div className='container pb-5 mt-5 d-none'>
            <div className='row text-black mb-5'>
                <div className="col-md-6 p-3">
                    <img className='d-block mx-auto project-img img-fluid' src="https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <div style={{maxWidth:'500px'}} className='mt-5 p-3'>
                        <h2>Antipolo AMS <br /> Ayuda Management System</h2>
                        <p className='mt-4 text-work'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi </p>

                        <div className='use-tools text-right'>
                            <span>HTML</span>
                            <span>Sass</span>
                            <span>Vue Js</span>
                            <span>Laravel</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='container pb-5 mt-5 d-none'>
            <div className='row text-black mb-5 flex-md-row-reverse'>
                <div className="col-md-6 ">
                   <img className='d-block mx-auto project-img img-fluid' src="/images/portfolio/iacademy.jpg" alt="" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <div style={{maxWidth:'500px'}} className='mt-5 p-3'>
                        <h2>iACADEMY  Website</h2>
                        <p className='mt-4 text-work'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi </p>
                        <div className='use-tools'>
                            <span>HTML</span>
                            <span>jQuery</span>
                            <span>CSS</span>
                            <span>Code Igniter</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='container pb-5 mt-5 d-none'>
            <div className='row text-black mb-5'>
                <div className="col-md-6 p-3">
                    <img className='d-block mx-auto project-img img-fluid' src="/images/portfolio/iacademy.jpg" alt="" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <div style={{maxWidth:'500px'}} className='mt-5 p-3'>
                        <h2>Barangay 143 <br /> 1st Filipino Anime </h2>
                        <p className='mt-4 text-work'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi </p>

                        <div className='use-tools text-right'>
                            <span>HTML</span>
                            <span>Sass</span>
                            <span>Nuxt Js</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        

    </section>
  )
}

export default Portfolio