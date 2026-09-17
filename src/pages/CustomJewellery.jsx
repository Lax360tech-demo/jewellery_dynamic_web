import React, { useState } from 'react';
import {
  Sparkles,
  Upload,
  CheckCircle,
  X,
  MessageCircle,
  ShieldCheck,
  Award,
  Crown,
  Send
} from 'lucide-react';
import { useJewellery } from '../context/JewelleryContext';
import { STORE_INFO } from '../data/mockData';
import '../styles/custom.css';

export const CustomJewellery = () => {
  const { addCustomRequest } = useJewellery();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    jewelleryType: 'Necklace',
    designRequirement: '',
    budgetRange: '₹1,00,000 – ₹3,00,000',
    description: '',
    referenceImage: ''
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [submittedRef, setSubmittedRef] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const jewelleryTypes = [
    'Necklace',
    'Ring',
    'Earrings',
    'Bangles',
    'Bracelet',
    'Pendant',
    'Bridal Set',
    'Other'
  ];

  const budgetRanges = [
    'Below ₹50,000',
    '₹50,000 – ₹1,00,000',
    '₹1,00,000 – ₹3,00,000',
    '₹3,00,000+'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData((prev) => ({ ...prev, referenceImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (e) => {
    e.stopPropagation();
    setImagePreview(null);
    setFormData((prev) => ({ ...prev, referenceImage: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.designRequirement) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const created = addCustomRequest({
        customerName: formData.name,
        phone: formData.phone,
        email: formData.email,
        jewelleryType: formData.jewelleryType,
        designRequirement: formData.designRequirement,
        budgetRange: formData.budgetRange,
        description: formData.description,
        referenceImage: formData.referenceImage || '/images/design-aur-bc101.jpg'
      });

      setIsSubmitting(false);
      setSubmittedRef(created.id);
    }, 450);
  };

  const handleWhatsAppQuote = () => {
    const phone = STORE_INFO.whatsapp.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(
      `*AURELIA Custom Jewellery Request [${submittedRef}]*
Name: ${formData.name}
Type: ${formData.jewelleryType}
Requirement: ${formData.designRequirement}
Budget: ${formData.budgetRange}
Details: ${formData.description}`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div className="custom-jewellery-page page-with-navbar">
      {/* Header Banner */}
      <section style={{
        background: '#12100E',
        color: '#FAF8F5',
        padding: '65px 24px 55px',
        textAlign: 'center',
        borderBottom: '1px solid rgba(197, 168, 105, 0.25)'
      }}>
        <div className="container-narrow">
          <div className="section-eyebrow">
            <span>Bespoke Atelier</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', marginBottom: '14px' }}>
            Custom Jewellery Studio
          </h1>
          <p style={{ color: '#C5BEB5', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '680px', margin: '0 auto' }}>
            Commission a unique masterwork sculpted to your vision. Share your heirloom sketches, gemstone aspirations, and budget for personal atelier curation.
          </p>
        </div>
      </section>

      {/* Main Form & Process Section */}
      <section className="section-padding" style={{ background: '#FAF8F5' }}>
        <div className="container">
          <div className="custom-studio-container">
            {/* Left: Process Guide & Trust */}
            <div className="custom-studio-info">
              <div className="section-eyebrow" style={{ textAlign: 'left' }}>
                <span>The Creation Journey</span>
              </div>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '22px', color: 'var(--text-dark)' }}>
                How Bespoke Works
              </h2>

              <div className="custom-step-card">
                <div className="custom-step-num">01</div>
                <div>
                  <h4>Design Consultation</h4>
                  <p>Our Senior Jewellery Curator reviews your requirements, reference images, and desired metal purity.</p>
                </div>
              </div>

              <div className="custom-step-card">
                <div className="custom-step-num">02</div>
                <div>
                  <h4>3D CAD & Wax Prototype</h4>
                  <p>We craft precise gouache illustrations and scaled wax models for tactile inspection before gold casting.</p>
                </div>
              </div>

              <div className="custom-step-card">
                <div className="custom-step-num">03</div>
                <div>
                  <h4>Gem Selection & Setting</h4>
                  <p>Hand-picking GIA natural solitaires, Zambian emeralds, or Basra pearls to fit your exact specifications.</p>
                </div>
              </div>

              <div className="custom-step-card">
                <div className="custom-step-num">04</div>
                <div>
                  <h4>BIS Hallmarking & Delivery</h4>
                  <p>Rigorous XRF assay purity certification, luxury velvet presentation box, and sovereign documentation.</p>
                </div>
              </div>

              <div style={{
                background: '#FFFFFF',
                border: '1px solid rgba(197, 168, 105, 0.25)',
                padding: '20px',
                borderRadius: 'var(--radius-sm)',
                marginTop: '30px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gold-dark)', fontWeight: 600, marginBottom: '6px' }}>
                  <ShieldCheck size={18} />
                  <span>Confidentiality & Provenance</span>
                </div>
                <p style={{ fontSize: '0.84rem', color: '#736B63', lineHeight: 1.6 }}>
                  All bespoke commissions remain exclusive to you. We never replicate custom client motifs for mass retail.
                </p>
              </div>
            </div>

            {/* Right: Interactive Form */}
            <div className="custom-form-card">
              {submittedRef ? (
                <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                  <div style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    background: 'rgba(197, 168, 105, 0.15)',
                    border: '2px solid var(--gold-primary)',
                    color: 'var(--gold-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px'
                  }}>
                    <CheckCircle size={36} />
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '10px' }}>
                    Commission Request Received
                  </h3>

                  <p style={{ color: '#736B63', fontSize: '0.96rem', lineHeight: 1.7, maxWidth: '460px', margin: '0 auto 24px' }}>
                    Thank you, {formData.name}. Our Master Goldsmith and Design Atelier have received your {formData.jewelleryType} request. We will review your requirements and connect with an initial concept dossier.
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
                    marginBottom: '30px'
                  }}>
                    Commission Ref: {submittedRef}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <button onClick={handleWhatsAppQuote} className="btn btn-whatsapp btn-lg">
                      <MessageCircle size={18} />
                      <span>Discuss on WhatsApp</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmittedRef(null);
                        setImagePreview(null);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          jewelleryType: 'Necklace',
                          designRequirement: '',
                          budgetRange: '₹1,00,000 – ₹3,00,000',
                          description: '',
                          referenceImage: ''
                        });
                      }}
                      className="btn btn-outline-gold"
                    >
                      Submit Another Commission
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '6px' }}>
                    Bespoke Commission Form
                  </h3>
                  <p style={{ color: '#8C847A', fontSize: '0.88rem', marginBottom: '28px' }}>
                    Complete the details below to initiate your custom creation.
                  </p>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="cust-name" style={{ color: 'var(--text-dark)' }}>
                        Full Name *
                      </label>
                      <input
                        id="cust-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Radhika Kapoor"
                        className="form-input"
                        style={{ background: '#FAF8F5', color: 'var(--text-dark)' }}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="cust-phone" style={{ color: 'var(--text-dark)' }}>
                        Phone Number *
                      </label>
                      <input
                        id="cust-phone"
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
                      <label className="form-label" htmlFor="cust-email" style={{ color: 'var(--text-dark)' }}>
                        Email Address
                      </label>
                      <input
                        id="cust-email"
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
                      <label className="form-label" htmlFor="cust-type" style={{ color: 'var(--text-dark)' }}>
                        Jewellery Type *
                      </label>
                      <select
                        id="cust-type"
                        name="jewelleryType"
                        value={formData.jewelleryType}
                        onChange={handleChange}
                        className="form-select"
                        style={{ background: '#FAF8F5', color: 'var(--text-dark)' }}
                      >
                        {jewelleryTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="cust-budget" style={{ color: 'var(--text-dark)' }}>
                        Budget Range *
                      </label>
                      <select
                        id="cust-budget"
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="form-select"
                        style={{ background: '#FAF8F5', color: 'var(--text-dark)' }}
                      >
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="cust-req" style={{ color: 'var(--text-dark)' }}>
                        Design Requirement *
                      </label>
                      <input
                        id="cust-req"
                        type="text"
                        name="designRequirement"
                        required
                        value={formData.designRequirement}
                        onChange={handleChange}
                        placeholder="e.g. Royal Meenakari Choker with Rubies"
                        className="form-input"
                        style={{ background: '#FAF8F5', color: 'var(--text-dark)' }}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="cust-desc" style={{ color: 'var(--text-dark)' }}>
                      Detailed Vision & Preferences
                    </label>
                    <textarea
                      id="cust-desc"
                      name="description"
                      rows="4"
                      value={formData.description}
                      onChange={handleChange}
                      onInput={(e) => {
                        e.target.style.height = 'auto';
                        e.target.style.height = Math.max(95, e.target.scrollHeight) + 'px';
                      }}
                      placeholder="Mention preferred gold karatage (22K or 18K), diamond clarity, gemstone shapes, wrist/finger sizing, or special occasions..."
                      className="form-textarea"
                      style={{ background: '#FAF8F5', color: 'var(--text-dark)' }}
                    />
                  </div>

                  {/* Reference Image Upload */}
                  <div className="form-group">
                    <label className="form-label" style={{ color: 'var(--text-dark)' }}>
                      Reference Image / Sketch Upload (Optional)
                    </label>
                    <label className="upload-dropzone">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                      />
                      <Upload size={28} color="var(--gold-primary)" style={{ marginBottom: '10px' }} />
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-dark)', fontWeight: 500, display: 'block', textAlign: 'center' }}>
                        Click to browse or drop an inspiration image
                      </span>
                      <span style={{ fontSize: '0.76rem', color: '#8C847A', marginTop: '4px', display: 'block', textAlign: 'center' }}>
                        PNG, JPG, or WEBP up to 10MB
                      </span>
                    </label>

                    {imagePreview && (
                      <div className="upload-preview-wrapper">
                        <img src={imagePreview} alt="Uploaded reference preview" className="upload-preview-img" />
                        <button
                          type="button"
                          onClick={handleRemoveImage}
                          className="upload-remove-btn"
                          title="Remove image"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-gold btn-lg"
                    style={{ width: '100%', marginTop: '16px' }}
                  >
                    <Send size={16} />
                    <span>{isSubmitting ? 'Transmitting Request...' : 'Submit Custom Request'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
