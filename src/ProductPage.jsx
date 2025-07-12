import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ProductPage() {
  const { t } = useTranslation();
  const features = t('features', { returnObjects: true });

  return (
    <div className="container py-5">
      <h1 className="text-center mb-3">{t('product_heading')}</h1>
      <p className="text-center mb-5">{t('product_subheading')}</p>
      <div className="row">
        {features.map((feature, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <Link to={feature.link}>
                <img
                  src={feature.img}
                  className="card-img-top p-3"
                  alt={feature.title}
                  style={{ height: '220px', objectFit: 'contain' }}
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#b22222' }}>{feature.title}</h5>
                <p className="card-text" style={{ fontSize: '16px', textAlign: 'justify' }}>
                  {feature.desc}
                </p>
              </div>
              <div className="card-footer bg-transparent border-0 text-end">
                <Link to={feature.link} className="btn btn-outline-danger btn-sm">
                  {t('view_more')}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
