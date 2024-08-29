import React from 'react'
import "./home.css"
import Navbar from '../../component/navbar/navbar'
import imghome from './House searching-rafiki.png'
import Footer from '../../component/footer/footer'
import toast, { Toaster } from 'react-hot-toast'

function Home() {
  return (
    <div>
     <Navbar/>
        <h1 className='page-title'>Home</h1>
        <img src={imghome} className='header-img'/>

        <button type="button"className='button' onClick={()=>{
          toast.loading("loaded please wait...")
        }}> loading</button>

        <button className='button' type="button" onClick={()=>{
          toast.dismiss()
          toast.success("Home is loaded successfully")
        }}> successful</button>
        
        <Footer/>
        <Toaster/>
    </div>
  )
}

export default Home