import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { MessageCircle, Menu, X, ChevronRight, Sparkles } from 'lucide-react';
import { useJewellery } from '../context/JewelleryContext';
import { STORE_INFO } from '../data/mockData';
import '../styles/navbar.css';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { openEnquiryModal } = useJewellery();

  const isHomePage = location.pathname === '/';

  // Detect scroll for transparent-to-frosted transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Collections', path: '/collections' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Custom Jewellery', path: '/custom-jewellery' },
    { label: 'Services', path: '/services' },
    { label: 'Offers / Events', path: '/offers' },
    { label: 'Contact', path: '/contact' }
  ];

  const handleWhatsApp = () => {
    const phone = STORE_INFO.whatsapp.replace(/[^0-9]/g, '');
    const message = encodeURIComponent("Hello AURELIA Concierge, I would like to enquire about your fine jewellery collection.");
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <header
      className={`site-header ${
        isHomePage ? (isScrolled ? 'scrolled' : '') : 'header-solid'
      }`}
    >
      <div className="container">
        <div className="navbar-inner">
          {/* Left: Brand Logo + Brand Name */}
          <Link to="/" className="nav-brand" aria-label="Lax360 Home">
            <div className="nav-brand-logo">
              <img
                src="/images/lax360-logo-transparent.png"
                alt="Lax360"
                className="brand-logo-img"
              />
            </div>
            <div className="nav-brand-text">
              <span className="nav-brand-title">Lax360</span>
            </div>
          </Link>

          {/* Center: Desktop Navigation Links */}
          <nav aria-label="Primary Navigation">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.path} className="nav-item">
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      isActive && !isHomePage ? 'nav-link active' : 'nav-link'
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: Actions (Enquiry + Mobile Toggle) */}
          <div className="nav-actions">
            <button
              onClick={() => openEnquiryModal()}
              className="btn btn-gold nav-enquire-btn"
              aria-label="Enquire with our jewellery consultant"
            >
              <Sparkles size={14} />
              <span>Enquire</span>
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              className="nav-mobile-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer-backdrop"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="mobile-drawer"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="mobile-drawer-header">
              <div className="nav-brand">
                <div className="nav-brand-logo">
                  <img
                    src="/images/lax360-logo-transparent.png"
                    alt="Lax360"
                    className="brand-logo-img"
                  />
                </div>
                <div className="nav-brand-text">
                  <span className="nav-brand-title">Lax360</span>
                </div>
              </div>
              <button
                className="mobile-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <ul className="mobile-nav-links">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      isActive && !isHomePage ? 'mobile-nav-link active' : 'mobile-nav-link'
                    }
                  >
                    <span>{item.label}</span>
                    <ChevronRight size={16} />
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="mobile-drawer-actions">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openEnquiryModal();
                }}
                className="btn btn-gold btn-lg"
                style={{ width: '100%' }}
              >
                <Sparkles size={16} />
                <span>Enquire Now</span>
              </button>

              <button
                onClick={handleWhatsApp}
                className="btn btn-whatsapp"
                style={{ width: '100%' }}
              >
                <MessageCircle size={18} />
                <span>WhatsApp Us</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
