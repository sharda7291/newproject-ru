import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ChooseBlack from './components/ChooseBlack'

function ContactPage() {
  return (
    <div>
        <NavBar/>
         <div className='m-0' style={{ backgroundImage: "url('/bg-3.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div style={{padding: ' 100px',}}>
          <div style={{border: '1px solid #1c1c1c',padding:'50px', margin: '0px 18px', borderRadius:'10px'}}>
           <h1 className='text-center'>Contact us</h1>
            <p className='pt-2 text-white text-center' style={{fontSize: '16px'}}>Specialize in Tools for Plumbing, Safety, Oil and Gas Operations, Hotelier Maintenance, and Other Industrial Applications.
       </p>
           
           </div>
        </div>
       </div>
       <section className="container-fluid" style={{backgroundColor:'#f4f4f4', padding:'50px 150px'}}>
      <div className="row">
        {/* Left column: Form */}
        <div className="col-md-4" style={{ backgroundColor: '#B22222', padding:'80px 20px 50px 20px', borderRadius:'10px'}}>
          <form>
            <h3 style={{color: '#fff'}}>Get in touch to discuss your requirements in full</h3>
            <div className="mb-3">
              
              <input type="text" className="form-control" id="name" placeholder="Name" />
            </div>
            <div className="mb-3">
             
              <input type="tel" className="form-control" id="phone" placeholder="Phone Number" />
            </div>
            <div className="mb-3">
             
              <input type="text" className="form-control" id="company" placeholder="Company Name" />
            </div>
            <div className="mb-3">
              
              <input type="text" className="form-control" id="address" placeholder="Address" />
            </div>
            <div className="mb-3">
             
              <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
            <div className="mb-3">
             
              <textarea className="form-control" id="enquiry" rows="4" placeholder="Enquiry"></textarea>
            </div>
            <button type="submit" className="btn btn-warning">Submit</button>
          </form>
        </div>

        {/* Right column: Heading and Description */}
        <div className="col-md-8 d-flex flex-column justify-content-center"style={{ color:'', padding:'50px'}}>
          <ChooseBlack/>
          <h3 style={{color: '#b22222'}}>Or</h3>
          <h3 style={{color: '#b22222'}}>Directly Connect Us at info@tools4oilandgas.com</h3>
          {/* <h2 style={{color:'#F9A825'}}>Contact Us</h2>
          <p>
            Please fill out the form on the left to get in touch with us.
            We are here to answer any questions or provide more information.
            Your enquiry is important to us, and we will respond as soon as possible.
          </p> */}
        </div>
      </div>
    </section>
        <Footer/>
        </div>
  )
}

export default ContactPage