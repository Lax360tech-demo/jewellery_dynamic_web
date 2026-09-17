import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { useJewellery } from '../context/JewelleryContext';

export const ServiceCard = ({ service }) => {
  const { openEnquiryModal } = useJewellery();
  const { title, tagline, description, turnaround, image } = service;

  const handleEnquire = () => {
    openEnquiryModal({
      designName: `Service: ${title}`,
      designCode: 'AUR-SERVICE',
      message: `I would like to enquire about your ${title} service. Please provide scheduling options.`
    });
  };

  return (
    <article className="service-card" style={{
      background: '#FFFFFF',
      border: '1px solid rgba(197, 168, 105, 0.22)',
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      transition: 'all var(--transition-normal)'
    }}>
      <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
        <img
          src={image}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <div style={{ padding: '26px 24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{
          color: 'var(--gold-primary)',
          fontSize: '0.74rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: '6px',
          fontWeight: 600
        }}>
          {tagline}
        </div>

        <h3 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.45rem',
          marginBottom: '12px',
          color: 'var(--text-dark)'
        }}>
          {title}
        </h3>

        <p style={{
          fontSize: '0.88rem',
          color: 'var(--text-dark-muted)',
          lineHeight: 1.7,
          marginBottom: '20px',
          flexGrow: 1
        }}>
          {description}
        </p>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid rgba(197, 168, 105, 0.16)',
          paddingTop: '18px',
          marginTop: 'auto'
        }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.76rem',
            color: '#736B63'
          }}>
            <Clock size={14} color="var(--gold-primary)" />
            {turnaround}
          </span>

          <button onClick={handleEnquire} className="btn btn-outline-gold btn-sm">
            <span>Enquire</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </article>
  );
};
