import React from 'react';

function AboutTwo() {
  return (
    <section className="container-fluid py-5" style={{padding:'100px', backgroundColor:'#000'}}>
      <div className="row">
        {/* Text Column */}
        <div className="col-md-8 px-5">
          <h2 className="mb-4" style={{ color: '#f9a825'}}>
            Supplying Industrial Tools & Equipment — Globally
          </h2>
          <p className="mb-4" style={{ color: 'grey',textAlign: 'justify'}}>
            We are a trusted B2B exporter specializing in pipe and plumbing tools, safety hand tools, oil and gas hand tools, tool trolleys, complete toolkits, and hotelier equipment—all engineered for durability, safety, and long-term performance.
          </p>
          <p className="mb-4" style={{ color: 'grey'}}>
            Serving industries like construction, oil & gas, and hospitality, our tools are built to meet the toughest international standards.
          </p>
          <p className="mb-4" style={{ color: 'grey'}}>
            From India to Russia, the Middle East, and Central Asia, we provide a broad product portfolio backed by strong logistics and compliance support.
          </p>
        </div>

        {/* Image or Placeholder Column */}
        <div className="col-md-4 d-flex align-items-center justify-content-center px-5">
          {/* Add your image here if needed */}
          <img
            src="/logo.png"
            alt="Industrial Tools"
            className="img-fluid rounded shadow"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutTwo;
