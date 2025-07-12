import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Slider from './components/Slider'
import FeatureCategories from './components/FeatureCategories'
import About from './components/About'
import AboutTwo from './components/AboutTwo'
import Choose from './components/Choose'
import Footer from './components/Footer'
import Offer from './components/offer'
import ChooseBlack from './components/ChooseBlack'
import Home from './components/Home'
import AboutPage from './Aboutpage'
import ContactPage from './contactPage'
import ProductPage from './ProductPage'
import OilandgasPage from './oilandgasPage';
import PipeToolsPage from './PipeToolsPage';
import HotelierPage from './HotelierPage';
import SafetyToolsPage from './SafetyToolsPage';
import ToolsTrolleyPage from './ToolsTrolleyPage';
import PrecisionToolsPage from './PrecisionToolsPage';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products/oil-and-gas" element={<OilandgasPage/>} />
        <Route path="/products/pipe-and-plumbing" element={<PipeToolsPage/>} />
        <Route path="/products/hotelier" element={<HotelierPage/>}/>
        <Route path="/products/safety-tools" element={<SafetyToolsPage/>} />
        <Route path="/products/tools-trolley" element={<ToolsTrolleyPage/>} />
        <Route path="/products/precision-tools" element={<PrecisionToolsPage/>}/>
      </Routes>
    </Router>
  )
}

export default App