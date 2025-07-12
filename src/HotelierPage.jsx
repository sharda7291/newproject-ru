import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import About from './components/About'
import Hotelier from './Hotelier'

function HotelierPage() {
  return (
    <>
    <NavBar/>
        <div className='m-0' style={{ backgroundImage: "url('/bg-3.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div style={{padding: ' 100px',}}>
          <div style={{border: '1px solid #f3ba03',padding:'50px', margin: '0px 18px', borderRadius:'10px'}}>
           <h1 className='text-center' style={{color:'#f3ba03'}}>Hotelier Tools To Russia</h1>
            <p className='pt-4 text-center' style={{fontSize: '16px', color: '#f4f4f4'}}> Essential tools and equipment designed for efficient hotel maintenance and hospitality operations.</p>
           
           </div>
        </div>
       </div>
        <section className='container-fluid' style={{backgroundColor:'#f4f4f4'}}>
       <Hotelier/>
       </section>  
      <About/>
       <Footer/>
       </>
  )
}

export default HotelierPage