import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ShieldCheck,
  Award,
  Crown,
  RefreshCw,
  HeartHandshake,
  MessageCircle,
  ArrowRight,
  Compass
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { CollectionCard } from '../components/CollectionCard';
import { JewelleryCard } from '../components/JewelleryCard';
import { useJewellery } from '../context/JewelleryContext';
import { STORE_INFO } from '../data/mockData';
import '../styles/home.css';

export const Home = () => {
  const { collections, designs, openEnquiryModal, openAppointmentModal } = useJewellery();

  // Featured collections
  const featuredCollections = collections.slice(0, 4);

  // Latest/New designs
  const latestDesigns = designs.filter((d) => d.isNew).slice(0, 6);

  const whyChooseUsFeatures = [
    {
      icon: Crown,
      title: "Four Decades of Mastery",
      desc: "Rooted in royal goldsmithing traditions since 1984, our master karigars devote hundreds of hand-hours to every jewel."
    },
    {
      icon: ShieldCheck,
      title: "100% BIS Hallmarked Purity",
      desc: "Every gram of gold is certified under Government of India BIS standards with verifiable HUID tracking."
    },
    {
      icon: Award,
      title: "Ethically Sourced Solitaires",
      desc: "Each diamond is independently graded by GIA or IGI, certified conflict-free with unmatched optical brilliance."
    },
    {
      icon: Sparkles,
      title: "Bespoke Haute Joaillerie",
      desc: "Collaborate directly with our master designers to sculpt custom heirloom pieces born uniquely from your personal story."
    },
    {
      icon: RefreshCw,
      title: "100% Lifetime Gold Value",
      desc: "Transparent exchange policies honoring prevailing 24K gold rates for effortless future generational upgrades."
    },
    {
      icon: HeartHandshake,
      title: "Private VIP Salon Care",
      desc: "Experience an unhurried, private salon consultation with complimentary champagne and personal jewellery stylists."
    }
  ];

  return (
    <div className="home-page">
      {/* 1. Full-Screen Cinematic Hero */}
      <Hero />

      {/* 2. Brand Introduction Section */}
      <section className="section-padding" style={{ background: '#FAF8F5' }}>
        <div className="container">
          <div className="intro-grid">
            <div className="intro-image-wrapper">
              <img
                src="/images/royal-heritage-story.jpg"
                alt="Lax360 Royal Heritage fine jewellery"
                loading="lazy"
              />
              <div className="intro-badge-overlay">
                <div className="intro-badge-number">40+</div>
                <div className="intro-badge-text">Years of Royal Heritage</div>
              </div>
            </div>

            <div className="intro-content">
              <div className="section-eyebrow">
                <span>The Sovereign Maison</span>
              </div>
              <h2 className="section-title">Where Heritage Becomes an Heirloom</h2>
              <p>
                Founded in 1984, Lax360 Haute Joaillerie represents the pinnacle of modern Indian fine jewellery. We harmonize ancient techniques of Kundan-Jadau, Nakshi repoussé, and Banaras filigree with modern architectural grace.
              </p>
              <p>
                Every piece in our boutique is individually sculpted by generational karigars. We reject mass manufacturing in favor of unhurried perfection, ensuring that the jewellery you wear today will be treasured by your great-grandchildren tomorrow.
              </p>
              <div style={{ display: 'flex', gap: '16px', marginTop: '30px', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn btn-dark">
                  <span>Discover Our Story</span>
                  <ArrowRight size={15} />
                </Link>
                <button onClick={() => openAppointmentModal()} className="btn btn-outline-gold">
                  <span>Reserve Private Lounge</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Jewellery Collections */}
      <section className="section-padding" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">
              <span>Curated Suites</span>
            </div>
            <h2 className="section-title">Signature Collections</h2>
            <p className="section-subtitle">
              Explore our masterworks categorised by precious metal, heritage ornamentation, and modern silhouettes.
            </p>
          </div>

          <div className="collections-grid">
            {featuredCollections.map((col) => (
              <CollectionCard key={col.id} collection={col} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/collections" className="btn btn-outline-gold btn-lg">
              <span>View All  Collections</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. New / Latest Collections Showcase */}
      <section className="section-padding" style={{ background: '#FAF8F5' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">
              <span>Fresh From The Atelier</span>
            </div>
            <h2 className="section-title">New Arrivals</h2>
            <p className="section-subtitle">
              Discover our latest handcrafted masterworks, bearing unique design codes and limited-edition artisan signatures.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {latestDesigns.map((design) => (
              <JewelleryCard key={design.id} design={design} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/gallery" className="btn btn-dark btn-lg">
              <Compass size={16} />
              <span>Browse Complete Gallery</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="section-padding" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">
              <span>The Aurelia Standard</span>
            </div>
            <h2 className="section-title">Why Connoisseurs Trust Us</h2>
            <p className="section-subtitle">
              Integrity, craftsmanship, and generational transparency form the bedrock of our boutique.
            </p>
          </div>

          <div className="why-us-grid">
            {whyChooseUsFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div key={idx} className="why-us-card">
                  <div className="why-us-icon-box">
                    <IconComp size={26} />
                  </div>
                  <h4>{feat.title}</h4>
                  <p>{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. WhatsApp / Final CTA Section */}
      <section className="cta-banner">
        <div className="cta-banner-content">
          <div className="section-eyebrow" style={{ color: 'var(--gold-light)' }}>
            <span>Concierge Services</span>
          </div>
          <h2>Looking for Something Exceptional?</h2>
          <p>
            Connect directly with our Senior Jewellery Specialist for tailored advice, diamond consultations, or custom bespoke commissions.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '18px', flexWrap: 'wrap' }}>
            <button
              onClick={() => {
                const phone = STORE_INFO.whatsapp.replace(/[^0-9]/g, '');
                window.open(`https://wa.me/${phone}?text=Hello%20Aurelia%20Concierge,%20I%20would%20like%20to%20consult%20with%20a%20jewellery%20specialist.`, '_blank');
              }}
              className="btn btn-whatsapp btn-lg"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Concierge</span>
            </button>
            <button
              onClick={() => openEnquiryModal()}
              className="btn btn-outline-white btn-lg"
            >
              <Sparkles size={18} />
              <span>Send Private Enquiry</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
