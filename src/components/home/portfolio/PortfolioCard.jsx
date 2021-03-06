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
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                <div style={{maxWidth:'500px'}} className='mt-5 p-3'>
                    <h2>{ data.title } <br /> <span className='text-dark-accent subtitle' style={{lineHeight:1}}>{ data.sub }</span> </h2>
                    <div className='mt-4  mb-4'>{ parse(data.description) }</div>
                    <div className='visit-url d-flex align-items-center'>
                        <a href={data.link} target="_blank" className='text-work'>View Site </a>
                        <img src="./images/arrow-r.svg" height="15px"  alt="" />
                    </div>
                   
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