import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import GalleryExpertise from './GalleryExpertise'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
     <Hero/>
     <Services/>
     <GalleryExpertise/>
     <Footer/>
    </div>
  )
}

export default Home
