import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ChevronDown, Compass } from 'lucide-react';
import { useJewellery } from '../context/JewelleryContext';

export const Hero = () => {
  const { openEnquiryModal } = useJewellery();

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero-section" aria-label="Hero Introduction">
      {/* Background Video - Full Cover, Muted, Autoplay */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src="/videos/Gold_and_diamond_jewellery_video_20260910145228.mp4"
          type="video/mp4"
        />
      </video>

      {/* Hero Content - Unchanged text and buttons */}
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span>Haute Joaillerie • Royal Heritage</span>
        </div>

        <h1 className="hero-title">
          Timeless Jewellery. <br />
          <em>Crafted for Your Moments.</em>
        </h1>

        <p className="hero-desc">
          Step into an unhurried sanctuary of certified 22KT gold, rare natural solitaires, and bespoke royal bridal suites sculpted with four decades of master goldsmithing.
        </p>

        <div className="hero-buttons">
          <Link to="/collections" className="btn btn-gold btn-lg">
            <Compass size={17} />
            <span>Explore Collections</span>
          </Link>
          <button
            onClick={() => openEnquiryModal()}
            className="btn btn-outline-white btn-lg"
          >
            <Sparkles size={17} />
            <span>Enquire Now</span>
          </button>
        </div>
      </div>

      {/* Scroll Down Prompt */}
      <button
        onClick={scrollToNext}
        className="hero-scroll-indicator"
        aria-label="Scroll to discover collections"
      >
        <span>Discover</span>
        <ChevronDown size={18} />
      </button>
    </section>
  );
};
