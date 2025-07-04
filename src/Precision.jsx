import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function Precision() {
  const features = [
  {
    img: '',
    title: 'Precision Tools',
    desc: 'Engineered for High-Torque Applications',
  },
  {
    img: '',
    title: 'Inspection and Testing Tools',
    desc: 'Engineered for High-Torque Applications',
  },
  {
    img: '',
    title: 'Maintenance and Repair Tools',
    desc: 'Engineered for High-Torque Applications',
  },
  {
    img: '',
    title: 'Hand-Operated Pumps and Presses',
    desc: 'Engineered for High-Torque Applications',
  },     
];

  return (
    <div>
        <div className="container py-4">
        <h1 className='text-center py-4'>Tools You Can Trust in Harsh Conditions</h1>
      <div className="row text-center m-4">
        {features.map((feature, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <img src={feature.img} alt={feature.title} className="mb-3 p-4" width="250" style={{ borderRadius:'10%', border: '2px solid #000'}}/>
            <h5>{feature.title}</h5>
            <p className="text-muted" style={{fontSize: '16px'}}>{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Precision