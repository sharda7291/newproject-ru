import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

function PipeTools() {
  const tools = [
    {
      img: '/pipe_wrench.jpg',
      title: 'Pipe Wrenches',
      desc: 'Essential for gripping and turning pipes of various diameters during installation or maintenance.',
      details: [
        'Adjustable Pipe Wrenches: Secure grip on both metal and plastic pipes for general plumbing.',
        'Heavy-Duty Pipe Wrenches: Built for high-torque applications such as industrial pipelines.',
        'Aluminum Pipe Wrenches: Lightweight with steel-like strength for elevated or tight spaces.'
      ]
    },
    {
      img: '/pipe_cutter.png',
      title: 'Pipe Cutters',
      desc: 'Designed for clean, precise pipe cutting without deformation, saving time and effort.',
      details: [
        'Rotary Pipe Cutters: Clean cuts on copper, PVC, and steel.',
        'Mini Pipe Cutters: Ideal for tight spaces and smaller pipe diameters.',
        'Tubing Cutters: Accurate cutting for copper, brass, and aluminum tubes.'
      ]
    },
    {
      img: '/tube_bender.png',
      title: 'Tube Benders',
      desc: 'Used for creating precise bends in metal tubing without collapsing or kinking.',
      details: [
        'Manual Tube Benders: Handheld, ideal for on-site copper and aluminum bending.',
        'Hydraulic Tube Benders: Provide added force for bending thick or large-diameter tubes.',
        'Electrical Tube Benders: Automated for high-volume bending in HVAC or plumbing.'
      ]
    },
    {
      img: '/pipe-threading.png',
      title: 'Threading Machines',
      desc: 'Cut internal or external threads into pipes for secure fittings and joint integrity.',
      details: [
        'Hand Threading Machines: Portable and ideal for small jobs in confined areas.',
        'Electric Pipe Threading Machines: Fast threading for large pipes in bulk.',
        'Die Heads: Attachments that define thread size and shape.'
      ]
    },
    {
      img: '/pipe-vise-portable.png',
      title: 'Pipe Vises',
      desc: 'Hold pipes securely during cutting, threading, or assembly to ensure accuracy.',
      details: [
        'Bench Pipe Vises: Fixed installations for stable cutting and threading.',
        'Heavy-Duty Pipe Vises: Suitable for industrial and high-pressure applications.',
        'Portable Pipe Vises: Lightweight and mobile for on-site plumbing jobs.'
      ]
    },
  ];

  return (
    <div className="container py-5">
      <p className="mb-4">
        Whether you're maintaining water lines, gas pipelines,
        or HVAC systems, our tools are trusted by professionals for secure connections and long-lasting performance. We proudly export to Russia,
        supplying distributors and technicians with field-tested, high-quality solutions.
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

export default PipeTools;
