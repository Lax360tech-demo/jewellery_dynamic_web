import React, { useState, useEffect } from 'react';
import { X, CheckCircle, MessageCircle, Send, Sparkles } from 'lucide-react';
import { useJewellery } from '../context/JewelleryContext';
import { STORE_INFO } from '../data/mockData';
import '../styles/modal.css';

export const EnquiryModal = () => {
  const {
    isEnquiryModalOpen,
    enquiryModalData,
    closeEnquiryModal,
    addEnquiry
  } = useJewellery();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredMethod: 'WhatsApp',
    message: ''
  });

  const [submittedRef, setSubmittedRef] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize or reset form when modal opens
  useEffect(() => {
    if (isEnquiryModalOpen) {
      setSubmittedRef(null);
      setFormData({
        name: '',
        phone: '',
        email: '',
        preferredMethod: 'WhatsApp',
        message: enquiryModalData?.designName
          ? `I would like to enquire about ${enquiryModalData.designName} (${enquiryModalData.designCode}). Please share availability and private viewing details.`
          : ''
      });
    }
  }, [isEnquiryModalOpen, enquiryModalData]);

  if (!isEnquiryModalOpen) return null;

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
        designName: enquiryModalData?.designName || 'General Jewellery Inquiry',
        designCode: enquiryModalData?.designCode || 'AUR-GENERAL',
        message: formData.message,
        preferredMethod: formData.preferredMethod
      });

      setIsSubmitting(false);
      setSubmittedRef(created.id);
    }, 400);
  };

  const handleDirectWhatsApp = () => {
    const phone = STORE_INFO.whatsapp.replace(/[^0-9]/g, '');
    const enquiryText = `*AURELIA Jewellery Enquiry [Ref: ${submittedRef || 'NEW'}]*
Name: ${formData.name}
Design: ${enquiryModalData?.designName || 'General Inquiry'} (${enquiryModalData?.designCode || 'Boutique'})
Message: ${formData.message || 'Please connect me with a Senior Jewellery Specialist.'}`;
    
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(enquiryText)}`, '_blank');
  };

  return (
    <div className="modal-backdrop" onClick={closeEnquiryModal}>
      <div
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-header">
          <div>
            <h3 className="modal-header-title">
              {submittedRef ? 'Enquiry Confirmed' : 'Boutique Enquiry'}
            </h3>
            <p className="modal-header-subtitle">
              {submittedRef
                ? 'Your private consultation is underway'
                : 'Connect with an Aurelia Master Specialist'}
            </p>
          </div>
          <button
            className="modal-close-btn"
            onClick={closeEnquiryModal}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          {submittedRef ? (
            <div className="modal-success-card">
              <div className="modal-success-icon">
                <CheckCircle size={32} />
              </div>
              <h4 className="modal-success-title">Thank You, {formData.name}</h4>
              <p className="modal-success-desc">
                Your private jewellery enquiry has been registered with our senior salon curator. We will contact you shortly via {formData.preferredMethod}.
              </p>
              <div className="modal-ref-badge">
                Reference ID: {submittedRef}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button
                  onClick={handleDirectWhatsApp}
                  className="btn btn-whatsapp"
                  style={{ width: '100%' }}
                >
                  <MessageCircle size={18} />
                  <span>Chat Immediately on WhatsApp</span>
                </button>
                <button
                  onClick={closeEnquiryModal}
                  className="btn btn-outline-gold"
                  style={{ width: '100%' }}
                >
                  Return to Boutique
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {enquiryModalData?.designName && (
                <div className="modal-design-preview">
                  {enquiryModalData.image && (
                    <img
                      src={enquiryModalData.image}
                      alt={enquiryModalData.designName}
                      className="modal-preview-img"
                    />
                  )}
                  <div className="modal-preview-info">
                    <h5>{enquiryModalData.designName}</h5>
                    <span className="modal-preview-code">
                      Design Code: {enquiryModalData.designCode}
                    </span>
                  </div>
                </div>
              )}

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="enq-name">Your Full Name *</label>
                  <input
                    id="enq-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Radhika Singhania"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="enq-phone">Contact Number *</label>
                  <input
                    id="enq-phone"
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98200 XXXXX"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="enq-email">Email Address</label>
                  <input
                    id="enq-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@domain.com"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="enq-method">Preferred Contact</label>
                  <select
                    id="enq-method"
                    name="preferredMethod"
                    value={formData.preferredMethod}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="WhatsApp">WhatsApp Message</option>
                    <option value="Phone Call">Direct Phone Call</option>
                    <option value="Email">Email Communication</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="enq-msg">Specific Requirements or Message</label>
                <textarea
                  id="enq-msg"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about custom sizing, gemstone preferences, or date for showroom viewing..."
                  className="form-textarea"
                />
              </div>

              <div style={{ marginTop: '24px' }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-gold"
                  style={{ width: '100%' }}
                >
                  <Send size={16} />
                  <span>{isSubmitting ? 'Submitting Enquiry...' : 'Submit Boutique Enquiry'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
