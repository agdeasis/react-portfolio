import React from 'react'
import PortfolioCard from './portfolio/PortfolioCard'
import PortfolioData from './portfolio/PortfolioData'

const Portfolio = () => {
  return (
    <section className='portfolio' style={{ background: '#fff' }}>
        <div className='text-center'  style={{paddingTop:'100px'}}>
            <h1 className='section-title text-black'>Some Recent Works</h1>
            <div className='text-center pb-5 mb-5'>
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

    </section>
  )
}

export default Portfolio