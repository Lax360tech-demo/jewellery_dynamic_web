import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Gem,
  Sparkles,
  MessageSquare,
  Camera,
  Settings as SettingsIcon,
  ExternalLink,
  RotateCcw,
  Sun,
  Moon,
  Menu,
  X,
  Coins
} from 'lucide-react';
import { useJewellery } from '../context/JewelleryContext';
import { Dashboard } from './Dashboard';
import { ProductsCollectionsManagement } from './ProductsCollectionsManagement';
import { ServicesManagement } from './ServicesManagement';
import { CustomRequests } from './CustomRequests';
import { ContactEnquiriesManagement } from './ContactEnquiriesManagement';
import { GalleryManagement } from './GalleryManagement';
import { SettingsManagement } from './SettingsManagement';
import '../styles/admin.css';

export const AdminLayout = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Theme state: 'dark' or 'light'
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('lax360_admin_theme') || 'dark';
    } catch {
      return 'dark';
    }
  });

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    try {
      localStorage.setItem('lax360_admin_theme', nextTheme);
    } catch (e) {
      console.error(e);
    }
  };

  const {
    enquiries,
    appointments,
    customRequests,
    designs,
    services,
    settings,
    resetToDefaults
  } = useJewellery();

  const newEnquiriesCount = enquiries.filter((e) => e.status === 'New').length;
  const newAppointmentsCount = appointments.filter((a) => a.status === 'New').length;
  const newCustomCount = customRequests.filter((c) => c.status === 'Under Review' || c.status === 'New').length;
  const totalNewEnquiries = newEnquiriesCount + newAppointmentsCount;
  const featuredCount = designs.filter((d) => d.isFeatured).length;

  const tabs = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard
    },
    {
      id: 'products',
      label: 'Products / Collections',
      icon: Gem,
      badge: designs.length
    },
    {
      id: 'services',
      label: 'Services',
      icon: Sparkles,
      badge: services?.length || null
    },
    {
      id: 'custom',
      label: 'Custom Enquiries',
      icon: Sparkles,
      badge: newCustomCount > 0 ? newCustomCount : null,
      badgeColor: 'var(--gold-primary)'
    },
    {
      id: 'enquiries',
      label: 'Contact & Enquiries',
      icon: MessageSquare,
      badge: totalNewEnquiries > 0 ? totalNewEnquiries : null,
      badgeColor: '#3B82F6'
    },
    {
      id: 'gallery',
      label: 'Gallery',
      icon: Camera,
      badge: featuredCount > 0 ? `${featuredCount}★` : null
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: SettingsIcon
    }
  ];

  const handleResetData = () => {
    if (window.confirm("Reset all catalogue items, bespoke requests, enquiries, and rates to factory defaults?")) {
      resetToDefaults();
    }
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setIsMobileSidebarOpen(false);
  };

  return (
    <div className={`admin-wrapper admin-theme-${theme}`}>
      {/* Mobile Backdrop Overlay */}
      {isMobileSidebarOpen && (
        <div
          className="admin-mobile-backdrop"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`admin-sidebar ${isMobileSidebarOpen ? 'mobile-open' : ''}`}>
        <div className="admin-sidebar-header">
          <img
            src="/images/lax360-logo-transparent.png"
            alt="Lax360 Logo"
            style={{ width: '34px', height: '34px', objectFit: 'contain', flexShrink: 0 }}
          />
          <div className="admin-sidebar-brand">
            <span className="admin-sidebar-title">Lax360</span>
            <span className="admin-sidebar-subtitle">Salon Operations</span>
          </div>

          <button
            className="admin-sidebar-close-btn"
            onClick={() => setIsMobileSidebarOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        <ul className="admin-nav-menu">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <li key={tab.id}>
                <button
                  onClick={() => handleTabClick(tab.id)}
                  className={`admin-nav-btn ${isActive ? 'active' : ''}`}
                >
                  <IconComponent size={17} />
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span
                      className="admin-nav-badge"
                      style={tab.badgeColor ? { background: tab.badgeColor } : undefined}
                    >
                      {tab.badge}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="admin-sidebar-footer">
          <button
            onClick={handleResetData}
            className="admin-nav-btn"
            style={{ color: 'var(--admin-text-muted, #8C847A)', fontSize: '0.76rem' }}
            title="Reset localStorage data to factory mock dataset"
          >
            <RotateCcw size={14} />
            <span>Reset Demo Data</span>
          </button>

          <Link
            to="/"
            className="admin-nav-btn"
            style={{ color: 'var(--gold-primary)', background: 'rgba(197, 168, 105, 0.08)' }}
          >
            <ExternalLink size={15} />
            <span>Return to Boutique</span>
          </Link>
        </div>
      </aside>

      {/* Main Workspace */}
      <main className="admin-main">
        <header className="admin-topbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button
              className="admin-mobile-toggle-btn"
              onClick={() => setIsMobileSidebarOpen(true)}
              title="Open Navigation Menu"
            >
              <Menu size={20} />
            </button>
            <div>
              <h2 className="admin-topbar-title">
                {tabs.find((t) => t.id === activeTab)?.label}
              </h2>
            </div>
          </div>

          <div className="admin-topbar-actions">
            {/* Quick 24K Gold Rate Pill */}
            {settings?.goldRates?.gold24k && (
              <div
                onClick={() => setActiveTab('settings')}
                className="admin-topbar-gold-pill"
                title="Click to manage gold rates"
              >
                <Coins size={13} color="var(--gold-primary)" />
                <span>24K: <strong>₹{settings.goldRates.gold24k}/g</strong></span>
              </div>
            )}

            {/* Dark / Light Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="admin-theme-toggle-btn"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? (
                <>
                  <Sun size={15} color="#F59E0B" />
                  <span className="theme-toggle-label">Light Mode</span>
                </>
              ) : (
                <>
                  <Moon size={15} color="#6366F1" />
                  <span className="theme-toggle-label">Dark Mode</span>
                </>
              )}
            </button>

            {/* Public Boutique Link */}
            <Link to="/" className="btn btn-outline-gold btn-sm" target="_blank" rel="noreferrer">
              <span>View Public Site</span>
              <ExternalLink size={13} />
            </Link>
          </div>
        </header>

        <div className="admin-content-area">
          {activeTab === 'dashboard' && <Dashboard setActiveTab={setActiveTab} />}
          {activeTab === 'products' && <ProductsCollectionsManagement />}
          {activeTab === 'services' && <ServicesManagement />}
          {activeTab === 'custom' && <CustomRequests />}
          {activeTab === 'enquiries' && <ContactEnquiriesManagement />}
          {activeTab === 'gallery' && <GalleryManagement />}
          {activeTab === 'settings' && <SettingsManagement />}
        </div>
      </main>
    </div>
  );
};
