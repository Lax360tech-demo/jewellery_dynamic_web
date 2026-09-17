import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Award,
  Crown,
  Sparkles,
  HeartHandshake,
  CheckCircle2,
  Calendar,
  Compass
} from 'lucide-react';
import { BRAND_STORY } from '../data/mockData';
import { useJewellery } from '../context/JewelleryContext';

export const About = () => {
  const { openAppointmentModal } = useJewellery();

  return (
    <div className="about-page page-with-navbar">
      {/* 1. Hero / Header Banner */}
      <section style={{
        background: '#12100E',
        color: '#FAF8F5',
        padding: '80px 24px 70px',
        textAlign: 'center',
        borderBottom: '1px solid rgba(197, 168, 105, 0.25)'
      }}>
        <div className="container-narrow">
          <div className="section-eyebrow">
            <span>Our Heritage</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', marginBottom: '18px' }}>
            Four Decades of Royal Goldsmithing
          </h1>
          <p style={{ color: '#C5BEB5', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '720px', margin: '0 auto' }}>
            From our founding hand-forging atelier in 1984 to our South Mumbai flagship salon, AURELIA preserves the sacred alchemy of royal Indian jewellery for modern collectors.
          </p>
        </div>
      </section>

      {/* 2. Brand Story Split */}
      <section className="section-padding" style={{ background: '#FAF8F5' }}>
        <div className="container">
          <div className="intro-grid">
            <div>
              <div className="section-eyebrow">
                <span>The Maison Story</span>
              </div>
              <h2 className="section-title">{BRAND_STORY.title}</h2>
              <p>{BRAND_STORY.summary}</p>
              <p>{BRAND_STORY.mission}</p>
              <div style={{ marginTop: '28px' }}>
                <button onClick={() => openAppointmentModal()} className="btn btn-gold">
                  <span>Visit Our Atelier</span>
                </button>
              </div>
            </div>

            <div style={{
              borderRadius: 'var(--radius-sm)',
              overflow: 'hidden',
              border: '1px solid rgba(197, 168, 105, 0.3)',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <img
                src="/images/about-artisan-craft.jpg"
                alt="Master Goldsmith at Lax360 Atelier"
                style={{ width: '100%', height: '480px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Journey / Timeline */}
      <section className="section-padding" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">
              <span>Chronicles</span>
            </div>
            <h2 className="section-title">The Sovereign Timeline</h2>
            <p className="section-subtitle">
              Milestones that shaped our journey from a modest workshop to an internationally acclaimed Haute Joaillerie maison.
            </p>
          </div>

          <div style={{
            maxWidth: '840px',
            margin: '0 auto',
            position: 'relative',
            paddingLeft: '30px',
            borderLeft: '2px solid rgba(197, 168, 105, 0.3)'
          }}>
            {BRAND_STORY.milestones.map((m, idx) => (
              <div key={idx} style={{ position: 'relative', marginBottom: '40px' }}>
                {/* Gold Timeline Dot */}
                <div style={{
                  position: 'absolute',
                  left: '-41px',
                  top: '0',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#FAF8F5',
                  border: '3px solid var(--gold-primary)',
                  boxShadow: '0 0 10px rgba(197, 168, 105, 0.4)'
                }} />

                <span style={{
                  display: 'inline-block',
                  color: 'var(--gold-primary)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  marginBottom: '4px'
                }}>
                  {m.year}
                </span>

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.45rem',
                  color: 'var(--text-dark)',
                  marginBottom: '8px'
                }}>
                  {m.title}
                </h3>

                <p style={{
                  fontSize: '0.92rem',
                  color: 'var(--text-dark-muted)',
                  lineHeight: 1.7
                }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Vision & Values */}
      <section className="section-padding" style={{ background: '#0E0D0C', color: '#FAF8F5' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow" style={{ color: 'var(--gold-light)' }}>
              <span>Our Guiding Principles</span>
            </div>
            <h2 className="section-title" style={{ color: '#FAF8F5' }}>Vision & Core Values</h2>
            <p className="section-subtitle" style={{ color: '#9C948A' }}>
              The foundational pillars that guide every stroke of the hammer and every gemstone choice.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {BRAND_STORY.values.map((v, idx) => (
              <div key={idx} style={{
                background: '#151412',
                border: '1px solid rgba(197, 168, 105, 0.25)',
                borderRadius: 'var(--radius-sm)',
                padding: '36px 28px',
                transition: 'all var(--transition-normal)'
              }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: 'rgba(197, 168, 105, 0.12)',
                  border: '1px solid var(--gold-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-primary)',
                  marginBottom: '20px'
                }}>
                  <ShieldCheck size={22} />
                </div>
                <h4 style={{ color: '#FAF8F5', fontSize: '1.35rem', marginBottom: '12px' }}>
                  {v.title}
                </h4>
                <p style={{ color: '#AAA196', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Craftsmanship & Workshop Imagery */}
      <section className="section-padding" style={{ background: '#FAF8F5' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">
              <span>The Atelier</span>
            </div>
            <h2 className="section-title">Generational Mastery</h2>
            <p className="section-subtitle">
              A glimpse into the quiet sanctuary where raw 24K gold and unheated gemstones are transformed into enduring poetry.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            <div style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid rgba(197, 168, 105, 0.3)' }}>
              <img
                src="/images/design-aur-gn102.jpg"
                alt="Repoussé gold carving"
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
              <div style={{ padding: '20px', background: '#FFFFFF' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '6px' }}>Nakshi Repoussé Carving</h4>
                <p style={{ fontSize: '0.86rem', color: '#736B63' }}>Deep sculptural relief hammered into soft 22K gold plates without piercing the surface.</p>
              </div>
            </div>

            <div style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid rgba(197, 168, 105, 0.3)' }}>
              <img
                src="/images/design-aur-db204.jpg"
                alt="Micro-pavé diamond setting"
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
              <div style={{ padding: '20px', background: '#FFFFFF' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '6px' }}>Optical Micro-Pavé Setting</h4>
                <p style={{ fontSize: '0.86rem', color: '#736B63' }}>Securing brilliant-cut diamonds under 40x stereoscopic magnification for seamless luminescence.</p>
              </div>
            </div>

            <div style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid rgba(197, 168, 105, 0.3)' }}>
              <img
                src="/images/design-aur-br880.jpg"
                alt="Polki Jadau Setting"
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
              <div style={{ padding: '20px', background: '#FFFFFF' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '6px' }}>Kundan & Meenakari Enamel</h4>
                <p style={{ fontSize: '0.86rem', color: '#736B63' }}>Layering 24K gold foils beneath uncut diamonds and hand-firing mineral glass enamels onto the reverse.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Certifications & Trust */}
      <section className="section-padding" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">
              <span>Authenticity Assured</span>
            </div>
            <h2 className="section-title">Certifications & Guarantees</h2>
            <p className="section-subtitle">
              Every creation is backed by the world's most rigorous independent gemological and sovereign standards.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '26px'
          }}>
            {BRAND_STORY.certifications.map((cert, idx) => (
              <div key={idx} style={{
                background: '#FAF8F5',
                border: '1px solid rgba(197, 168, 105, 0.28)',
                padding: '30px 24px',
                borderRadius: 'var(--radius-sm)',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: 'rgba(197, 168, 105, 0.15)',
                  border: '1px solid var(--gold-primary)',
                  color: 'var(--gold-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px'
                }}>
                  <Award size={26} />
                </div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{cert.name}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-dark-muted)', lineHeight: 1.6 }}>{cert.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/gallery" className="btn btn-dark btn-lg">
              <Compass size={16} />
              <span>Explore The Catalogue</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
