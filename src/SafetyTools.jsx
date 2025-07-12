import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

function SafetyTools() {
  const features = [
    {
      img: '/ns_wrench.png',
      title: 'Non-Sparking Wrenches',
      desc: '',
      details: [
        'Bronze or Brass Wrenches: Made from non-sparking materials, ideal for explosive environments.',
        'Non-Sparking Adjustable Wrenches: Flexible for different sizes, built to prevent sparks.',
        'Non-Sparking Torque Wrenches: Ensure precise torque without ignition risk.'
      ]
    },
    {
      img: '/ns_hammer.png',
      title: 'Non-Sparking Hammers',
      desc: '',
      details: [
        'Copper-Bronze Hammers: Spark-proof design for explosive areas.',
        'Aluminum-Bronze Hammers: Soft metal, ideal for delicate work.',
        'Dead Blow Hammers: Non-sparking versions for heavy impact without sparks.'
      ]
    },
    {
      img: '/ns_screwdriver.png',
      title: 'Insulated Screwdrivers (VDE Certified)',
      desc: '',
      details: [
        'VDE Certified Insulated Screwdrivers: Protect against electrical shock.',
        'Non-Sparking Insulated Sets: Variety of tips with full insulation.'
      ]
    },
    {
      img: '/ns_pliers.png',
      title: 'Insulated Pliers',
      desc: '',
      details: [
        'VDE-Certified Pliers: Safe for live circuits, insulated for shock protection.',
        'Non-Sparking Pliers: Made for flammable or hazardous environments.'
      ]
    },
    {
      img: '/ns_sockets.png',
      title: 'Non-Sparking Sockets & Ratchets',
      desc: '',
      details: [
        'Brass or Bronze Sockets: Spark-resistant, safe for hazardous zones.',
        'Non-Sparking Ratchets: Alloy construction reduces ignition risk.'
      ]
    },
    {
      img: '/ns_magnetics.png',
      title: 'Non-Magnetic Tools',
      desc: '',
      details: [
        'Magnet-Free Wrenches and Sockets: Ideal near sensitive electronics.',
        'Non-Magnetic Screwdrivers: Prevent metal shavings from interfering with equipment.'
      ]
    },
    {
      img: '/ns_insulates.png',
      title: 'Insulated Tool Kits',
      desc: '',
      details: [
        'Complete Insulated Kits: All essentials for electrical safety.',
        'VDE-Approved Insulated Tool Sets: Certified for safe installation/repair.'
      ]
    },
    {
      img: '/ns_atex.png',
      title: 'ATEX-Certified Tool Sets',
      desc: '',
      details: [
        'Explosion-Proof Tool Kits: Certified for use in explosive atmospheres.',
        'ATEX Hand Tools: Anti-static and non-sparking tools for gas/dust environments.'
      ]
    },
    {
      img: '/ns_insulated.png',
      title: 'Torque Wrenches (Insulated or Non-Sparking)',
      desc: '',
      details: [
        'Non-Sparking Torque Wrenches: Precision without spark risk.',
        'Insulated Torque Wrenches: Shock protection with torque accuracy.'
      ]
    },
    {
      img: '/ns_box.png',
      title: 'Explosion-Proof Tool Storage',
      desc: '',
      details: [
        'Explosion-Proof Tool Chests: Safe storage that prevents ignition.',
        'Flameproof Tool Cabinets: Protects tools in hazardous environments.'
      ]
    }
  ];

  return (
    <div className="container py-5">
     <p className='mb-4'>Safety hand tools are essential for protecting workers in hazardous environments and ensuring compliance with safety regulations. These tools—ranging from non-sparking wrenches to insulated pliers and explosion-proof storage—are designed to prevent ignition, electrical shock, and magnetic interference. Whether used in industrial plants, electrical systems, or explosive atmospheres, safety tools help minimize risk while maintaining operational efficiency. Having the right safety equipment is not just about productivity—it's about preventing accidents and saving lives.</p>

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
              {feature.img && (
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="card-img-top mb-3"
                  style={{ borderRadius: '10px', maxHeight: '500px', objectFit: 'cover' }}
                />
              )}
              <div className="card-body">
                <h5 className="card-title" style={{color:'#b22222'}}>{feature.title}</h5>
                <p className="card-text text-muted">{feature.desc}</p>
                <ul className="text-start ps-3 small">
                  {feature.details.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SafetyTools;
