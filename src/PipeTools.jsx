import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function PipeTools() {
  const tools = [
    {
      category: 'Pipe Wrenches',
      note: 'We supply a wide range of pipe wrenches to Russia, trusted by professionals for durability, precision, and field-ready reliability.',
      items: [
        {
          img: '/ss_adjustable-wrench.png',
          title: 'Adjustable Pipe Wrenches',
          desc: 'Ideal for gripping and turning pipes of various sizes, these wrenches feature an adjustable jaw that ensures a secure hold on both metal and plastic piping—making them essential for general plumbing tasks.',
        },
        {
          img: '/pipe_wrench.jpg',
          title: 'Heavy Duty Pipe Wrenches',
          desc: 'Engineered for high-torque applications, these wrenches are built to handle tough jobs, such as large-diameter pipe installations and heavy-duty industrial plumbing. Perfect for demanding environments.',
        },
        {
          img: '/Al-pw.png',
          title: 'Aluminum Pipe Wrenches',
          desc: 'Offering the same strength as steel wrenches but with significantly less weight, aluminum models are easier to handle in tight or elevated spaces—enhancing mobility without compromising performance.',
        },
      ],
    },
    {
      category: 'Pipe Cutters',
      items: [
        {
          img: '/rotary_pipecutter.png',
          title: 'Rotary Pipe Cutters',
          desc: 'Designed for cutting pipes cleanly and efficiently. Suitable for cutting copper, PVC, and steel pipes.',
        },
        {
          img: '/mini_pipecutter.png',
          title: 'Mini Pipe Cutters',
          desc: 'These are smaller versions of rotary cutters, ideal for cutting pipes in confined spaces or for smaller pipe diameters.',
        },
        {
          img: '/pipe_cutter.png',
          title: 'Pipe / Tube Cutters',
          desc: 'Precision tools designed for cutting copper, brass, and aluminum tubes without distortion or deformation of the material.',
        },
      ],
    },
     {
      category: 'Pipe Vises',
      items: [
        {
          img: '/bench-vise.png',
          title: 'Bench Pipe Vises',
          desc: 'These secure pipes in place for cutting, threading, and other operations, providing stability during plumbing work.',
        },
        {
          img: '/HD-pipe-vise.png',
          title: 'Heavy-Duty Pipe Vises',
          desc: 'Larger vises designed for high-pressure applications, often used in industrial or commercial plumbing settings.',
        },
        {
          img: '/pipe-vise-portable.png',
          title: 'Portable Pipe Vises',
          desc: 'Compact, mobile options ideal for use in the field, allowing plumbers to secure pipes wherever they are working.',
        },
      ],
    },
    {
      category: 'Tube Benders',
      items: [
        {
          img: '/tube_bender.png',
          title: 'Manual Tube Benders',
          desc: 'Handheld tools used to create precise bends in metal tubing without damaging the pipe. Perfect for copper, steel, and aluminum tubes.',
        },
        {
          img: '/tube_bender2.png',
          title: 'Hydraulic Tube Benders',
          desc: 'Used for more difficult or heavy-duty applications, offering additional force to bend larger or thicker pipes and tubes.',
        },
      ],
    },
    {
      category: 'Threading Machines',
      items: [
        {
          img: '/pipe-threading.png',
          title: 'Electric Pipe Threading Machines',
          desc: 'Used for quickly threading larger pipes. These machines are powered for faster operation and can thread large volumes of pipe with ease.',
        },
        {
          img: '/threading2.png',
          title: 'Die Heads',
          desc: 'Attached to threading machines, these die heads allow for the cutting of internal or external threads on pipes and tubes.',
        },
      ],
    },
   
    {
      category: 'Plastic Pipe Tools',
      items: [
        {
          img: '/plastic_pipe_tools.png',
          title: 'Plastic Pipe Tools',
          desc: 'Specialized tools for cutting and joining plastic piping, including shears, fusion welders, and chamfering tools designed specifically for PVC, PEX, and other plastic piping systems.',
        },
        {
          img: '/c-cutters.png',
          title: 'C - cutters',
          desc: 'Specialized tools for cutting and joining plastic piping, including shears, fusion welders, and chamfering tools designed specifically for PVC, PEX, and other plastic piping systems.',
        },
        
      ],
    },
  ];

  return (
    <div>
      <div className="container py-4">
        <h1 className="text-center py-4">Product Categories</h1>
        <p style={{ textAlign: 'justify' }}>
          Our pipe and plumbing tools are designed for precision, durability, and ease of use—essential for professional installation and maintenance tasks. These tools support cutting, threading, bending, and assembling pipes and tubes across residential, commercial, and industrial plumbing systems. Whether you're handling water lines, gas pipelines, or HVAC systems, our tools ensure secure connections and efficient performance in every application.
          <br /><br />
          We supply export-ready pipe and plumbing tools to Russia, trusted by distributors and professionals for their quality and reliability in demanding environments.
        </p>

        {tools.map((toolGroup, idx) => (
          <div key={idx} className="mb-5">
            <h3 className="text-primary mb-3">{toolGroup.category}</h3>
            {toolGroup.note && <p className="text-muted">{toolGroup.note}</p>}
            <div className="row text-center">
              {toolGroup.items.map((item, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  {item.img && (
                    <img
                      src={item.img}
                      alt={item.title}
                      className="mb-3 p-3"
                      width="80%"
                      style={{ borderRadius: '10%', border: '2px solid #000' }}
                    />
                  )}
                  <h5>{item.title}</h5>
                  <p className="text-muted" style={{ fontSize: '16px' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PipeTools;
