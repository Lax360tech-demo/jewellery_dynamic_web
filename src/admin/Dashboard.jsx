import React from 'react';
import {
  MessageSquare,
  Calendar,
  Sparkles,
  Layers,
  Gem,
  ArrowUpRight,
  TrendingUp,
  Clock,
  CheckCircle,
  Eye,
  Wrench,
  Camera,
  Coins,
  Settings as SettingsIcon,
  ShieldCheck,
  Star,
  ExternalLink
} from 'lucide-react';
import { useJewellery } from '../context/JewelleryContext';

export const Dashboard = ({ setActiveTab }) => {
  const {
    enquiries,
    appointments,
    customRequests,
    collections,
    designs,
    services,
    settings
  } = useJewellery();

  const newEnquiriesCount = enquiries.filter((e) => e.status === 'New').length;
  const newAppointmentsCount = appointments.filter((a) => a.status === 'New').length;
  const newCustomRequestsCount = customRequests.filter((c) => c.status === 'Under Review' || c.status === 'New').length;
  const featuredDesignsCount = designs.filter((d) => d.isFeatured).length;

  const kpis = [
    {
      label: 'Jewellery Designs',
      value: designs.length,
      sub: `${featuredDesignsCount} featured in showcase`,
      icon: Gem,
      tab: 'products'
    },
    {
      label: 'Active Collections',
      value: collections.filter((c) => c.active !== false).length,
      sub: `${collections.length} total curated suites`,
      icon: Layers,
      tab: 'products'
    },
    {
      label: 'Maison Services',
      value: services?.length || 0,
      sub: 'Atelier & care procedures',
      icon: Sparkles,
      tab: 'services'
    },
    {
      label: 'Custom Commissions',
      value: newCustomRequestsCount,
      sub: `${customRequests.length} total bespoke requests`,
      icon: Sparkles,
      tab: 'custom',
      highlight: newCustomRequestsCount > 0
    },
    {
      label: 'Contact Enquiries',
      value: newEnquiriesCount,
      sub: `${enquiries.length} total enquiries`,
      icon: MessageSquare,
      tab: 'enquiries',
      highlight: newEnquiriesCount > 0
    },
    {
      label: 'VIP Appointments',
      value: newAppointmentsCount,
      sub: `${appointments.length} salon bookings`,
      icon: Calendar,
      tab: 'enquiries',
      highlight: newAppointmentsCount > 0
    },
    {
      label: 'Gallery Showcase',
      value: featuredDesignsCount,
      sub: 'Pieces featured in public reel',
      icon: Camera,
      tab: 'gallery'
    }
  ];

  const recentEnquiries = enquiries.slice(0, 5);

  const goldRates = settings?.goldRates || {
    gold24k: 7350,
    gold22k: 6740,
    gold18k: 5515,
    silver1kg: 89500,
    lastUpdated: 'Today'
  };

  return (
    <div className="admin-dashboard-tab">
      {/* Live Gold Rates Ribbon */}
      <div className="admin-gold-board">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'var(--gold-primary)',
            color: '#121110',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <Coins size={20} />
          </div>
          <div>
            <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--admin-gold-text)', fontWeight: 600 }}>
              Live Salon Bullion Board • {goldRates.lastUpdated}
            </div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.18rem', color: 'var(--admin-text-main)', fontWeight: 600 }}>
              Daily Certified Gold & Precious Metal Rates
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--admin-text-muted)', textTransform: 'uppercase' }}>24KT Pure Gold</span>
            <div style={{ fontWeight: 700, color: 'var(--admin-gold-text)', fontSize: '1.05rem' }}>₹{goldRates.gold24k}/gm</div>
          </div>

          <div style={{ height: '24px', width: '1px', background: 'var(--admin-border)' }} />

          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--admin-text-muted)', textTransform: 'uppercase' }}>22KT Jewellery Gold</span>
            <div style={{ fontWeight: 700, color: 'var(--admin-gold-text)', fontSize: '1.05rem' }}>₹{goldRates.gold22k}/gm</div>
          </div>

          <div style={{ height: '24px', width: '1px', background: 'var(--admin-border)' }} />

          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--admin-text-muted)', textTransform: 'uppercase' }}>18KT Diamond Gold</span>
            <div style={{ fontWeight: 700, color: 'var(--admin-gold-text)', fontSize: '1.05rem' }}>₹{goldRates.gold18k}/gm</div>
          </div>

          <div style={{ height: '24px', width: '1px', background: 'var(--admin-border)' }} />

          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--admin-text-muted)', textTransform: 'uppercase' }}>925 Silver</span>
            <div style={{ fontWeight: 700, color: 'var(--admin-text-main)', fontSize: '1.05rem' }}>₹{goldRates.silver1kg}/kg</div>
          </div>

          <button
            onClick={() => setActiveTab('settings')}
            className="btn btn-outline btn-sm"
            style={{ fontSize: '0.76rem', borderColor: 'var(--admin-gold-accent)', color: 'var(--admin-gold-text)' }}
          >
            Update Rates
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="admin-kpi-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))' }}>
        {kpis.map((kpi, idx) => {
          const IconComponent = kpi.icon;
          return (
            <div
              key={idx}
              className="admin-kpi-card"
              onClick={() => setActiveTab(kpi.tab)}
              style={{
                cursor: 'pointer',
                borderColor: kpi.highlight ? 'var(--gold-primary)' : undefined,
                background: kpi.highlight ? 'rgba(197, 168, 105, 0.08)' : undefined
              }}
            >
              <div className="admin-kpi-header">
                <span className="admin-kpi-label">{kpi.label}</span>
                <div className="admin-kpi-icon">
                  <IconComponent size={18} />
                </div>
              </div>
              <div className="admin-kpi-value">{kpi.value}</div>
              <div className="admin-kpi-sub">{kpi.sub}</div>
            </div>
          );
        })}
      </div>

      {/* Recent Client Enquiries */}
      <div className="admin-card" style={{ marginBottom: '24px' }}>
        <div className="admin-card-header">
          <div>
            <h3 className="admin-card-title">Recent Enquiries</h3>
            <p style={{ fontSize: '0.78rem', color: 'var(--admin-text-muted, #8C847A)', marginTop: '2px' }}>
              Latest prospective client communications
            </p>
          </div>
          <button
            onClick={() => setActiveTab('enquiries')}
            className="admin-action-btn"
            style={{ fontSize: '0.76rem' }}
          >
            <span>View All</span>
            <ArrowUpRight size={13} />
          </button>
        </div>

        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Client</th>
                <th>Design</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentEnquiries.length === 0 ? (
                <tr>
                  <td colSpan={4} style={{ textAlign: 'center', padding: '24px', color: 'var(--admin-text-muted)' }}>
                    No recent enquiries.
                  </td>
                </tr>
              ) : (
                recentEnquiries.map((enq) => (
                  <tr key={enq.id}>
                    <td>
                      <strong style={{ color: 'var(--admin-text-main)', fontSize: '0.84rem' }}>{enq.customerName}</strong>
                      <div style={{ fontSize: '0.72rem', color: 'var(--admin-text-muted)' }}>{enq.phone}</div>
                    </td>
                    <td style={{ fontSize: '0.82rem', color: 'var(--admin-text-sub)' }}>
                      {enq.designName || 'General Enquiry'}
                    </td>
                    <td style={{ fontSize: '0.76rem', color: 'var(--admin-text-muted)', whiteSpace: 'nowrap' }}>{enq.date}</td>
                    <td>
                      <span className="status-badge new">
                        {enq.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Access to Sections */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '14px'
      }}>
        <button
          onClick={() => setActiveTab('products')}
          className="admin-card"
          style={{
            padding: '18px',
            textAlign: 'left',
            cursor: 'pointer',
            border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.2))',
            background: 'var(--admin-surface, #141210)'
          }}
        >
          <Gem size={20} color="var(--gold-primary)" style={{ marginBottom: '8px' }} />
          <div style={{ fontWeight: 600, color: 'var(--admin-text-main, #FAF8F5)', fontSize: '0.9rem' }}>Manage Products</div>
          <div style={{ fontSize: '0.74rem', color: 'var(--admin-text-muted, #8C847A)', marginTop: '2px' }}>{designs.length} designs, {collections.length} suites</div>
        </button>

        <button
          onClick={() => setActiveTab('services')}
          className="admin-card"
          style={{
            padding: '18px',
            textAlign: 'left',
            cursor: 'pointer',
            border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.2))',
            background: 'var(--admin-surface, #141210)'
          }}
        >
          <Sparkles size={20} color="var(--gold-primary)" style={{ marginBottom: '8px' }} />
          <div style={{ fontWeight: 600, color: 'var(--admin-text-main, #FAF8F5)', fontSize: '0.9rem' }}>Atelier Services</div>
          <div style={{ fontSize: '0.74rem', color: 'var(--admin-text-muted, #8C847A)', marginTop: '2px' }}>{services?.length || 0} care & repair options</div>
        </button>

        <button
          onClick={() => setActiveTab('gallery')}
          className="admin-card"
          style={{
            padding: '18px',
            textAlign: 'left',
            cursor: 'pointer',
            border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.2))',
            background: 'var(--admin-surface, #141210)'
          }}
        >
          <Camera size={20} color="var(--gold-primary)" style={{ marginBottom: '8px' }} />
          <div style={{ fontWeight: 600, color: 'var(--admin-text-main, #FAF8F5)', fontSize: '0.9rem' }}>Gallery Showcase</div>
          <div style={{ fontSize: '0.74rem', color: 'var(--admin-text-muted, #8C847A)', marginTop: '2px' }}>Curated archive & reels</div>
        </button>

        <button
          onClick={() => setActiveTab('settings')}
          className="admin-card"
          style={{
            padding: '18px',
            textAlign: 'left',
            cursor: 'pointer',
            border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.2))',
            background: 'var(--admin-surface, #141210)'
          }}
        >
          <SettingsIcon size={20} color="var(--gold-primary)" style={{ marginBottom: '8px' }} />
          <div style={{ fontWeight: 600, color: 'var(--admin-text-main, #FAF8F5)', fontSize: '0.9rem' }}>Boutique Settings</div>
          <div style={{ fontSize: '0.74rem', color: 'var(--admin-text-muted, #8C847A)', marginTop: '2px' }}>Rates, store contact & backup</div>
        </button>
      </div>
    </div>
  );
};
