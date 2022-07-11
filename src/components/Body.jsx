import React from 'react'
import Banner from './home/Banner'
import Projects from './home/Projects'
import Service from './home/Service'
import Tools from './home/Tools'
import Portfolio from './home/Portfolio'
import Experience from './home/Experience'

const Body = () => {
  return (
    <div>
        <Banner />
        <Projects />
        <Service />
        <Tools />
        <Portfolio />
        <Experience />
    </div>
  )
}

export default Body