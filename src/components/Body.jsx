import React from 'react'
import Banner from './home/Banner'
import Projects from './home/Projects'
import Service from './home/Service'
import Tools from './home/Tools'
import Portfolio from './home/Portfolio'

const Body = () => {
  return (
    <div>
        <Banner />
        <Projects />
        <Service />
        <Tools />
        <Portfolio />
    </div>
  )
}

export default Body