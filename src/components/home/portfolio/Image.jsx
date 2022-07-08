import React from 'react'
import parse from 'html-react-parser'

const Image = (img, title, link) => {
  return (
    <div className='grid'>
        <figure className="effect-layla">
            <img src={img.src} alt="img06"/>
            <figcaption>
                <h3 className='text-accent'>{img.title}</h3>
                <p className='text-work'>{ parse(img.description) }</p>
                <a href={img.link} target="_blank"></a>
            </figcaption>			
        </figure>
    </div>
  )
}

export default Image