import React from 'react';
import { MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../data/mockData';

export const WhatsAppButton = () => {
  const handleWhatsApp = () => {
    const phone = STORE_INFO.whatsapp.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(
      "Hello AURELIA Concierge, I would like to speak with a Senior Jewellery Specialist."
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="whatsapp-float-btn"
      aria-label="Chat with AURELIA Concierge on WhatsApp"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        background: '#25D366',
        color: '#FFFFFF',
        padding: '12px 20px',
        borderRadius: '50px',
        boxShadow: '0 8px 30px rgba(37, 211, 102, 0.4)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        cursor: 'pointer',
        fontWeight: 600,
        fontSize: '0.82rem',
        letterSpacing: '0.04em',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
        e.currentTarget.style.boxShadow = '0 12px 35px rgba(37, 211, 102, 0.55)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(37, 211, 102, 0.4)';
      }}
    >
      <MessageCircle size={20} />
      <span className="whatsapp-float-label">Concierge</span>
    </button>
  );
};
