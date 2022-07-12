import React from 'react'
import Banner from './home/Banner'
import About from './home/About'
import Service from './home/Service'
import Tools from './home/Tools'
import Portfolio from './home/Portfolio'
import Experience from './home/Experience'

const Body = () => {
  return (
    <div className='x-wrapper'>
        <Banner />
        <About />
        <Service />
        <Tools />
        <Portfolio />
        <Experience />
    </div>
  )
}

export default Body