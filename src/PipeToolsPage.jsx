import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import PipeTools from './PipeTools'
import About from './components/About'

function PipeToolsPage() {
  return (
    <>
    <NavBar/>
        <div className='m-0' style={{ backgroundImage: "url('/bg-3.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <div style={{padding: ' 100px',}}>
            <div style={{border: '1px solid #f3ba03',padding:'50px', margin: '0px 18px', borderRadius:'10px'}}>
            <h1 className='text-center' style={{color:'#f3ba03'}}>Pipe and Plumbing Tools To Russia</h1>
              <p className='pt-4 text-center' style={{fontSize: '16px', color: '#f4f4f4'}}> Our pipe and plumbing tools are engineered for precision, reliability, and heavy-duty use—supporting cutting, bending, threading,
        and assembling of pipes in residential, commercial, and industrial settings. </p>
            </div>
          </div>
       </div>
       <section className='container-fluid' style={{backgroundColor:'#f4f4f4'}}>
        <PipeTools/>
        </section>
        <About/>

       <Footer/>
       </>
  )
}

export default PipeToolsPage