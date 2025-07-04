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
            <div style={{border: '1px solid #1c1c1c',padding:'50px', margin: '0px 18px', borderRadius:'10px'}}>
            <h1 className='text-center'>Safety Tools</h1>
              <p className='pt-4 text-center' style={{fontSize: '16px', color: '#f4f4f4'}}> </p>
            </div>
          </div>
       </div>
       <section>
        <SafetyTools/>
       </section>
       <About/>
       

       <Footer/>
       </>
  )
}

export default SafetyToolsPage