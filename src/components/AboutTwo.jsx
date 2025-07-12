import React from 'react';
import { useTranslation } from 'react-i18next';

function AboutTwo() {
  const { t } = useTranslation();

  return (
    <section className="container-fluid py-5" style={{ backgroundColor: '#000', textAlign: 'justify' }}>
      <div className="container">
        <div className="row">
          {/* Text Column */}
          <div className="col-md-8 px-5">
            <h2 className="mb-4" style={{ color: '#f9a825' }}>
              {t('about_heading')}
            </h2>
            <p className="mb-4" style={{ color: 'grey' }}>
              {t('p1')}
            </p>
            <p className="mb-4" style={{ color: 'grey' }}>
              {t('p2')}
            </p>
            <p className="mb-4" style={{ color: 'grey' }}>
              {t('p3')}
            </p>
          </div>

          {/* Image Column */}
          <div className="col-md-4 d-flex align-items-center justify-content-center px-5">
            <img
              src="/logo.png"
              alt="Industrial Tools"
              className="img-fluid rounded shadow"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTwo;
