import React from 'react'
import NavBar from './NavBar'
import Slider from './Slider'
import FeatureCategories from './FeatureCategories'
import About from './About'
import AboutTwo from './AboutTwo'
import Footer from './Footer'

function Home() {
  return (
    <div>
    <NavBar/>
      <Slider/>
        <FeatureCategories/>
        <AboutTwo/>
        <About/>
    <Footer/>
    
    </div>
  )
}

export default Home