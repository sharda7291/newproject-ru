import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

function Precision() {
  const features = [
    {
      img: '/torque_wrenches.png',
      title: 'Precision Tools',
      desc: 'High-accuracy tools designed to maintain equipment integrity and compliance.',
      details: [
        'Torque Wrenches: Ensure the correct amount of torque is applied to fasteners—critical for oil and gas operations.',
        'Calibration Tools: Specialized instruments for checking and calibrating other tools and machinery.'
      ]
    },
    {
      img: '/In_testing.png',
      title: 'Inspection and Testing Tools',
      desc: 'Identify faults and detect hazardous conditions before they cause failure.',
      details: [
        'Leak Detection Tools: Identify gas or fluid leaks in pipes, valves, and systems using sensors or manual methods.',
        'Thermal Imaging Tools: Use infrared tech to find heat variations and detect overheating or failing components.'
      ]
    },
    {
      img: '/ns_magnetics.png',
      title: 'Maintenance and Repair Tools',
      desc: 'Heavy-duty tools designed for routine and emergency maintenance in harsh environments.',
      details: [
        'Hydraulic Tools: Hand-operated devices for lifting, pushing, or pressing during repair work on rigs and pipelines.',
        'Valve Maintenance Tools: Tools specifically built for servicing and maintaining critical valves and flanges.'
      ]
    },
  ];

  return (
    <div className="container py-5">
      <p className="mb-4 text-center text-muted" style={{ maxWidth: '800px', margin: '0 auto' }}>
       Torque Tools provide precision torque control to ensure fasteners are tightened accurately, preventing over- or under-tightening.
They are essential for maintaining equipment safety and compliance in high-stress industrial environments.
      </p>
      <div className="row">
        {features.map((feature, index) => (
          <motion.div
            className="col-md-6 col-lg-4 mb-4"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
          >
            <div className="card h-100 shadow-sm border-0 rounded-4 p-3">
              {feature.img ? (
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="card-img-top mb-3"
                  style={{ borderRadius: '10px', maxHeight: '500px', objectFit: 'cover' }}
                />
              ) : (
                <div
                  className="mb-3"
                  style={{
                    height: '200px',
                    background: '#f0f0f0',
                    borderRadius: '12px'
                  }}
                />
              )}
              <h5 className="card-title" style={{ color: '#b22222' }}>{feature.title}</h5>
              <p className="card-text text-muted">{feature.desc}</p>
              <ul className="text-start ps-3 small">
                {feature.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Precision;
