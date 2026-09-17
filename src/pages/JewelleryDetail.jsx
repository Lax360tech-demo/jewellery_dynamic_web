import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Sparkles,
  MessageCircle,
  Calendar,
  ShieldCheck,
  Award,
  ChevronLeft,
  ZoomIn,
  CheckCircle,
  Gem
} from 'lucide-react';
import { useJewellery } from '../context/JewelleryContext';
import { JewelleryCard } from '../components/JewelleryCard';
import { STORE_INFO } from '../data/mockData';
import '../styles/detail.css';

export const JewelleryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { designs, openEnquiryModal, openAppointmentModal } = useJewellery();

  // Find design by code or id
  const design = designs.find(
    (d) => d.code?.toLowerCase() === id?.toLowerCase() || String(d.id) === id
  );

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [zoomStyle, setZoomStyle] = useState({ transformOrigin: 'center center', transform: 'scale(1)' });
  const [isZooming, setIsZooming] = useState(false);

  // Scroll to top when design changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImageIndex(0);
  }, [id]);

  if (!design) {
    return (
      <div style={{ paddingTop: '160px', paddingBottom: '120px', textAlign: 'center' }}>
        <div className="container-narrow">
          <Gem size={44} color="var(--gold-primary)" style={{ margin: '0 auto 16px' }} />
          <h2 style={{ marginBottom: '14px' }}>Design Not Found</h2>
          <p style={{ color: '#736B63', marginBottom: '28px' }}>
            The requested jewellery piece could not be located in our active catalogue.
          </p>
          <Link to="/gallery" className="btn btn-gold">
            <ChevronLeft size={16} />
            <span>Return to Gallery</span>
          </Link>
        </div>
      </div>
    );
  }

  const galleryImages = design.images && design.images.length > 0
    ? design.images
    : ['/images/design-aur-bc101.jpg'];

  const currentImage = galleryImages[activeImageIndex] || galleryImages[0];

  // Zoom interaction
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: 'scale(1.8)'
    });
  };

  const handleMouseEnter = () => setIsZooming(true);
  const handleMouseLeave = () => {
    setIsZooming(false);
    setZoomStyle({ transformOrigin: 'center center', transform: 'scale(1)' });
  };

  const handleEnquire = () => {
    openEnquiryModal({
      designCode: design.code,
      designName: design.name,
      category: design.categoryLabel,
      image: currentImage
    });
  };

  const handleWhatsApp = () => {
    const phone = STORE_INFO.whatsapp.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(
      `Hello AURELIA Concierge, I am viewing "${design.name}" [Code: ${design.code}] on your website and would like to enquire about pricing, customization and salon viewing.`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  // Related designs from the same category
  const relatedDesigns = designs
    .filter((d) => d.category === design.category && d.code !== design.code)
    .slice(0, 3);

  return (
    <div className="jewellery-detail-page page-with-navbar">
      {/* Breadcrumb Bar */}
      <div style={{ background: '#FAF8F5', borderBottom: '1px solid rgba(197, 168, 105, 0.2)', padding: '14px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#8C847A' }}>
            <Link to="/" style={{ color: 'var(--text-dark)' }}>Home</Link>
            <span>/</span>
            <Link to="/gallery" style={{ color: 'var(--text-dark)' }}>Gallery</Link>
            <span>/</span>
            <Link to={`/gallery?category=${design.category}`} style={{ color: 'var(--gold-primary)' }}>
              {design.categoryLabel}
            </Link>
            <span>/</span>
            <span style={{ color: '#4A433D' }}>{design.code}</span>
          </div>
        </div>
      </div>

      {/* Main Detail Section */}
      <section className="section-padding" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="detail-container">
            {/* Left: Gallery & Zoom Preview */}
            <div className="detail-gallery">
              <div
                className="detail-main-image-wrapper"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                aria-label={`Zoom view of ${design.name}`}
              >
                <img
                  src={currentImage}
                  alt={design.name}
                  className="detail-main-image"
                  style={zoomStyle}
                />
                <div className="detail-zoom-hint">
                  <ZoomIn size={14} />
                  <span>Hover to inspect craftsmanship</span>
                </div>
              </div>

              {/* Thumbnails */}
              {galleryImages.length > 1 && (
                <div className="detail-thumbnails">
                  {galleryImages.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`detail-thumb-btn ${
                        activeImageIndex === idx ? 'active' : ''
                      }`}
                      aria-label={`View angle ${idx + 1}`}
                    >
                      <img src={imgUrl} alt={`${design.name} view ${idx + 1}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Specifications & CTAs */}
            <div className="detail-info">
              <div className="detail-eyebrow">
                <span className="detail-category">{design.categoryLabel}</span>
                <span className="detail-code">Design Ref: {design.code}</span>
              </div>

              <h1 className="detail-title">{design.name}</h1>

              <p className="detail-desc">{design.description}</p>

              {/* Attributes Summary Grid */}
              <div className="detail-attrs-grid">
                <div className="detail-attr-item">
                  <span className="detail-attr-label">Precious Metal</span>
                  <span className="detail-attr-value">{design.material}</span>
                </div>
                <div className="detail-attr-item">
                  <span className="detail-attr-label">Approx. Net Weight</span>
                  <span className="detail-attr-value">{design.approxWeight}</span>
                </div>
                <div className="detail-attr-item" style={{ gridColumn: 'span 2' }}>
                  <span className="detail-attr-label">Gemstones & Diamonds</span>
                  <span className="detail-attr-value">{design.stoneDetails}</span>
                </div>
              </div>

              {/* Detailed Technical Specifications Table */}
              {design.specifications && (
                <div className="detail-specs-box">
                  <h4 className="detail-specs-title">Maison Specifications</h4>
                  {Object.entries(design.specifications).map(([key, val]) => (
                    <div key={key} className="detail-spec-row">
                      <span className="detail-spec-key" style={{ textTransform: 'capitalize' }}>
                        {key.replace(/([A-Z])/g, ' $1')}
                      </span>
                      <span className="detail-spec-val">{val}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons (Strictly Enquiry-Based) */}
              <div className="detail-actions">
                <button onClick={handleEnquire} className="btn btn-gold btn-lg" style={{ width: '100%' }}>
                  <Sparkles size={17} />
                  <span>Enquire About This Design</span>
                </button>

                <div className="detail-actions-row">
                  <button onClick={handleWhatsApp} className="btn btn-whatsapp">
                    <MessageCircle size={17} />
                    <span>WhatsApp Concierge</span>
                  </button>

                  <button onClick={() => openAppointmentModal()} className="btn btn-outline-gold">
                    <Calendar size={16} />
                    <span>Book Private Viewing</span>
                  </button>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="detail-trust-bar">
                <div className="detail-trust-item">
                  <ShieldCheck size={16} />
                  <span>100% BIS Hallmarked</span>
                </div>
                <div className="detail-trust-item">
                  <Award size={16} />
                  <span>Certified Gemological Appraisal</span>
                </div>
                <div className="detail-trust-item">
                  <CheckCircle size={16} />
                  <span>Lifetime Exchange Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Matching / Related Creations */}
      {relatedDesigns.length > 0 && (
        <section className="section-padding" style={{ background: '#FAF8F5', borderTop: '1px solid rgba(197, 168, 105, 0.2)' }}>
          <div className="container">
            <div className="section-header">
              <div className="section-eyebrow">
                <span>Complementary Pieces</span>
              </div>
              <h2 className="section-title">Harmonious Creations</h2>
              <p className="section-subtitle">
                Explore matching pieces handcrafted to elevate and complete your jewellery ensemble.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '30px'
            }}>
              {relatedDesigns.map((rel) => (
                <JewelleryCard key={rel.id} design={rel} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
