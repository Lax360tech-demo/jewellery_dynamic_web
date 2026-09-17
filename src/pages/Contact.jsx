import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Send,
  CheckCircle,
  Compass,
  ArrowRight
} from 'lucide-react';
import { STORE_INFO } from '../data/mockData';
import { useJewellery } from '../context/JewelleryContext';

export const Contact = () => {
  const { addEnquiry } = useJewellery();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Bridal Trousseau Inquiry',
    message: ''
  });

  const [submittedRef, setSubmittedRef] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const created = addEnquiry({
        customerName: formData.name,
        phone: formData.phone,
        email: formData.email,
        designName: `Contact: ${formData.subject}`,
        designCode: 'AUR-CONTACT',
        message: formData.message,
        preferredMethod: 'Phone Call'
      });

      setIsSubmitting(false);
      setSubmittedRef(created.id);
    }, 400);
  };

  const handleWhatsApp = () => {
    const phone = STORE_INFO.whatsapp.replace(/[^0-9]/g, '');
    const text = encodeURIComponent("Hello AURELIA Maison, I would like to enquire with your concierge.");
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <div className="contact-page page-with-navbar">
      {/* Header Banner */}
      <section style={{
        background: '#12100E',
        color: '#FAF8F5',
        padding: '70px 24px 60px',
        textAlign: 'center',
        borderBottom: '1px solid rgba(197, 168, 105, 0.25)'
      }}>
        <div className="container-narrow">
          <div className="section-eyebrow">
            <span>Boutique & Concierge</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', marginBottom: '16px' }}>
            Contact & Showroom
          </h1>
          <p style={{ color: '#C5BEB5', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '680px', margin: '0 auto' }}>
            Our concierge team and senior gemologists are pleased to assist you with bespoke commissions, private show viewings, and jewellery appraisals.
          </p>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="section-padding" style={{ background: '#FAF8F5' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr',
            gap: '60px',
            alignItems: 'start'
          }}>
            {/* Left: Contact Info & Hours */}
            <div>
              <div className="section-eyebrow" style={{ textAlign: 'left' }}>
                <span>Flagship Atelier</span>
              </div>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '20px', color: 'var(--text-dark)' }}>
                Connect With Our showroom
              </h2>
              <p style={{ color: 'var(--text-dark-muted)', marginBottom: '32px', lineHeight: 1.7 }}>
                Located in South Mumbai’s historic heritage district, our showroom welcomes clients for private, unhurried consultations.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(197, 168, 105, 0.12)',
                    border: '1px solid var(--gold-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-primary)',
                    flexShrink: 0
                  }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Boutique Address</h4>
                    <p style={{ fontSize: '0.9rem', color: '#736B63', lineHeight: 1.6 }}>{STORE_INFO.showroomAddress}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(197, 168, 105, 0.12)',
                    border: '1px solid var(--gold-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-primary)',
                    flexShrink: 0
                  }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Showroom Hours</h4>
                    <p style={{ fontSize: '0.88rem', color: '#736B63', lineHeight: 1.6 }}>
                      {STORE_INFO.operatingHours.weekdays} <br />
                      {STORE_INFO.operatingHours.sunday}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(197, 168, 105, 0.12)',
                    border: '1px solid var(--gold-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-primary)',
                    flexShrink: 0
                  }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Direct Telephone</h4>
                    <p style={{ fontSize: '0.9rem', color: '#736B63' }}>{STORE_INFO.phone}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(197, 168, 105, 0.12)',
                    border: '1px solid var(--gold-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-primary)',
                    flexShrink: 0
                  }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Email Inquiries</h4>
                    <p style={{ fontSize: '0.9rem', color: '#736B63' }}>{STORE_INFO.email}</p>
                  </div>
                </div>
              </div>

              <button onClick={handleWhatsApp} className="btn btn-whatsapp" style={{ width: '100%' }}>
                <MessageCircle size={18} />
                <span>Immediate WhatsApp Concierge</span>
              </button>
            </div>

            {/* Right: Contact Form */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid rgba(197, 168, 105, 0.28)',
              borderRadius: 'var(--radius-sm)',
              padding: '40px 36px',
              boxShadow: 'var(--shadow-md)'
            }}>
              {submittedRef ? (
                <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(197, 168, 105, 0.14)',
                    border: '2px solid var(--gold-primary)',
                    color: 'var(--gold-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px'
                  }}>
                    <CheckCircle size={34} />
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '10px' }}>
                    Message Received
                  </h3>

                  <p style={{ color: '#736B63', fontSize: '0.96rem', lineHeight: 1.7, maxWidth: '460px', margin: '0 auto 24px' }}>
                    Thank you, {formData.name}. Your inquiry has been routed to our Senior  Team. We will contact you at {formData.phone} shortly.
                  </p>

                  <div style={{
                    display: 'inline-block',
                    background: '#FAF8F5',
                    border: '1px dashed var(--gold-primary)',
                    padding: '8px 20px',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--gold-dark)',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    marginBottom: '28px'
                  }}>
                    Enquiry Reference: {submittedRef}
                  </div>

                  <button
                    onClick={() => {
                      setSubmittedRef(null);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        subject: 'Bridal Trousseau Inquiry',
                        message: ''
                      });
                    }}
                    className="btn btn-outline-gold"
                    style={{ width: '100%' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '6px' }}>
                    Send  Message
                  </h3>
                  <p style={{ color: '#8C847A', fontSize: '0.88rem', marginBottom: '26px' }}>
                    Leave your details and a specialist will reply within 4 salon hours.
                  </p>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="ct-name" style={{ color: 'var(--text-dark)' }}>
                        Full Name *
                      </label>
                      <input
                        id="ct-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Maharani Priyamvada"
                        className="form-input"
                        style={{ background: '#FAF8F5', color: 'var(--text-dark)' }}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="ct-phone" style={{ color: 'var(--text-dark)' }}>
                        Phone Number *
                      </label>
                      <input
                        id="ct-phone"
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98200 XXXXX"
                        className="form-input"
                        style={{ background: '#FAF8F5', color: 'var(--text-dark)' }}
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="ct-email" style={{ color: 'var(--text-dark)' }}>
                        Email Address
                      </label>
                      <input
                        id="ct-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@domain.com"
                        className="form-input"
                        style={{ background: '#FAF8F5', color: 'var(--text-dark)' }}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="ct-subj" style={{ color: 'var(--text-dark)' }}>
                        Subject of Inquiry
                      </label>
                      <select
                        id="ct-subj"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-select"
                        style={{ background: '#FAF8F5', color: 'var(--text-dark)' }}
                      >
                        <option value="Bridal Trousseau Inquiry">Bridal Trousseau Inquiry</option>
                        <option value="Diamond Solitaire Viewing">Diamond Solitaire Viewing</option>
                        <option value="Custom Bespoke Commission">Custom Bespoke Commission</option>
                        <option value="Old Gold Exchange Valuation">Old Gold Exchange Valuation</option>
                        <option value="General Boutique Query">General Boutique Query</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="ct-msg" style={{ color: 'var(--text-dark)' }}>
                      Your Message
                    </label>
                    <textarea
                      id="ct-msg"
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please share details about your required date, specific design questions, or appointment preferences..."
                      className="form-textarea"
                      style={{ background: '#FAF8F5', color: 'var(--text-dark)' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-gold btn-lg"
                    style={{ width: '100%', marginTop: '14px' }}
                  >
                    <Send size={16} />
                    <span>{isSubmitting ? 'Transmitting Message...' : 'Send  Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stylized Luxury Map Placeholder */}
      <section style={{ background: '#12100E', color: '#FAF8F5', padding: '60px 0', borderTop: '1px solid rgba(197, 168, 105, 0.25)' }}>
        <div className="container">
          <div style={{
            position: 'relative',
            height: '380px',
            borderRadius: 'var(--radius-sm)',
            overflow: 'hidden',
            border: '1px solid rgba(197, 168, 105, 0.35)',
            background: 'linear-gradient(135deg, #1C1A17 0%, #0E0D0C 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '24px'
          }}>
            {/* Ambient Map Grid Lines */}
            <div style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.15,
              backgroundImage: 'radial-gradient(#C5A869 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }} />

            <div style={{ position: 'relative', zIndex: 2, maxWidth: '520px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(197, 168, 105, 0.15)',
                border: '2px solid var(--gold-primary)',
                color: 'var(--gold-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                boxShadow: '0 0 25px rgba(197, 168, 105, 0.3)'
              }}>
                <MapPin size={28} />
              </div>
              <h3 style={{ fontSize: '1.7rem', color: '#FAF8F5', marginBottom: '8px' }}>
                Colaba Heritage Boulevard
              </h3>
              <p style={{ color: '#C0B7AC', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '22px' }}>
                14 Heritage Boulevard, Colaba, Mumbai 400 001 <br />
                Valet parking and private security reception available.
              </p>
              <button
                onClick={() => {
                  window.open('https://maps.google.com/?q=Colaba+Mumbai', '_blank');
                }}
                className="btn btn-outline-gold"
              >
                <span>Open in Google Maps</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
