import React from 'react'
import "./Contact.css"

import Navbar from '../../component/navbar/navbar'
import imgcontact from './Contact us-bro.png'
import Footer from '../../component/footer/footer'

function Contact() {
  return (
    <div>
        <Navbar/>
        <h1 className='page-title'>Contact</h1>
        <img src={imgcontact} className='header-img'/>
        <Footer/>
    </div>
  )
}

export default Contact