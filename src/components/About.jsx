import React from 'react';
import { useTranslation } from 'react-i18next';
import ChooseBlack from './ChooseBlack';

function About() {
  const { t } = useTranslation();

  return (
    <section className="container-fluid py-5" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <div className="row">
          {/* Left column: Form */}
          <div className="col-md-4" style={{ backgroundColor: '#B22222', padding: '50px 20px', borderRadius: '10px' }}>
            <form>
              <h3 style={{ color: '#fff' }}>{t('form_heading')}</h3>
              <div className="mb-3">
                <input type="text" className="form-control" id="name" placeholder={t('name')} />
              </div>
              <div className="mb-3">
                <input type="tel" className="form-control" id="phone" placeholder={t('phone')} />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="company" placeholder={t('company')} />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="address" placeholder={t('address')} />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" id="email" placeholder={t('email')} />
              </div>
              <div className="mb-3">
                <textarea className="form-control" id="enquiry" rows="4" placeholder={t('enquiry')}></textarea>
              </div>
              <button type="submit" className="btn btn-warning">
                {t('submit')}
              </button>
            </form>
          </div>

          {/* Right column */}
          <div className="col-md-8 d-flex flex-column justify-content-center" style={{ padding: '50px' }}>
            <ChooseBlack />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
