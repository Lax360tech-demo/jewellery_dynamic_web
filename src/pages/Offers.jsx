import React from 'react';
import { EventCard } from '../components/EventCard';
import { EVENTS } from '../data/mockData';
import { Sparkles, Calendar, Crown } from 'lucide-react';
import { useJewellery } from '../context/JewelleryContext';

export const Offers = () => {
  const { openAppointmentModal } = useJewellery();

  return (
    <div className="offers-page page-with-navbar">
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
            <span>Privileged Invitations</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', marginBottom: '16px' }}>
            Offers & Grand Exhibitions
          </h1>
          <p style={{ color: '#C5BEB5', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '680px', margin: '0 auto' }}>
            Exclusive bridal convocations, private solitaire salons, and festive privileges curated for our cherished patrons and connoisseurs.
          </p>
        </div>
      </section>

      {/* Events Showcase */}
      <section className="section-padding" style={{ background: '#FAF8F5' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '30px'
          }}>
            {EVENTS.map((ev) => (
              <EventCard key={ev.id} event={ev} />
            ))}
          </div>
        </div>
      </section>

      {/* Private Salon Invitation */}
      <section style={{
        background: '#0E0D0C',
        color: '#FAF8F5',
        padding: '80px 24px',
        textAlign: 'center',
        borderTop: '1px solid rgba(197, 168, 105, 0.25)'
      }}>
        <div className="container-narrow">
          <div className="section-eyebrow" style={{ color: 'var(--gold-light)' }}>
            <span>Discreet Previews</span>
          </div>
          <h2 style={{ color: '#FAF8F5', marginBottom: '16px' }}>
            Host a Private Salon Viewing
          </h2>
          <p style={{ color: '#AAA196', fontSize: '1.02rem', marginBottom: '32px', maxWidth: '640px', margin: '0 auto 32px' }}>
            Planning for a high-profile destination wedding or private family acquisition? Reserve our private vault lounge for an exclusive showcase of our most prestigious high-jewellery masterpieces.
          </p>
          <button onClick={() => openAppointmentModal()} className="btn btn-gold btn-lg">
            <Crown size={16} />
            <span>Request Private Salon Access</span>
          </button>
        </div>
      </section>
    </div>
  );
};
