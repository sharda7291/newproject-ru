import React from 'react';
import { useTranslation } from 'react-i18next';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';

function AboutPage() {
  const { t } = useTranslation();

  return (
    <div>
      <NavBar />
      <div
        className='m-0'
        style={{
          backgroundImage: "url('/bg-3.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div style={{ padding: '100px' }}>
          <div
            style={{
              border: '1px solid #1c1c1c',
              padding: '50px',
              margin: '0px 18px',
              borderRadius: '10px',
            }}
          >
            <h1 className='text-center'>{t('about')}</h1>
            <p
              className='pt-2 text-white text-center'
              style={{ fontSize: '16px' }}
            >
              {t('about_brief', 'Specialize in Tools for Plumbing, Safety, Oil and Gas Operations, Hotelier Maintenance, and Other Industrial Applications.')}
            </p>
          </div>
        </div>
      </div>

      <section
        className='container-fluid py-5'
        style={{ padding: '100px', backgroundColor: '#f4f4f4' }}
      >
        <div className='row'>
          {/* Text Column */}
          <div className='col-md-8 px-5'>
            <h2 className='mb-4' style={{ color: '#b22222' }}>
              {t('about_heading')}
            </h2>
            <p className='mb-4' style={{ color: '#000', textAlign: 'justify' }}>
              {t('p1')}
            </p>
            <p className='mb-4' style={{ color: '#000', textAlign: 'justify' }}>
              {t('p2')}
            </p>
            <p className='mb-4' style={{ color: '#000', textAlign: 'justify' }}>
              {t('p3')}
            </p>
            <h4 style={{ color: '#b22222' }}>{t('why_work_with_us', 'Why Work With Us:')}</h4>
            <ul style={{ paddingLeft: '20px' }}>
              <li>{t('point1', 'Extensive product range for industrial, hospitality, and energy sectors')}</li>
              <li>{t('point2', 'Seamless export documentation and logistics')}</li>
              <li>{t('point3', 'Responsive service in English and Russian')}</li>
            </ul>
            <h4 style={{ color: '#b22222' }}>
              {t('about_closing', 'Let’s build a supply chain that’s efficient, dependable, and built for long-term success.')}
            </h4>
          </div>

          {/* Image Column */}
          <div className='col-md-4 d-flex align-items-center justify-content-center px-5'>
            <img
              src='/logo.png'
              alt={t('logo_alt', 'Industrial Tools')}
              className='img-fluid rounded shadow'
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      <About />
      <Footer />
    </div>
  );
}

export default AboutPage;
