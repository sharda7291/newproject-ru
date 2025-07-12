import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

function Trolley() {
  const features = [
    {
      img: '/tools_cabinets.png',
      title: 'Tool Trolleys',
      desc: 'Organized, mobile tool storage solutions built for durability and utility.',
      details: [
        'Heavy-Duty Tool Trolleys: Built to carry a large amount of tools with drawers and casters.',
        'Mobile Tool Trolleys: Lightweight and portable for flexible workspaces.',
        'Storage and Organization Trolleys: Adjustable compartments for industry-specific organization.',
        'Lockable Tool Trolleys: Security-enhanced with locks or padlock slots.',
        'Heavy-Duty Drawer Trolleys: Robust drawers ideal for tools, parts, and materials.'
      ]
    },
    {
      img: '/ns_magnetics.png',
      title: 'Portable Toolkits',
      desc: 'Compact and mobile kits for professionals across multiple industries.',
      details: [
        'Soft-Sided Toolbags: Lightweight with multiple pockets.',
        'Hard-Shell Toolkits: Durable cases with foam inserts.',
        'Rolling Toolkits: Mobile kits with a rolling base.',
        'Tool Chests: Multi-drawer storage for workshops.',
        'Electrical and Electronics Toolkits: Tools tailored for electrical work.',
        'Automotive Toolkits: Specialized kits for vehicle maintenance.'
      ]
    },
    {
      img: '/tk_workstation.png',
      title: 'Workstation Toolkits',
      desc: 'Integrated tool storage for efficient work environments.',
      details: [
        'Modular Workstations: Customizable with built-in tool storage.',
        'Wall-Mounted Systems: Mounted setups for quick tool access.',
        'Workbench Storage Systems: Workbenches with integrated organization.'
      ]
    },
    {
      img: '/ns_atex.png',
      title: 'Tool Sets',
      desc: 'Comprehensive toolkits tailored for specific tasks and trades.',
      details: [
        'Mechanic Tool Sets: Sockets, wrenches, and more for auto technicians.',
        'Construction Tool Sets: Hammers, drills, levels, and essentials.',
        'Specialized Tool Sets: Kits for plumbing, HVAC, electrical, and more.'
      ]
    },
    {
      img: '/ns_sockets.png',
      title: 'Heavy-Duty Equipment',
      desc: 'Industrial-grade storage and transport systems for rugged environments.',
      details: [
        'Tool Cabinets: Large cabinets for secure, organized storage.',
        'Portable Tool Crates: Designed for transporting heavy tools efficiently.'
      ]
    }
  ];

  return (
    <div className="container py-5">
      <p className="mb-4 text-center text-muted" style={{ maxWidth: '800px', margin: '0 auto' }}>
      These categories cover a wide range of tools, storage options, and transport solutions that enhance productivity and organization in industrial settings, workshops, and field work.
    </p>
      <div className="row">
        {features.map((feature, index) => (
          <motion.div
            className="col-md-6 col-lg-4 mb-4"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
          >
            <div className="card h-100 shadow-sm border-0 rounded-4 p-3 text-center">
              {feature.img ? (
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="mb-3"
                  style={{
                    width: '100%',
                    borderRadius: '12px',
                    objectFit: 'cover',
                    maxHeight: '500px'
                  }}
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
              <p className="text-muted small mb-2">{feature.desc}</p>
              {feature.details && (
                <ul className="text-start ps-3 small">
                  {feature.details.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Trolley;
