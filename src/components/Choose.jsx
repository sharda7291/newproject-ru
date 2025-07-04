import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const features = [
  {
    img: '/durability.png',
    title: 'Industrial-Grade Durability',
    desc: 'Built to withstand extreme conditions in oilfields and heavy industry.',
  },
  {
    img: '/worldwide.png',
    title: 'Worldwide Shipping',
    desc: 'Delivering tools wherever your operation takes you — fast and reliably.',
  },
  {
    img: '/precision.png',
    title: 'Precision-Engineered Tools',
    desc: 'Designed for accuracy, efficiency, and peak performance on the job site.',
  },
  {
    img: '/24-7.png', // fixed path with slash
    title: '24/7 Customer Support',
    desc: 'Our experts are always available to assist with technical questions or orders.',
  },
];

const Choose = () => {
  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#f4f4f4', padding:'150px'}}>
      <h2 className="text-center mb-5" style={{ color: '#b22222',}}>
        Why Choose Us
      </h2>

      <div className="row justify-content-center px-4">
        {features.map((feature, index) => (
          <div className="col-md-6 col-lg-3 text-center mb-5" key={index}>
            <div className="p-3 h-100">
              <img
                src={feature.img}
                alt={feature.title}
                className="mb-4"
                width="60"
                height="60"
                style={{
                  borderRadius: '50%',
                  border: '1px solid #f9a825',
                  padding: '10px',
                  backgroundColor: '#f4f4f4',
                }}
              />
              <h5 style={{ color: '#b22222', fontWeight: 'bold' }}>{feature.title}</h5>
              <p style={{ fontSize: '15px', color: '#000' }}>{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;
