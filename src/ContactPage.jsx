import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ChooseBlack from './components/ChooseBlack';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

function ContactPage() {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: '', phone: '', company: '', address: '', email: '', enquiry: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = t('validation_name');
    if (!form.phone.trim()) newErrors.phone = t('validation_phone');
    if (!form.company.trim()) newErrors.company = t('validation_company');
    if (!form.address.trim()) newErrors.address = t('validation_address');

    if (!form.email.trim()) {
      newErrors.email = t('validation_email_required');
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        newErrors.email = t('validation_email_invalid');
      }
    }

    if (!form.enquiry.trim()) newErrors.enquiry = t('validation_enquiry');

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      await axios.post('http://localhost:5000/send-email', form);
      alert(t('alert_success'));
      setForm({ name: '', phone: '', company: '', address: '', email: '', enquiry: '' });
      setErrors({});
    } catch (err) {
      alert(t('alert_failure'));
    }
  };

  return (
    <div>
      <NavBar />
      <div className='m-0' style={{ backgroundImage: "url('/bg-3.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div style={{ padding: '100px' }}>
          <div style={{ border: '1px solid #1c1c1c', padding: '50px', margin: '0px 18px', borderRadius: '10px' }}>
            <h1 className='text-center'>{t('contact_heading')}</h1>
            <p className='pt-2 text-white text-center' style={{ fontSize: '16px' }}>
              {t('contact_brief')}
            </p>
          </div>
        </div>
      </div>

      <section className="container-fluid" style={{ backgroundColor: '#f4f4f4', padding: '50px 150px' }}>
        <div className="row">
          {/* Left column: Form */}
          <div className="col-md-4" style={{ backgroundColor: '#B22222', padding: '80px 20px 50px 20px', borderRadius: '10px' }}>
            <form onSubmit={handleSubmit} noValidate>
              <h3 style={{ color: '#fff' }}>{t('get_in_touch')}</h3>

              <div className="mb-3">
                <input
                  type="text"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  id="name"
                  placeholder={t('name_placeholder')}
                  value={form.name}
                  onChange={handleChange}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>

              <div className="mb-3">
                <input
                  type="tel"
                  className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                  id="phone"
                  placeholder={t('phone_placeholder')}
                  value={form.phone}
                  onChange={handleChange}
                />
                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className={`form-control ${errors.company ? 'is-invalid' : ''}`}
                  id="company"
                  placeholder={t('company_placeholder')}
                  value={form.company}
                  onChange={handleChange}
                />
                {errors.company && <div className="invalid-feedback">{errors.company}</div>}
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                  id="address"
                  placeholder={t('address_placeholder')}
                  value={form.address}
                  onChange={handleChange}
                />
                {errors.address && <div className="invalid-feedback">{errors.address}</div>}
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="email"
                  placeholder={t('email_placeholder')}
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <div className="mb-3">
                <textarea
                  className={`form-control ${errors.enquiry ? 'is-invalid' : ''}`}
                  id="enquiry"
                  rows="4"
                  placeholder={t('enquiry_placeholder')}
                  value={form.enquiry}
                  onChange={handleChange}
                ></textarea>
                {errors.enquiry && <div className="invalid-feedback">{errors.enquiry}</div>}
              </div>

              <button type="submit" className="btn btn-warning">{t('submit_button')}</button>
            </form>
          </div>

          {/* Right column: Heading and Description */}
          <div className="col-md-8 d-flex flex-column justify-content-center" style={{ padding: '50px' }}>
            <ChooseBlack />
            <h3 style={{ color: '#b22222' }}>{t('or_text')}</h3>
            <h3 style={{ color: '#b22222' }}>{t('direct_contact')}</h3>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ContactPage;
