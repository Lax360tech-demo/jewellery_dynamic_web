import React from 'react';
import { ServiceCard } from '../components/ServiceCard';
import { SERVICES } from '../data/mockData';
import { useJewellery } from '../context/JewelleryContext';
import { ShieldCheck, Award, Sparkles, RefreshCw } from 'lucide-react';

export const Services = () => {
  const { openAppointmentModal, services } = useJewellery();
  const displayServices = services && services.length > 0 ? services : SERVICES;

  return (
    <div className="services-page page-with-navbar">
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
            <span>Atelier & Care</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', marginBottom: '16px' }}>
            Maison Services
          </h1>
          <p style={{ color: '#C5BEB5', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '680px', margin: '0 auto' }}>
            From bespoke master creation and heirloom restoration to certified gemological valuations and private salon styling, discover our complete suite of jewellery services.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding" style={{ background: '#FAF8F5' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '30px'
          }}>
            {displayServices.map((srv) => (
              <ServiceCard key={srv.id} service={srv} />
            ))}
          </div>
        </div>
      </section>


      {/* Salon Banner */}
      <section style={{
        background: '#0E0D0C',
        color: '#FAF8F5',
        padding: '80px 24px',
        textAlign: 'center',
        borderTop: '1px solid rgba(197, 168, 105, 0.25)'
      }}>
        <div className="container-narrow">
          <div className="section-eyebrow" style={{ color: 'var(--gold-light)' }}>
            <span>Complimentary Care</span>
          </div>
          <h2 style={{ color: '#FAF8F5', marginBottom: '16px' }}>
            Lifetime Ultrasonic Spa Ritual
          </h2>
          <p style={{ color: '#AAA196', fontSize: '1.02rem', marginBottom: '32px', maxWidth: '640px', margin: '0 auto 32px' }}>
            All jewellery purchased from AURELIA enjoys complimentary lifetime ultrasonic cleaning, steam rejuvenation, and prong inspections at our Colaba salon.
          </p>
          <button onClick={() => openAppointmentModal()} className="btn btn-gold btn-lg">
            <Sparkles size={16} />
            <span>Schedule Showroom Service</span>
          </button>
        </div>
      </section>
    </div>
  );
};
