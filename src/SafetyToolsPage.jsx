import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SafetyTools from './SafetyTools'
import About from './components/About'

function SafetyToolsPage() {
  return (
    <>
    <NavBar/>
        <div className='m-0' style={{ backgroundImage: "url('/bg-3.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <div style={{padding: ' 100px',}}>
            <div style={{border: '1px solid #f3ba03',padding:'50px', margin: '0px 18px', borderRadius:'10px'}}>
            <h1 className='text-center'style={{color:'#f3ba03'}}>Safety Tools To Russia</h1>
              <p className='pt-4 text-center' style={{fontSize: '16px', color: '#f4f4f4'}}>Safety is critical in plumbing and industrial work, and safety hand tools are designed to reduce risks like electrical hazards, explosions, and static discharge. These tools meet strict safety standards to ensure compliance with regulations and protect workers in hazardous environments.
      </p>
            </div>
          </div>
       </div>
       <section className='container-fluid' style={{backgroundColor:'#f4f4f4'}}>
        <SafetyTools />
       </section>
       <About/>  
       <Footer/>
       </>
  )
}

export default SafetyToolsPage