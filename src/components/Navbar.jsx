import React from 'react'
import { useState } from 'react'

const Navbar = () => {

  const [showNav, setNav] = useState(false);

  const showMenu = () => {
    document.getElementById("menu").classList.toggle("show");
  }

  const hideMenu = () => {
    document.getElementById("menu").classList.remove("show");
  }

  return (
     <header>
      <div  className="container navbar">
        <div  className="logo">agd.</div>
        <nav id="menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <svg  onClick={ (e) => { showMenu(); } } onBlur={ (e) => { hideMenu(); } } id="burger" fill=" #fff" viewBox="0 0 448 512" title="bars">
          <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
        </svg>
      </div>
     </header>
  )
}

export default Navbar