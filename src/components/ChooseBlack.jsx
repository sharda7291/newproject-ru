import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const features = [
  {
    img: '/durability.png',
    title: 'Industrial-Grade Durability',
    desc: 'Durable for harsh industrial environments.',
  },
  {
    img: '/worldwide.png',
    title: 'Worldwide Shipping',
    desc: 'Fast, reliable tool delivery anywhere.',
  },
  {
    img: '/precision.png',
    title: 'Precision-Engineered Tools',
    desc: 'Engineered for precision, speed, reliability.',
  },
  {
    img: '/24-7.png',
    title: '24/7 Customer Support',
    desc: 'Experts ready to assist anytime.',
  },
];

const ChooseBlack = () => {
  return (
    <div className="container-fluid">
      <h2 className="mb-5" style={{ color: '#b22222' }}>
        Why Industry Leaders Choose Us!
      </h2>

      <div className="row justify-content-center">
        {features.map((feature, index) => (
          <div className="col-md-6 col-lg-3 mb-5" key={index}>
            <div
              className="h-100 p-3"
              style={{
                border: '1px solid #f9a825',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                backgroundColor: '#fff',
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="mb-4 mx-auto"
                width="60"
                height="60"
                style={{
                  borderRadius: '50%',
                  border: '1px solid #f9a825',
                  padding: '10px',
                  backgroundColor: '',
                }}
              />
              <h5 style={{ color: '#b22222' }}>{feature.title}</h5>
              <p style={{ fontSize: '15px', color: '#000' }}>{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseBlack;
