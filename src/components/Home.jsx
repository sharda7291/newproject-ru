import React from 'react'
import NavBar from './NavBar'
import Slider from './Slider'
import FeatureCategories from './FeatureCategories'
import About from './About'
import AboutTwo from './AboutTwo'
import Footer from './Footer'
import ProductPage from '../ProductPage'
import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <div>
      <Helmet>
  <title>Oil & Gas Tools Supplier in Russia | Trusted Industrial Equipment</title>
  <meta
    name="description"
    content="Leading supplier of oil and gas tools in Russia. We provide reliable drilling, production, and pipeline equipment to support energy operations across the region."
  />
  <link rel="canonical" href="/" />
</Helmet>

    <NavBar/>
      <Slider/>
        {/* <FeatureCategories/> */}
        <ProductPage/>
        <AboutTwo/>
        <About/>
    <Footer/>
    
    </div>
  )
}

export default Home