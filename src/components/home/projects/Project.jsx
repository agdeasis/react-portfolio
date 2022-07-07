import React from 'react'

const Project = (data) => {

  return (
    <div className='project-box' style={{backgroundImage: `url(${data.data.img})`}}>

    </div>
  )
}

export default Project