import React from 'react'
import "./About.css"
import Navbar from '../../component/navbar/navbar'
import imgabout from './About me-bro.png'
import Footer from '../../component/footer/footer'

function About() {
  return (
    <div>
        <Navbar/>
        <h1 className='page-title'>About</h1>
        <img src={imgabout} className='header-img'/>
        <Footer/>
    </div>
  )
}

export default About