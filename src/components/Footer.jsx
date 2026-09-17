import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Instagram,
  Facebook,
  Youtube
} from 'lucide-react';
import { STORE_INFO } from '../data/mockData';
import '../styles/footer.css';

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* 1. Brand Heritage Column */}
            <div className="footer-brand">
              <div className="footer-brand-header">
                <div className="footer-brand-logo">
                  <img
                    src="/images/lax360-logo-transparent.png"
                    alt="Lax360 Logo"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
                <div>
                  <div className="footer-brand-title">Lax360</div>
                  <div className="footer-brand-subtitle">Haute Joaillerie</div>
                </div>
              </div>
              <p className="footer-brand-desc">
                Purveyors of exceptional handcrafted gold jewellery, rare certified natural solitaires, and bespoke royal bridal suites since 1984.
              </p>
              <div className="footer-socials">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Instagram"
                >
                  <Instagram size={17} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Facebook"
                >
                  <Facebook size={17} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="YouTube"
                >
                  <Youtube size={17} />
                </a>
                <a
                  href={`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={17} />
                </a>
              </div>
            </div>

            {/* 2. Quick Links */}
            <div>
              <h4 className="footer-col-title">Maison</h4>
              <ul className="footer-links-list">
                <li className="footer-link-item"><Link to="/">Home</Link></li>
                <li className="footer-link-item"><Link to="/about">About Us</Link></li>
                <li className="footer-link-item"><Link to="/collections">Collections</Link></li>
                <li className="footer-link-item"><Link to="/gallery">Gallery</Link></li>
                <li className="footer-link-item"><Link to="/custom-jewellery">Custom Jewellery</Link></li>
                <li className="footer-link-item"><Link to="/services">Services & Care</Link></li>
                <li className="footer-link-item"><Link to="/offers">Offers & Events</Link></li>
                <li className="footer-link-item"><Link to="/contact">Contact & Showroom</Link></li>
              </ul>
            </div>

            {/* 3. Collections */}
            <div>
              <h4 className="footer-col-title">Collections</h4>
              <ul className="footer-links-list">
                <li className="footer-link-item"><Link to="/gallery?category=gold">Gold Jewellery</Link></li>
                <li className="footer-link-item"><Link to="/gallery?category=diamond">Diamond Jewellery</Link></li>
                <li className="footer-link-item"><Link to="/gallery?category=bridal">Bridal Trousseau</Link></li>
                <li className="footer-link-item"><Link to="/gallery?category=silver">Sterling Silver</Link></li>
                <li className="footer-link-item"><Link to="/gallery?category=traditional">Temple Heritage</Link></li>
                <li className="footer-link-item"><Link to="/gallery?category=contemporary">Contemporary Line</Link></li>
                <li className="footer-link-item"><Link to="/gallery?category=men">Men's Fine Jewellery</Link></li>
                <li className="footer-link-item"><Link to="/gallery?category=kids">Kids Fine Trinkets</Link></li>
              </ul>
            </div>

            {/* 4. Contact & Showroom */}
            <div>
              <h4 className="footer-col-title">Boutique & Salon</h4>
              <div className="footer-contact-info">
                <div className="contact-item">
                  <MapPin size={18} className="contact-item-icon" />
                  <span>{STORE_INFO.showroomAddress}</span>
                </div>
                <div className="contact-item">
                  <Phone size={18} className="contact-item-icon" />
                  <span>{STORE_INFO.phone}</span>
                </div>
                <div className="contact-item">
                  <MessageCircle size={18} className="contact-item-icon" />
                  <span>WhatsApp: {STORE_INFO.whatsapp}</span>
                </div>
                <div className="contact-item">
                  <Mail size={18} className="contact-item-icon" />
                  <span>{STORE_INFO.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Copyright */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <div>
              &copy; {new Date().getFullYear()} Lax360 Haute Joaillerie. All Rights Reserved. Private Viewing By Appointment.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
