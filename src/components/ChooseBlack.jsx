import React from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';

const ChooseBlack = () => {
  const { t } = useTranslation();

  const features = [
    {
      img: '/durability.png',
      title: t('durability_title'),
      desc: t('durability_desc'),
    },
    {
      img: '/worldwide.png',
      title: t('shipping_title'),
      desc: t('shipping_desc'),
    },
    {
      img: '/precision.png',
      title: t('precision_title'),
      desc: t('precision_desc'),
    },
    {
      img: '/24-7.png',
      title: t('support_title'),
      desc: t('support_desc'),
    },
  ];

  return (
    <div className="container">
      <h2 className="mb-5" style={{ color: '#b22222' }}>
        {t('choose_heading')}
      </h2>

      <div className="row justify-content-center">
        {features.map((feature, index) => (
          <div className="col-md-6 col-lg-3 mb-5" key={index}>
            <div
              className="h-100 p-3"
              style={{
                border: '1px solid #f9a825',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                backgroundColor: '#fff',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="mb-4 mx-auto"
                width="60"
                height="60"
                style={{
                  borderRadius: '50%',
                  border: '1px solid #f9a825',
                  padding: '10px',
                }}
              />
              <h5 style={{ color: '#b22222' }}>{feature.title}</h5>
              <p style={{ fontSize: '15px', color: '#000' }}>{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseBlack;
