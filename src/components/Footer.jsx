import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const features = [
  {
    title: 'About Us',
    items: ['Our Story', 'Mission & Vision', 'Global Reach', 'Quality Standards'],
  },
  {
    title: 'Products',
    items: ['Pipe Tools', 'Oil & Gas Equipment', 'Safety Hand Tools', 'Toolkits & Trolleys'],
  },
  {
    title: 'Industries',
    items: ['Construction', 'Oil & Gas', 'Hospitality', 'Industrial Supply'],
  },
  {
    title: 'Contact',
    items: ['Email Us', 'WhatsApp Support', 'Request a Quote', 'Become a Partner'],
  },
];

const Footer = () => {
  return (
    <footer
      className="container-fluid text-light py-5"
      style={{ backgroundColor: '#1c1c1c', paddingLeft: '10%', paddingRight: '5%' }}
    >
      <div className="row text-center text-md-start">
        {features.map((feature, index) => (
          <div className="col-12 col-md-6 col-lg-3 mb-4" key={index}>
            <h5 className="mb-3 text-center text-md-start" style={{ color: '#F9A825', fontWeight: 'bold' }}>
              {feature.title}
            </h5>
            <ul className="list-unstyled text-center text-md-start" style={{ fontSize: '14px', color: '#f4f4f4' }}>
              {feature.items.map((item, i) => (
                <li key={i} className="mb-2">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <hr style={{ borderColor: '#333' }} />

      <div className="text-center pt-3" style={{ fontSize: '13px', color: '#aaa' }}>
        © {new Date().getFullYear()} Tools4OilAndGas.com — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
