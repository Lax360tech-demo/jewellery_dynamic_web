import React from 'react';
import { Calendar, MapPin, Sparkles, ArrowUpRight } from 'lucide-react';
import { useJewellery } from '../context/JewelleryContext';

export const EventCard = ({ event }) => {
  const { openEnquiryModal } = useJewellery();
  const { title, type, date, location, description, badge, image } = event;

  const handleRegister = () => {
    openEnquiryModal({
      designName: `Event RSVP: ${title}`,
      designCode: 'AUR-EVENT',
      message: `I would like to register for VIP guest invitation to "${title}" scheduled for ${date}. Please confirm my private salon access.`
    });
  };

  return (
    <article className="event-card" style={{
      background: '#FFFFFF',
      border: '1px solid rgba(197, 168, 105, 0.22)',
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      transition: 'all var(--transition-normal)'
    }}>
      <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
        <img
          src={image}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          background: 'var(--gold-gradient)',
          color: '#121110',
          fontSize: '0.68rem',
          fontWeight: 700,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          padding: '4px 12px',
          borderRadius: '2px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
        }}>
          {badge}
        </div>
      </div>

      <div style={{ padding: '26px 24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          marginBottom: '14px',
          fontSize: '0.78rem',
          color: '#736B63'
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--gold-primary)', fontWeight: 600 }}>
            <Calendar size={14} />
            {date}
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <MapPin size={14} />
            {location}
          </span>
        </div>

        <h3 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.45rem',
          marginBottom: '10px',
          color: 'var(--text-dark)',
          lineHeight: 1.25
        }}>
          {title}
        </h3>

        <p style={{
          fontSize: '0.88rem',
          color: 'var(--text-dark-muted)',
          lineHeight: 1.7,
          marginBottom: '24px',
          flexGrow: 1
        }}>
          {description}
        </p>

        <button onClick={handleRegister} className="btn btn-gold btn-sm" style={{ width: '100%' }}>
          <Sparkles size={14} />
          <span>Register for VIP Access</span>
        </button>
      </div>
    </article>
  );
};
