import React from 'react';
import { CollectionCard } from '../components/CollectionCard';
import { useJewellery } from '../context/JewelleryContext';
import { Sparkles, Compass } from 'lucide-react';

export const Collections = () => {
  const { collections, openEnquiryModal } = useJewellery();
  const activeCollections = collections.filter((c) => c.active !== false);

  return (
    <div className="collections-page page-with-navbar">
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
            <span>High Jewellery Suites</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', marginBottom: '16px' }}>
            The Collections
          </h1>
          <p style={{ color: '#C5BEB5', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '680px', margin: '0 auto' }}>
            Immerse yourself in our eight distinct jewellery categories, each handcrafted from certified precious metals and rare gemstones with uncompromising artisanal precision.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="section-padding" style={{ background: '#FAF8F5' }}>
        <div className="container">
          <div className="collections-grid">
            {activeCollections.map((col) => (
              <CollectionCard key={col.id} collection={col} />
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Banner CTA */}
      <section style={{
        background: '#0E0D0C',
        color: '#FAF8F5',
        padding: '80px 24px',
        textAlign: 'center',
        borderTop: '1px solid rgba(197, 168, 105, 0.25)'
      }}>
        <div className="container-narrow">
          <div className="section-eyebrow" style={{ color: 'var(--gold-light)' }}>
            <span>Bespoke Commissions</span>
          </div>
          <h2 style={{ color: '#FAF8F5', marginBottom: '16px' }}>
            Seeking a One-of-a-Kind Creation?
          </h2>
          <p style={{ color: '#AAA196', fontSize: '1.02rem', marginBottom: '32px', maxWidth: '620px', margin: '0 auto 32px' }}>
            Our master goldsmiths craft bespoke pieces tailored to your exact gemstones, design sketches, and heirloom dreams.
          </p>
          <button onClick={() => openEnquiryModal()} className="btn btn-gold btn-lg">
            <Sparkles size={16} />
            <span>Consult Our Master Goldsmith</span>
          </button>
        </div>
      </section>
    </div>
  );
};
