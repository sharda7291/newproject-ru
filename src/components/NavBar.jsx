import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || 'en');

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top px-3">
      <Link className="navbar-brand logo-container" to="/">
        <img src="/logo2.png" alt="Logo" className="navbar-logo" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{ backgroundColor: '#444' }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link custom-hover" to="/">{t('home')}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link custom-hover" to="/about">{t('about')}</Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link custom-hover" to="/products">{t('products')}</Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link custom-hover" to="/contact">{t('contact')}</Link>
          </li>
        </ul>

        <div className="d-flex align-items-center ms-3">
          <button
            className={`btn btn-sm me-2 ${language === 'ru' ? 'btn-light' : 'btn-outline-light'}`}
            onClick={() => handleLanguageChange('ru')}
          >
            🇷🇺 Русский
           
          </button>
          <button
            className={`btn btn-sm ${language === 'en' ? 'btn-light' : 'btn-outline-light'}`}
            onClick={() => handleLanguageChange('en')}
          >
            🇺🇸 English
          </button>
        </div>

        <div className="d-flex align-items-center ms-3">
          <Link to="/contact">
            <button className="button-51" role="button" style={{ color: '#f4f4f4' }}>
              {t('enquire')}
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
