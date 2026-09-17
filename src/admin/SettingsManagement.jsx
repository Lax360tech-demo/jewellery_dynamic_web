import React, { useState } from 'react';
import {
  Save,
  RotateCcw,
  Download,
  Building,
  Coins,
  Percent,
  Check,
  AlertCircle,
  Clock,
  Sparkles,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { useJewellery } from '../context/JewelleryContext';

export const SettingsManagement = () => {
  const {
    settings,
    updateSettings,
    resetToDefaults,
    collections,
    designs,
    enquiries,
    appointments,
    customRequests,
    services
  } = useJewellery();

  const [formData, setFormData] = useState({
    brandName: settings?.brandName || 'Lax360 Haute Joaillerie',
    tagline: settings?.tagline || 'Timeless Fine Jewellery & Sovereign Diamonds',
    phone: settings?.phone || '+91 (022) 6890 4400',
    whatsapp: settings?.whatsapp || '+91 98201 88000',
    email: settings?.email || 'concierge@lax360jewels.com',
    showroomAddress: settings?.showroomAddress || 'The Lax360 Maison, 14 Heritage Boulevard, Colaba, Mumbai 400 001, India',
    weekdaysHours: settings?.operatingHours?.weekdays || 'Monday – Saturday: 10:30 AM – 08:30 PM',
    sundayHours: settings?.operatingHours?.sunday || 'Sunday: 11:30 AM – 07:00 PM (By Appointment)',
    gold24k: settings?.goldRates?.gold24k || 7350,
    gold22k: settings?.goldRates?.gold22k || 6740,
    gold18k: settings?.goldRates?.gold18k || 5515,
    silver1kg: settings?.goldRates?.silver1kg || 89500,
    platinum1g: settings?.goldRates?.platinum1g || 3120,
    currencySymbol: settings?.currencySymbol || '₹',
    taxRate: settings?.taxRate || 3,
    makingChargeDiscount: settings?.makingChargeDiscount || 15
  });

  const [savedSuccess, setSavedSuccess] = useState(false);
  const [activeSubTab, setActiveSubTab] = useState('boutique'); // 'boutique' | 'rates' | 'tax' | 'backup'

  const handleSave = (e) => {
    e.preventDefault();
    const updated = {
      brandName: formData.brandName,
      tagline: formData.tagline,
      phone: formData.phone,
      whatsapp: formData.whatsapp,
      email: formData.email,
      showroomAddress: formData.showroomAddress,
      operatingHours: {
        weekdays: formData.weekdaysHours,
        sunday: formData.sundayHours
      },
      goldRates: {
        gold24k: Number(formData.gold24k),
        gold22k: Number(formData.gold22k),
        gold18k: Number(formData.gold18k),
        silver1kg: Number(formData.silver1kg),
        platinum1g: Number(formData.platinum1g),
        lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ', ' + new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })
      },
      currencySymbol: formData.currencySymbol,
      taxRate: Number(formData.taxRate),
      makingChargeDiscount: Number(formData.makingChargeDiscount)
    };

    updateSettings(updated);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
    }, 4000);
  };

  const handleAutoCalcRates = () => {
    const rate24k = Number(formData.gold24k);
    if (!rate24k || isNaN(rate24k)) return;
    const calc22k = Math.round(rate24k * 0.9166);
    const calc18k = Math.round(rate24k * 0.75);
    setFormData((prev) => ({
      ...prev,
      gold22k: calc22k,
      gold18k: calc18k
    }));
  };

  const handleExportBackup = () => {
    const backupData = {
      exportDate: new Date().toISOString(),
      settings: formData,
      collections,
      designs,
      enquiries,
      appointments,
      customRequests,
      services
    };

    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(backupData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `lax360_salon_backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleResetData = () => {
    if (window.confirm("CAUTION: This will reset all catalogue designs, enquiries, appointments, services, and rates back to factory defaults. Proceed?")) {
      resetToDefaults();
      alert("Salon data successfully restored to factory defaults.");
    }
  };

  return (
    <div className="admin-settings-tab">
      <div className="admin-card">
        {/* Header */}
        <div className="admin-card-header">
          <div>
            <h3 className="admin-card-title">Salon Settings & Operations Config</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--admin-text-muted, #8C847A)', marginTop: '2px' }}>
              Configure showroom contact details, live bullion and gold rates, tax parameters, and backups
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {savedSuccess && (
              <span style={{
                color: '#22C55E',
                background: 'rgba(34, 197, 94, 0.15)',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.78rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <Check size={14} />
                Settings Saved Successfully
              </span>
            )}
            <button
              type="button"
              onClick={handleSave}
              className="btn btn-gold btn-sm"
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <Save size={14} />
              <span>Save All Changes</span>
            </button>
          </div>
        </div>

        {/* Sub Navigation Bar */}
        <div style={{
          display: 'flex',
          gap: '8px',
          padding: '12px 24px',
          background: 'var(--admin-surface-2, rgba(20, 18, 16, 0.5))',
          borderBottom: '1px solid var(--admin-border, rgba(197, 168, 105, 0.15))',
          flexWrap: 'wrap'
        }}>
          <button
            type="button"
            onClick={() => setActiveSubTab('boutique')}
            className={`filter-chip ${activeSubTab === 'boutique' ? 'active' : ''}`}
            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <Building size={13} />
            <span>Showroom & Contact Info</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSubTab('rates')}
            className={`filter-chip ${activeSubTab === 'rates' ? 'active' : ''}`}
            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <Coins size={13} />
            <span>Live Gold & Metal Rates</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSubTab('tax')}
            className={`filter-chip ${activeSubTab === 'tax' ? 'active' : ''}`}
            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <Percent size={13} />
            <span>Taxes & Commercials</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSubTab('backup')}
            className={`filter-chip ${activeSubTab === 'backup' ? 'active' : ''}`}
            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <Download size={13} />
            <span>Backup & Data Reset</span>
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} style={{ padding: '24px' }}>
          {/* TAB 1: SHOWROOM INFO */}
          {activeSubTab === 'boutique' && (
            <div style={{ maxWidth: '800px' }}>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--admin-text-main, #FAF8F5)', marginBottom: '16px' }}>
                Boutique Profile & Concierge Lines
              </h4>

              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label className="admin-form-label">Maison / Brand Name</label>
                  <input
                    type="text"
                    className="admin-form-input"
                    value={formData.brandName}
                    onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Brand Tagline</label>
                  <input
                    type="text"
                    className="admin-form-input"
                    value={formData.tagline}
                    onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                  />
                </div>
              </div>

              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label className="admin-form-label">Concierge Phone Number</label>
                  <input
                    type="text"
                    className="admin-form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">WhatsApp VIP Concierge</label>
                  <input
                    type="text"
                    className="admin-form-input"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  />
                </div>
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Official Concierge Email</label>
                <input
                  type="email"
                  className="admin-form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Flagship Showroom Address</label>
                <textarea
                  rows={2}
                  className="admin-form-textarea"
                  value={formData.showroomAddress}
                  onChange={(e) => setFormData({ ...formData, showroomAddress: e.target.value })}
                />
              </div>

              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label className="admin-form-label">Weekday Visiting Hours</label>
                  <input
                    type="text"
                    className="admin-form-input"
                    value={formData.weekdaysHours}
                    onChange={(e) => setFormData({ ...formData, weekdaysHours: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Sunday & Holiday Hours</label>
                  <input
                    type="text"
                    className="admin-form-input"
                    value={formData.sundayHours}
                    onChange={(e) => setFormData({ ...formData, sundayHours: e.target.value })}
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: GOLD & BULLION RATES */}
          {activeSubTab === 'rates' && (
            <div style={{ maxWidth: '800px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--admin-text-main, #FAF8F5)', margin: 0 }}>
                    Live Bullion & Precious Metal Rates
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--admin-text-muted, #8C847A)', marginTop: '2px' }}>
                    Used across valuation reports, instant exchange assays, and boutique price calculators
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleAutoCalcRates}
                  className="btn btn-outline btn-sm"
                  style={{ fontSize: '0.76rem' }}
                >
                  <Sparkles size={12} style={{ marginRight: '5px', color: 'var(--gold-primary)' }} />
                  Auto-Calc 22K & 18K from 24K
                </button>
              </div>

              {/* Rates Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '16px',
                marginBottom: '24px'
              }}>
                <div style={{ background: 'var(--admin-surface-2, #181614)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.25))' }}>
                  <label className="admin-form-label" style={{ color: 'var(--gold-primary)' }}>
                    24KT Pure Gold (₹/gm)
                  </label>
                  <input
                    type="number"
                    className="admin-form-input"
                    value={formData.gold24k}
                    onChange={(e) => setFormData({ ...formData, gold24k: e.target.value })}
                  />
                  <div style={{ fontSize: '0.72rem', color: 'var(--admin-text-muted, #8C847A)', marginTop: '4px' }}>
                    99.9% Purity Bullion
                  </div>
                </div>

                <div style={{ background: 'var(--admin-surface-2, #181614)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.25))' }}>
                  <label className="admin-form-label" style={{ color: 'var(--gold-primary)' }}>
                    22KT Sovereign Gold (₹/gm)
                  </label>
                  <input
                    type="number"
                    className="admin-form-input"
                    value={formData.gold22k}
                    onChange={(e) => setFormData({ ...formData, gold22k: e.target.value })}
                  />
                  <div style={{ fontSize: '0.72rem', color: 'var(--admin-text-muted, #8C847A)', marginTop: '4px' }}>
                    BIS 916 Hallmark Standard
                  </div>
                </div>

                <div style={{ background: 'var(--admin-surface-2, #181614)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.25))' }}>
                  <label className="admin-form-label" style={{ color: 'var(--gold-primary)' }}>
                    18KT Fine Gold (₹/gm)
                  </label>
                  <input
                    type="number"
                    className="admin-form-input"
                    value={formData.gold18k}
                    onChange={(e) => setFormData({ ...formData, gold18k: e.target.value })}
                  />
                  <div style={{ fontSize: '0.72rem', color: 'var(--admin-text-muted, #8C847A)', marginTop: '4px' }}>
                    Diamond Studded Jewellery
                  </div>
                </div>

                <div style={{ background: 'var(--admin-surface-2, #181614)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.25))' }}>
                  <label className="admin-form-label">
                    925 Sterling Silver (₹/kg)
                  </label>
                  <input
                    type="number"
                    className="admin-form-input"
                    value={formData.silver1kg}
                    onChange={(e) => setFormData({ ...formData, silver1kg: e.target.value })}
                  />
                  <div style={{ fontSize: '0.72rem', color: 'var(--admin-text-muted, #8C847A)', marginTop: '4px' }}>
                    Per Kilogram
                  </div>
                </div>

                <div style={{ background: 'var(--admin-surface-2, #181614)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.25))' }}>
                  <label className="admin-form-label">
                    Platinum 950 (₹/gm)
                  </label>
                  <input
                    type="number"
                    className="admin-form-input"
                    value={formData.platinum1g}
                    onChange={(e) => setFormData({ ...formData, platinum1g: e.target.value })}
                  />
                  <div style={{ fontSize: '0.72rem', color: 'var(--admin-text-muted, #8C847A)', marginTop: '4px' }}>
                    Pt 950 Certified
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TAX & COMMERCIALS */}
          {activeSubTab === 'tax' && (
            <div style={{ maxWidth: '800px' }}>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--admin-text-main, #FAF8F5)', marginBottom: '16px' }}>
                Tax & Commercial Parameters
              </h4>

              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label className="admin-form-label">Default Currency Symbol</label>
                  <input
                    type="text"
                    className="admin-form-input"
                    value={formData.currencySymbol}
                    onChange={(e) => setFormData({ ...formData, currencySymbol: e.target.value })}
                    placeholder="₹"
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Gold & Jewellery GST Rate (%)</label>
                  <input
                    type="number"
                    className="admin-form-input"
                    value={formData.taxRate}
                    onChange={(e) => setFormData({ ...formData, taxRate: e.target.value })}
                    placeholder="3"
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">VIP Making Charge Privilege (%)</label>
                  <input
                    type="number"
                    className="admin-form-input"
                    value={formData.makingChargeDiscount}
                    onChange={(e) => setFormData({ ...formData, makingChargeDiscount: e.target.value })}
                    placeholder="15"
                  />
                </div>
              </div>

              <div style={{ background: 'var(--admin-surface-2, #181614)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.15))', marginTop: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gold-primary)', fontWeight: 600, fontSize: '0.84rem', marginBottom: '4px' }}>
                  <AlertCircle size={15} />
                  Sovereign Hallmark Guarantee
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--admin-text-sub, #AAA196)', margin: 0, lineHeight: 1.6 }}>
                  All 22KT and 18KT gold items sold through Lax360 carry mandatory BIS laser-inscribed HUID numbers adhering to Bureau of Indian Standards standards. Solitaires carry GIA/IGI laser inscription codes.
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: BACKUP & DATA RESET */}
          {activeSubTab === 'backup' && (
            <div style={{ maxWidth: '800px' }}>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--admin-text-main, #FAF8F5)', marginBottom: '16px' }}>
                Boutique Data Management
              </h4>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                {/* Export Card */}
                <div style={{ background: 'var(--admin-surface-2, #181614)', padding: '20px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.2))' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--gold-primary)' }}>
                    <Download size={18} />
                    <h5 style={{ margin: 0, fontSize: '1rem', color: 'var(--admin-text-main, #FAF8F5)' }}>Export Boutique JSON Backup</h5>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--admin-text-muted, #8C847A)', lineHeight: 1.5, marginBottom: '16px' }}>
                    Download complete snapshot of {designs.length} designs, {collections.length} collections, {enquiries.length} enquiries, {appointments.length} appointments, and {services?.length || 0} services.
                  </p>
                  <button
                    type="button"
                    onClick={handleExportBackup}
                    className="btn btn-gold btn-sm"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <Download size={14} style={{ marginRight: '6px' }} />
                    Download JSON Archive
                  </button>
                </div>

                {/* Reset Card */}
                <div style={{ background: 'var(--admin-surface-2, #181614)', padding: '20px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#EF4444' }}>
                    <RotateCcw size={18} />
                    <h5 style={{ margin: 0, fontSize: '1rem', color: 'var(--admin-text-main, #FAF8F5)' }}>Reset Demo Data</h5>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--admin-text-muted, #8C847A)', lineHeight: 1.5, marginBottom: '16px' }}>
                    Reset all catalogue items, bespoke requests, and enquiries back to original factory mock data.
                  </p>
                  <button
                    type="button"
                    onClick={handleResetData}
                    className="btn btn-sm"
                    style={{ width: '100%', justifyContent: 'center', background: 'rgba(239, 68, 68, 0.15)', color: '#EF4444', border: '1px solid rgba(239, 68, 68, 0.4)' }}
                  >
                    <RotateCcw size={14} style={{ marginRight: '6px' }} />
                    Restore Factory Dataset
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Save Action */}
          <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid var(--admin-border, rgba(197, 168, 105, 0.15))', display: 'flex', justifyContent: 'flex-end' }}>
            <button
              type="submit"
              className="btn btn-gold"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 24px' }}
            >
              <Save size={15} />
              <span>Save Settings</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
