import React from 'react'
import parse from 'html-react-parser'
import Image from './Image';

const Portfolio = ({ data, index }) => {

  const isEvent = index % 2; 

  return (
    <div className='container pb-5'>
        <div className={ isEvent ? 'row text-black mb-5' : 'row text-black mb-5 flex-md-row-reverse'}>
            <div className="col-md-6 p-3 d-flex align-items-center">
                <Image src={data.img} title={data.title} link={data.link} description={data.short_description} />
                {/* <img className='d-block mx-auto project-img img-fluid' src={data.img} alt="" /> */}
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                <div style={{maxWidth:'500px'}} className='mt-5 p-3'>
                    <h2>{ data.title } <br /> <span className='text-dark-accent subtitle'>{ data.sub }</span> </h2>
                    <div className='mt-4 text-work'>{ parse(data.description) }</div>
                    {/* <p className='text-work'>The app encourages people to practice social distancing by helping users avoid crowded places. Users will be able to see the crowd density of places such as grocery stores, public markets, drug stores, and banks.</p> */}

                    <div className='use-tools'>
                        {
                            data.tools?.map((tool,index) => (
                                <span key={index}>{ tool }</span>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    </div> 
  )
}

export default Portfolio