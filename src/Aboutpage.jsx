import React from 'react'
import NavBar from './components/NavBar'
import Slider from './components/Slider'
import FeatureCategories from './components/FeatureCategories'
import About from './components/About'
import AboutTwo from './components/AboutTwo'
import Choose from './components/Choose'
import Footer from './components/Footer'
import Offer from './components/offer'
import ChooseBlack from './components/ChooseBlack'

function AboutPage() {
  return (
    <div>
    <NavBar/>
     <div className='m-0' style={{ backgroundImage: "url('/bg-3.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div style={{padding: ' 100px',}}>
          <div style={{border: '1px solid #1c1c1c',padding:'50px', margin: '0px 18px', borderRadius:'10px'}}>
           <h1 className='text-center'>About us</h1>
            <p className='pt-2 text-white text-center' style={{fontSize: '16px'}}>Specialize in Tools for Plumbing, Safety, Oil and Gas Operations, Hotelier Maintenance, and Other Industrial Applications.
       </p>
           
           </div>
        </div>
       </div>
      <section className="container-fluid py-5" style={{padding:'100px', backgroundColor:'#f4f4f4'}}>
      <div className="row">
        {/* Text Column */}
        <div className="col-md-8 px-5">
          <h2 className="mb-4" style={{ color: '#b22222'}}>
            Reliable Tools. Global Supply.
          </h2>
          <p className="mb-4" style={{ color: '#000',textAlign: 'justify'}}>
            Tools 4 Oil and Gas is a trusted hand tools exporter from India, supplying high-performance solutions to B2B clients across Russia and other key international markets. We specialize in tools for plumbing, safety, oil and gas operations, hotelier maintenance, and other industrial applications.
With deep experience in global trade, we understand the priorities of importers, distributors, and industrial buyers—from compliance and product reliability to timely delivery and cost-efficiency. All our products meet international quality standards and are backed by competitive pricing and strong after-sales support.
</p>
<h4 style={{color:'#b22222'}}>Why Work With Us:</h4>
<p>Extensive product range for industrial, hospitality, and energy sectors
Seamless export documentation and logistics
Responsive service in English and Russian</p>
<h4 style={{color:'#b22222'}}>Let’s build a supply chain that’s efficient, dependable, and built for long-term success.</h4>

        
        </div>

        {/* Image or Placeholder Column */}
        <div className="col-md-4 d-flex align-items-center justify-content-center px-5">
          {/* Add your image here if needed */}
          <img
            src="/logo.png"
            alt="Industrial Tools"
            className="img-fluid rounded shadow"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
        <About/>
    <Footer/>
    </div>
  )
}

export default AboutPage