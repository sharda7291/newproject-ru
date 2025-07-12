import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

function OilGas() {
  const tools = [
    {
      img: '/safety_tools.png',
      title: 'Spark-Proof Tools',
      desc: 'Essential for preventing ignition in explosive environments such as refineries and gas platforms.',
      details: [
        'Non-Sparking Wrenches: Made from bronze or aluminum bronze to avoid sparks.',
        'Non-Sparking Hammers: Brass or copper alloy construction for safety.',
        'Non-Sparking Screwdrivers: Spark-resistant alloys for flammable zones.'
      ]
    },
    {
      img: '/ss_adjustable-wrench.png',
      title: 'Corrosion-Resistant Tools',
      desc: 'Ideal for offshore and marine environments where tools face extreme moisture and chemicals.',
      details: [
        'Stainless Steel Wrenches: Rust-resistant and durable in saltwater settings.',
        'Coated Hand Tools: Chrome or phosphate coatings to resist corrosion.',
        'Corrosion-Resistant Ratchets: Designed for long life in harsh conditions.'
      ]
    },
    {
      img: '/slogging_wrench.png',
      title: 'Impact-Rated Tools',
      desc: 'Designed to handle high-torque tasks in drilling and heavy maintenance.',
      details: [
        'Impact Wrenches: Heavy-duty tools for high-stress fastening.',
        'Impact Sockets: Engineered for high torque and durability.',
        'Impact-Resistant Pliers: Reinforced for extreme operational conditions.'
      ]
    },
    {
      img: '/ns_atex.png',
      title: 'Explosion-Proof Tools',
      desc: 'Certified tools for use in hazardous areas to prevent accidental ignition.',
      details: [
        'ATEX-Certified Tools: Meet EU standards for explosive environments.',
        'Ex-Proof Wrenches: Specifically designed for volatile areas.',
        'Certified Construction: Engineered to eliminate ignition risks.'
      ]
    },
    {
      img: '/oil_and_gas.png',
      title: 'Heavy-Duty Hand Tools',
      desc: 'Reinforced tools designed for the toughest oil and gas applications.',
      details: [
        'Heavy-Duty Spanners: For large bolt fastening on rigs.',
        'Bolt & Cable Cutters: Cut through thick metals and wires.',
        'Pipe Benders: Shape large metal pipes for pipelines.'
      ]
    },
    {
      img: '/non-sparkingtools.png',
      title: 'Safety Tools',
      desc: 'Protective tools that reduce user risk during high-voltage or high-stress tasks.',
      details: [
        'Insulated Hand Tools: Electrical shock protection.',
        'Rubber-Coated Grip Tools: Ergonomic, anti-slip for long-term use.',
        'Shock-Resistant Handles: Built for safety in rough conditions.'
      ]
    },
    {
      img: '/ns_sockets.png',
      title: 'Oil and Gas Specific Toolkits',
      desc: 'All-in-one kits tailored for maintenance and drilling operations.',
      details: [
        'Maintenance Toolkits: Include non-sparking and corrosion-proof tools.',
        'Drilling Toolkits: Designed for offshore drilling needs.',
        'Customized Kits: Tailored to on-site operational demands.'
      ]
    }
  ];

  return (
    <div className="container py-5">
      <p className="mb-4">
        Our Oil and Gas Hand Tools are engineered for high performance in hazardous zones, offshore rigs,
        and refineries. From spark-proof safety to corrosion-resistant durability, our tools support
        professionals around the world, including exports to Russia, ensuring reliability under pressure.
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
                <h5 className="card-title" style={{ color: '#b22222' }}>{tool.title}</h5>
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

export default OilGas;
