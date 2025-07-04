import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function Trolley() {
  const features = [
  {
    img: '',
    title: 'Tool Trolleys',
    desc: 'Engineered for High-Torque Applications',
  },
  {
    img: '',
    title: 'Portable Toolkits',
    desc: 'Engineered for High-Torque Applications',
  },
  {
    img: '',
    title: '  Tool Sets',
    desc: 'Engineered for High-Torque Applications',
  },
  {
    img: '',
    title: 'Heavy-Duty Equipment',
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

export default Trolley