import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import FeatureCategories from './components/FeatureCategories'
import About from './components/About'
import { Link } from 'react-router-dom';


function ProductPage() {
  const features = [
  {
    img: '/pipe_wrench.jpg',
    title: 'Pipe and Plumbing Tools',
    desc: 'Engineered for High-Torque Applications',
    link: '/products/pipe-and-plumbing',
  },
  {
    img: '/safety_tools.png',
    title: 'Safety Hand Tools',
    desc: 'Safety Standards to ensure Compliance with Regulations',
    link: '/products/safety-tools'
  },
  {
    img: '/tools_cabinets.png',
    title: 'Tool Trolleys and Toolkits',
    desc: 'Ideals for industrial use, field work, and workshops',
    link: '/products/tools-trolley'
  },
  {
    img: '/torque_wrench.png',
    title: 'Precision Tools',
    desc: 'For Checking and Calibrating other Equipment',
    link:'/products/precision-tools'
  },
  {
    img: '/oil_and_gas.png',
    title: 'Oil and Gas Hand Tools',
    desc: 'For Checking and Calibrating other Equipment',
    link: '/products/oil-and-gas'
  },
  
  {
    img: '/drain-cleaner.png',
    title: 'Hotelier Equipment',
    desc: 'For Checking and Calibrating other Equipment',
    link: '/products/hotelier',
  },
];

  return (
    <div>
        <NavBar/>
        <div className='m-0' style={{ backgroundImage: "url('/bg-3.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div style={{padding: ' 100px',}}>
          <div style={{border: '1px solid #1c1c1c',padding:'50px', margin: '0px 18px', borderRadius:'10px'}}>
           <h1 className='text-center'>Products</h1>
            <p className='pt-4 text-center' style={{fontSize: '16px', color: '#f4f4f4'}}> </p>
           
           </div>
        </div>
       </div>
       <section>
        <div className="container py-4">
        <h1 className='text-center pt-4'>Product Categories</h1>
        <p className='text-center pb-4'>Industrial hand tools designed for various industries: from pipelines and oil & gas to hotel maintenance and safety.
</p>
        <div className="row text-center m-4">
          {features.map((feature, index) => (
            <div className="col-md-4 mb-4" key={index}>
               <Link to={feature.link}>
              <img src={feature.img} alt={feature.title} className="mb-3 p-4" width="250" style={{ borderRadius:'10%', border: '2px solid #000'}}/>
              </Link>
              <h5>{feature.title}</h5>
              <p className="text-muted" style={{fontSize: '16px'}}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
       </section>
      
       <About/>
        

        <Footer/>
    </div>
  )
}

export default ProductPage