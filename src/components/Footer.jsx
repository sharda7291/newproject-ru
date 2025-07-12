import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('footer_products'),
      items: [
        { label: t('items_insulated'), url: '/products/safety-tools' },
        { label: t('items_hotelier'), url: '/products/hotelier' },
        { label: t('items_pipeWrenches'), url: '/products/pipe-and-plumbing' },
        { label: t('items_workstation'), url: '/products/tools-trolley' },
      ],
    },
    {
      title: t('footer_productCategories'),
      items: [
        { label: t('items_pipeTools'), url: '/products/pipe-and-plumbing' },
        { label: t('items_oilGas'), url: '/products/oil-and-gas' },
        { label: t('items_safety'), url: '/products/safety-tools' },
        { label: t('items_trolleys'), url: '/products/tools-trolley' },
      ],
    },
    {
      title: t('footer_industries'),
      items: [
        { label: t('items_construction'), url: '/industries/construction' },
        { label: t('items_oilIndustry'), url: '/industries/oil-and-gas' },
        { label: t('items_hospitality'), url: '/industries/hospitality' },
        { label: t('items_industrial'), url: '/industries/industrial-supply' },
      ],
    },
    {
      title: t('footer_contact'),
      items: [
        { label: t('items_email'), url: 'mailto:sales@tools4oilandgas.com' },
        { label: t('items_social'), url: 'https://www.instagram.com/tools4oilandgas/' },
        { label: t('items_quote'), url: '/contact#quote' },
        { label: t('items_partner'), url: '/contact#partner' },
      ],
    },
  ];

  return (
    <footer
      className="container-fluid text-light py-5"
      style={{ backgroundColor: '#1c1c1c', paddingLeft: '10%', paddingRight: '5%' }}
    >
      <div className="row text-center text-md-start">
        {features.map((feature, index) => (
          <div className="col-12 col-md-6 col-lg-3 mb-4" key={index}>
            <h5 className="mb-3" style={{ color: '#F9A825', fontWeight: 'bold' }}>
              {feature.title}
            </h5>
            <ul className="list-unstyled" style={{ fontSize: '14px', color: '#f4f4f4' }}>
              {feature.items.map((item, i) => {
                const isExternal = item.url.startsWith('http') || item.url.startsWith('mailto');
                return (
                  <li key={i} className="mb-2">
                    {isExternal ? (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ color: '#f4f4f4', textDecoration: 'none' }}>
                        {item.label}
                      </a>
                    ) : (
                      <Link to={item.url} style={{ color: '#f4f4f4', textDecoration: 'none' }}>
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <hr style={{ borderColor: '#333' }} />

      <div className="text-center pt-3" style={{ fontSize: '13px', color: '#aaa' }}>
        © {new Date().getFullYear()} Tools4OilAndGas.com — {t('footer_copyright')}
      </div>
    </footer>
  );
};

export default Footer;
