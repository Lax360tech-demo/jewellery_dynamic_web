import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle, MessageCircle, ShieldCheck } from 'lucide-react';
import { useJewellery } from '../context/JewelleryContext';
import { STORE_INFO } from '../data/mockData';
import '../styles/modal.css';

export const AppointmentModal = () => {
  const {
    isAppointmentModalOpen,
    closeAppointmentModal,
    addAppointment
  } = useJewellery();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '11:30 AM',
    purpose: 'Bridal Trousseau Private Salon Consultation',
    notes: ''
  });

  const [submittedRef, setSubmittedRef] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isAppointmentModalOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const created = addAppointment({
        customerName: formData.name,
        phone: formData.phone,
        email: formData.email,
        date: formData.date,
        time: formData.time,
        purpose: formData.purpose,
        notes: formData.notes
      });
      setIsSubmitting(false);
      setSubmittedRef(created.id);
    }, 400);
  };

  const handleWhatsAppConfirmation = () => {
    const phone = STORE_INFO.whatsapp.replace(/[^0-9]/g, '');
    const text = `*AURELIA Salon Appointment Request [${submittedRef}]*
Name: ${formData.name}
Date & Time: ${formData.date} at ${formData.time}
Purpose: ${formData.purpose}
Notes: ${formData.notes || 'No extra notes'}`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="modal-backdrop" onClick={closeAppointmentModal}>
      <div
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-header">
          <div>
            <h3 className="modal-header-title">
              {submittedRef ? 'Appointment Reserved' : 'Book Showroom Consultation'}
            </h3>
            <p className="modal-header-subtitle">Private Salon Experience • Colaba Flagship</p>
          </div>
          <button
            className="modal-close-btn"
            onClick={closeAppointmentModal}
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
              <h4 className="modal-success-title">Salon Suite Reserved</h4>
              <p className="modal-success-desc">
                We look forward to welcoming you, {formData.name}, on {formData.date} at {formData.time}. Our Senior Jewellery Curator will have curated pieces prepared for your viewing.
              </p>
              <div className="modal-ref-badge">
                Reservation Code: {submittedRef}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button
                  onClick={handleWhatsAppConfirmation}
                  className="btn btn-whatsapp"
                  style={{ width: '100%' }}
                >
                  <MessageCircle size={18} />
                  <span>Send Confirmation on WhatsApp</span>
                </button>
                <button
                  onClick={closeAppointmentModal}
                  className="btn btn-outline-gold"
                  style={{ width: '100%' }}
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="apt-name">Full Name *</label>
                  <input
                    id="apt-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Maharani Sanghamitra"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="apt-phone">Contact Phone *</label>
                  <input
                    id="apt-phone"
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
                  <label className="form-label" htmlFor="apt-date">Preferred Date *</label>
                  <input
                    id="apt-date"
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="apt-time">Preferred Slot *</label>
                  <select
                    id="apt-time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="11:30 AM">11:30 AM (Morning Salon)</option>
                    <option value="02:00 PM">02:00 PM (Afternoon)</option>
                    <option value="04:30 PM">04:30 PM (Evening Lounge)</option>
                    <option value="07:00 PM">07:00 PM (Twilight VIP Viewing)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="apt-purpose">Consultation Focus</label>
                <select
                  id="apt-purpose"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="Bridal Trousseau Private Salon Consultation">Bridal Trousseau & Heritage Jewellery</option>
                  <option value="Bespoke Solitaire Engagement Ring Commission">Solitaires & Engagement Rings</option>
                  <option value="Antique Heirloom Restoration & Valuation">Antique Restoration & Gem Valuation</option>
                  <option value="Gold Exchange & Karatage Upgrade">Old Gold Exchange & Upgrade</option>
                  <option value="Private High-Jewellery Exhibition Viewing">Private Exhibition VIP Suite</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="apt-notes">Special Requests or Family Guests</label>
                <textarea
                  id="apt-notes"
                  name="notes"
                  rows="2"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Number of guests attending, specific design preferences..."
                  className="form-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-gold"
                style={{ width: '100%', marginTop: '16px' }}
              >
                <Calendar size={16} />
                <span>{isSubmitting ? 'Confirming Reservation...' : 'Confirm Private Salon Booking'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
