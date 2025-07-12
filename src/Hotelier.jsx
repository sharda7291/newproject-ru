import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

function Hotelier() {
  const tools = [
    {
      img: '/h1.png',
      title: 'Hotel Maintenance Toolkits',
      desc: 'All-in-one kits designed for everyday repair and maintenance tasks throughout hotel facilities.',
      details: [
        'General Maintenance Toolkits: Includes wrenches, hammers, pliers, and screwdrivers for common fixes.',
        'Multi-Purpose Sets: Compact kits for quick room maintenance and emergency repairs.',
        'Rolling Tool Cases: Portable storage with organized compartments for hotel technicians.'
      ]
    },
    {
      img: '/pipe_tools.png',
      title: 'Plumbing Tools',
      desc: 'Essential tools for maintaining plumbing in guest rooms, public restrooms, and kitchens.',
      details: [
        'Pipe Wrenches & Cutters: For leak repairs and pipe installations.',
        'Plungers & Drain Augers: Unclog toilets and sinks quickly.',
        'Sealants & Tapes: Waterproofing solutions for quick pipe fixes.'
      ]
    },
    {
      img: '/drain-cleaner.png',
      title: 'Drain Cleaning Machines',
      desc: 'Efficient machines designed to clear clogs in hotel bathrooms, kitchens, and public restrooms.',
      details: [
        'Electric Drain Augers: Compact and powerful for clearing sink and shower blockages.',
        'High-Pressure Jetters: Blast away grease and debris in main lines and kitchen drains.',
        'Handheld Cleaners: Lightweight and ideal for quick interventions in small bathrooms.'
      ]
    },
    {
      img: '/ns_magnetics.png',
      title: 'Electrical Maintenance Tools',
      desc: 'Safe and precise tools for handling hotel electrical systems and fixtures.',
      details: [
        'Multimeters & Testers: Monitor voltage and circuit performance.',
        'Wire Strippers & Crimpers: Electrical connection and repair essentials.',
        'Insulated Screwdrivers: Prevent shocks during outlet and fixture maintenance.'
      ]
    },
    
    {
      img: '/h2.png',
      title: 'Groundskeeping Equipment',
      desc: 'Maintain hotel grounds and landscapes to create a welcoming outdoor atmosphere.',
      details: [
        'Commercial Mowers & Trimmers: Keep lawns and hedges neat.',
        'Blowers & Leaf Vacuums: Clean up pathways and garden areas.',
        'Irrigation Tools: Manage watering systems for gardens and lawns.'
      ]
    },
    {
      img: '/garden-tools.png',
      title: 'Gardening Tools',
      desc: 'Specialized landscaping tools for resorts and hotels with lush garden spaces.',
      details: [
        'Pruning Shears & Hedge Trimmers: Shape and maintain ornamental plants.',
        'Spades & Rakes: Manage flower beds and planting zones.',
        'Fertilizer Spreaders: Promote healthy lawn and garden growth.'
      ]
    },
    
  ];

  return (
    <div className="container py-5">
      <p className="mb-4">
        Our Hotelier Equipment collection includes specialized tools and maintenance kits for hotels, resorts, and commercial kitchens.
        Designed for performance, reliability, and efficiency, these products help maintain high hospitality standards from guest rooms to garden grounds.
      </p>

      <div className="row">
        {tools.map((tool, index) => (
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
              {tool.img && (
                <img
                  src={tool.img}
                  alt={tool.title}
                  className="card-img-top mb-3"
                  style={{ borderRadius: '10px', maxHeight: '500px', objectFit: 'cover' }}
                />
              )}
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#1e5b8a' }}>{tool.title}</h5>
                {tool.desc && <p className="card-text text-muted">{tool.desc}</p>}
                <ul className="text-start ps-3 small">
                  {tool.details.map((item, idx) => (
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

export default Hotelier;
