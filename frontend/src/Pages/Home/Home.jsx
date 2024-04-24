import React from 'react'
import HeroSection from '../../components/HeroSection'
import About from '../../components/About'
import Qualities from '../../components/Qualities'

import Reservation from '../../components/Reservation'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <About/>
      <Qualities/>
      
      <Reservation/>
      <Footer/>
    </>
  )
}

export default Home
