import React from 'react'
import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from '../../Components/Footer/Footer'
import About from '../../Components/About/About'
import Coffee_dis from '../../Components/Coffee_dis/Coffee_dis'
import Coffee_cer from '../../Components/Coffee_cer/Coffee_cer';

function Home() {
  return (
    <>
     <Navbar/>
      <Banner />
      <About/>
      <Coffee_dis/>
      <Coffee_cer/>
      <Footer/>
    </>
  )
}

export default Home