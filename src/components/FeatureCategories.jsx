import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const features = [
  {
    img: '/pipe_wrench.jpg',
    title: 'Heavy Duty Pipe Wrenches',
    desc: 'Engineered for High-Torque Applications',
  },
  {
    img: '/safety_tools.png',
    title: 'Safety hand Tools',
    desc: 'Safety Standards to ensure Compliance with Regulations',
  },
  {
    img: '/tools_cabinets.png',
    title: 'Tools Trolley',
    desc: 'Ideals for industrial use, field work, and workshops',
  },
  {
    img: '/torque_wrench.png',
    title: 'Torque Wrenches',
    desc: 'For Checking and Calibrating other Equipment',
  },
  {
    img: '/c-cutters.png',
    title: 'C Cutters',
    desc: 'For Checking and Calibrating other Equipment',
  },
  {
    img: '/pipe_tools.png',
    title: 'Pipe Tools',
    desc: 'For Checking and Calibrating other Equipment',
  },
  {
    img: '/pipe_cutter.png',
    title: 'Pipe Cutters',
    desc: 'For Checking and Calibrating other Equipment',
  },
  {
    img: '/plastic_pipe_tools.png',
    title: 'Plastic Pipe Tools',
    desc: 'For Checking and Calibrating other Equipment',
  },
];

const FeatureCategories = () => {
  return (
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
  );
};

export default FeatureCategories;
