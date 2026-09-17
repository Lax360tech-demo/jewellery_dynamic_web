import React, { useState } from 'react';
import {
  MessageSquare,
  Calendar,
  Phone,
  Mail,
  Search,
  MessageCircle,
  Clock,
  Eye,
  Trash2,
  Plus,
  X,
  Check,
  AlertTriangle,
  Send,
  User
} from 'lucide-react';
import { useJewellery } from '../context/JewelleryContext';

export const ContactEnquiriesManagement = () => {
  const {
    enquiries,
    appointments,
    updateEnquiryStatus,
    deleteEnquiry,
    addEnquiry,
    updateAppointmentStatus,
    deleteAppointment,
    addAppointment
  } = useJewellery();

  const [activeSubTab, setActiveSubTab] = useState('enquiries'); // 'enquiries' | 'appointments'
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Modal states
  const [selectedItem, setSelectedItem] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [isAddEnquiryOpen, setIsAddEnquiryOpen] = useState(false);
  const [isAddAppointmentOpen, setIsAddAppointmentOpen] = useState(false);

  const enquiryStatuses = ['New', 'Contacted', 'Follow-up', 'Completed', 'Cancelled'];
  const appointmentStatuses = ['New', 'Confirmed', 'Completed', 'Cancelled'];

  // Add Enquiry form state
  const [enquiryForm, setEnquiryForm] = useState({
    customerName: '',
    phone: '',
    email: '',
    designName: 'General Salon Inquiry',
    designCode: 'AUR-GEN',
    message: ''
  });

  // Add Appointment form state
  const [appointmentForm, setAppointmentForm] = useState({
    customerName: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    time: '03:00 PM',
    purpose: 'Bridal Trousseau Consultation',
    notes: '2 Guests attending private salon lounge'
  });

  // Filter Enquiries
  const filteredEnquiries = enquiries.filter((item) => {
    const matchesStatus = filterStatus === 'all' || item.status === filterStatus;
    const query = search.toLowerCase().trim();
    const matchesQuery =
      !query ||
      item.customerName?.toLowerCase().includes(query) ||
      item.phone?.includes(query) ||
      item.designName?.toLowerCase().includes(query) ||
      item.id?.toLowerCase().includes(query);
    return matchesStatus && matchesQuery;
  });

  // Filter Appointments
  const filteredAppointments = appointments.filter((item) => {
    const matchesStatus = filterStatus === 'all' || item.status === filterStatus;
    const query = search.toLowerCase().trim();
    const matchesQuery =
      !query ||
      item.customerName?.toLowerCase().includes(query) ||
      item.phone?.includes(query) ||
      item.purpose?.toLowerCase().includes(query) ||
      item.id?.toLowerCase().includes(query);
    return matchesStatus && matchesQuery;
  });

  const handleOpenAdd = () => {
    if (activeSubTab === 'enquiries') {
      setEnquiryForm({
        customerName: '',
        phone: '',
        email: '',
        designName: 'Gold Temple Haram Inquiry',
        designCode: 'AUR-TR310',
        message: 'Customer called inquiring about weight and making charges for wedding next month.'
      });
      setIsAddEnquiryOpen(true);
    } else {
      setAppointmentForm({
        customerName: '',
        phone: '',
        email: '',
        date: new Date().toISOString().split('T')[0],
        time: '04:00 PM',
        purpose: 'Diamond Solitaire Consultation',
        notes: 'VIP Client viewing 3.0 carat round brilliant solitaires'
      });
      setIsAddAppointmentOpen(true);
    }
  };

  const handleCreateEnquiry = (e) => {
    e.preventDefault();
    if (!enquiryForm.customerName.trim() || !enquiryForm.phone.trim()) {
      alert('Please provide name and phone.');
      return;
    }
    addEnquiry(enquiryForm);
    setIsAddEnquiryOpen(false);
  };

  const handleCreateAppointment = (e) => {
    e.preventDefault();
    if (!appointmentForm.customerName.trim() || !appointmentForm.phone.trim()) {
      alert('Please provide name and phone.');
      return;
    }
    addAppointment(appointmentForm);
    setIsAddAppointmentOpen(false);
  };

  const handleOpenView = (item) => {
    setSelectedItem(item);
    setIsViewModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (!itemToDelete) return;
    if (activeSubTab === 'enquiries') {
      deleteEnquiry(itemToDelete.id);
    } else {
      deleteAppointment(itemToDelete.id);
    }
    setItemToDelete(null);
    if (selectedItem?.id === itemToDelete.id) {
      setIsViewModalOpen(false);
    }
  };

  return (
    <div className="admin-enquiries-tab">
      <div className="admin-card">
        {/* Header */}
        <div className="admin-card-header">
          <div>
            <h3 className="admin-card-title">Contact & Jewellery Enquiries</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--admin-text-muted, #8C847A)', marginTop: '2px' }}>
              Track boutique product enquiries, client messages, and VIP salon lounge reservations
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <div className="admin-search-box">
              <Search size={14} className="admin-search-icon" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name, phone, ref..."
                className="admin-search-input"
              />
            </div>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="status-select"
            >
              <option value="all">All Statuses</option>
              {(activeSubTab === 'enquiries' ? enquiryStatuses : appointmentStatuses).map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>

            <button onClick={handleOpenAdd} className="btn btn-gold btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Plus size={15} />
              <span>{activeSubTab === 'enquiries' ? 'Record Enquiry' : 'Book Appointment'}</span>
            </button>
          </div>
        </div>

        {/* Sub Navigation Bar */}
        <div style={{
          display: 'flex',
          gap: '8px',
          padding: '12px 24px',
          background: 'var(--admin-surface-2, rgba(20, 18, 16, 0.5))',
          borderBottom: '1px solid var(--admin-border, rgba(197, 168, 105, 0.15))'
        }}>
          <button
            type="button"
            onClick={() => {
              setActiveSubTab('enquiries');
              setFilterStatus('all');
            }}
            className={`filter-chip ${activeSubTab === 'enquiries' ? 'active' : ''}`}
            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <MessageSquare size={13} />
            <span>Product & General Enquiries ({enquiries.length})</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveSubTab('appointments');
              setFilterStatus('all');
            }}
            className={`filter-chip ${activeSubTab === 'appointments' ? 'active' : ''}`}
            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <Calendar size={13} />
            <span>VIP Salon Appointments ({appointments.length})</span>
          </button>
        </div>

        {/* TAB 1: ENQUIRIES TABLE */}
        {activeSubTab === 'enquiries' ? (
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Enquiry Ref</th>
                  <th>Client Contact</th>
                  <th>Piece of Interest</th>
                  <th>Client Message</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredEnquiries.length === 0 ? (
                  <tr>
                    <td colSpan={7} style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--admin-text-muted, #8C847A)' }}>
                      No client enquiries found matching your filter.
                    </td>
                  </tr>
                ) : (
                  filteredEnquiries.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <span style={{ color: 'var(--gold-primary)', fontWeight: 600 }}>
                          {item.id}
                        </span>
                      </td>
                      <td>
                        <strong style={{ color: 'var(--admin-text-main, #FAF8F5)' }}>{item.customerName}</strong>
                        <div style={{ fontSize: '0.76rem', color: 'var(--admin-text-sub, #AAA196)' }}>{item.phone}</div>
                        {item.email && (
                          <div style={{ fontSize: '0.72rem', color: 'var(--admin-text-muted, #736B63)' }}>{item.email}</div>
                        )}
                      </td>
                      <td>
                        <div style={{ color: 'var(--admin-text-main, #FAF8F5)', fontWeight: 500 }}>
                          {item.designName || 'General Enquiry'}
                        </div>
                        {item.designCode && (
                          <span style={{ fontSize: '0.72rem', color: 'var(--gold-primary)' }}>
                            {item.designCode}
                          </span>
                        )}
                      </td>
                      <td style={{ maxWidth: '280px' }}>
                        <p style={{
                          fontSize: '0.8rem',
                          color: 'var(--admin-text-sub, #AAA196)',
                          margin: 0,
                          lineHeight: 1.5,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}>
                          {item.message || 'Customer requested consultation on product availability and pricing.'}
                        </p>
                      </td>
                      <td style={{ whiteSpace: 'nowrap' }}>{item.date}</td>
                      <td>
                        <select
                          value={item.status}
                          onChange={(e) => updateEnquiryStatus(item.id, e.target.value)}
                          className="status-select"
                        >
                          {enquiryStatuses.map((st) => (
                            <option key={st} value={st}>{st}</option>
                          ))}
                        </select>
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                          <button
                            onClick={() => handleOpenView(item)}
                            className="admin-action-btn"
                            title="View Full Enquiry"
                          >
                            <Eye size={13} />
                          </button>

                          <button
                            onClick={() => {
                              const cleanPhone = (item.phone || '').replace(/[^0-9]/g, '');
                              const text = `Hello ${item.customerName}, this is Lax360 Haute Joaillerie regarding your enquiry on ${item.designName || 'our jewellery'}. How may our concierge assist you today?`;
                              window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`, '_blank');
                            }}
                            className="admin-action-btn"
                            title="Open WhatsApp Chat"
                          >
                            <MessageCircle size={13} color="#25D366" />
                          </button>

                          <button
                            onClick={() => setItemToDelete(item)}
                            className="admin-action-btn delete"
                            title="Delete Enquiry"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        ) : (
          /* TAB 2: APPOINTMENTS TABLE */
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>Client Contact</th>
                  <th>Appointment Time</th>
                  <th>Purpose & Focus</th>
                  <th>Special Notes</th>
                  <th>Status</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAppointments.length === 0 ? (
                  <tr>
                    <td colSpan={7} style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--admin-text-muted, #8C847A)' }}>
                      No appointment bookings found matching your filter.
                    </td>
                  </tr>
                ) : (
                  filteredAppointments.map((apt) => (
                    <tr key={apt.id}>
                      <td>
                        <span style={{ color: 'var(--gold-primary)', fontWeight: 600 }}>
                          {apt.id}
                        </span>
                      </td>
                      <td>
                        <strong style={{ color: 'var(--admin-text-main, #FAF8F5)' }}>{apt.customerName}</strong>
                        <div style={{ fontSize: '0.76rem', color: 'var(--admin-text-sub, #AAA196)' }}>{apt.phone}</div>
                        {apt.email && (
                          <div style={{ fontSize: '0.72rem', color: 'var(--admin-text-muted, #736B63)' }}>{apt.email}</div>
                        )}
                      </td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gold-primary)', fontWeight: 600 }}>
                          <Calendar size={13} />
                          <span>{apt.date}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', color: 'var(--admin-text-muted, #8C847A)', marginTop: '2px' }}>
                          <Clock size={12} />
                          <span>{apt.time}</span>
                        </div>
                      </td>
                      <td>
                        <div style={{ color: 'var(--admin-text-main, #FAF8F5)', fontWeight: 500 }}>{apt.purpose}</div>
                      </td>
                      <td style={{ maxWidth: '240px' }}>
                        <p style={{ fontSize: '0.8rem', color: 'var(--admin-text-sub, #AAA196)', margin: 0 }}>
                          {apt.notes || '—'}
                        </p>
                      </td>
                      <td>
                        <select
                          value={apt.status}
                          onChange={(e) => updateAppointmentStatus(apt.id, e.target.value)}
                          className="status-select"
                        >
                          {appointmentStatuses.map((st) => (
                            <option key={st} value={st}>{st}</option>
                          ))}
                        </select>
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                          <button
                            onClick={() => handleOpenView(apt)}
                            className="admin-action-btn"
                            title="View Appointment"
                          >
                            <Eye size={13} />
                          </button>

                          <button
                            onClick={() => {
                              const cleanPhone = (apt.phone || '').replace(/[^0-9]/g, '');
                              const text = `Hello ${apt.customerName}, this is Lax360 Haute Joaillerie confirming your private salon reservation on ${apt.date} at ${apt.time} for "${apt.purpose}". We look forward to welcoming you to our VIP lounge.`;
                              window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`, '_blank');
                            }}
                            className="admin-action-btn"
                            title="Send WhatsApp Confirmation"
                          >
                            <MessageCircle size={13} color="#25D366" />
                          </button>

                          <button
                            onClick={() => setItemToDelete(apt)}
                            className="admin-action-btn delete"
                            title="Cancel & Delete"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* VIEW DETAILS MODAL */}
      {isViewModalOpen && selectedItem && (
        <div className="admin-modal-backdrop" onClick={() => setIsViewModalOpen(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '560px' }}>
            <div className="admin-modal-header">
              <h3 className="admin-modal-title">
                {activeSubTab === 'enquiries' ? 'Client Enquiry Details' : 'Salon Appointment Details'} [{selectedItem.id}]
              </h3>
              <button className="admin-modal-close" onClick={() => setIsViewModalOpen(false)}>
                <X size={18} />
              </button>
            </div>
            <div className="admin-modal-body">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                <div style={{ background: 'var(--admin-surface-2, #181614)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.15))' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--admin-text-muted, #8C847A)', textTransform: 'uppercase' }}>Client Name</div>
                  <div style={{ fontWeight: 600, color: 'var(--admin-text-main, #FAF8F5)', marginTop: '2px' }}>{selectedItem.customerName}</div>
                </div>

                <div style={{ background: 'var(--admin-surface-2, #181614)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.15))' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--admin-text-muted, #8C847A)', textTransform: 'uppercase' }}>Phone & WhatsApp</div>
                  <div style={{ fontWeight: 600, color: 'var(--gold-primary)', marginTop: '2px' }}>{selectedItem.phone}</div>
                </div>

                <div style={{ background: 'var(--admin-surface-2, #181614)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.15))' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--admin-text-muted, #8C847A)', textTransform: 'uppercase' }}>Email</div>
                  <div style={{ fontWeight: 500, color: 'var(--admin-text-sub, #AAA196)', marginTop: '2px' }}>{selectedItem.email || '—'}</div>
                </div>

                <div style={{ background: 'var(--admin-surface-2, #181614)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.15))' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--admin-text-muted, #8C847A)', textTransform: 'uppercase' }}>Current Status</div>
                  <div style={{ fontWeight: 600, color: 'var(--gold-primary)', marginTop: '2px' }}>{selectedItem.status}</div>
                </div>
              </div>

              {activeSubTab === 'enquiries' ? (
                <>
                  <div style={{ background: 'var(--admin-surface-2, #181614)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.15))', marginBottom: '12px' }}>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 600, marginBottom: '4px' }}>Piece / Topic of Interest</div>
                    <div style={{ fontWeight: 500, color: 'var(--admin-text-main, #FAF8F5)' }}>{selectedItem.designName || 'General Enquiry'}</div>
                    {selectedItem.designCode && <div style={{ fontSize: '0.76rem', color: 'var(--admin-text-muted, #8C847A)' }}>Code: {selectedItem.designCode}</div>}
                  </div>

                  <div style={{ background: 'var(--admin-surface-2, #181614)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.15))' }}>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--admin-text-muted, #8C847A)', marginBottom: '4px' }}>Client Message</div>
                    <p style={{ fontSize: '0.86rem', color: 'var(--admin-text-sub)', margin: 0, lineHeight: 1.6 }}>
                      {selectedItem.message || 'No additional note provided.'}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ background: 'var(--admin-surface-2, #181614)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.15))', marginBottom: '12px' }}>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 600, marginBottom: '4px' }}>Schedule & Consultation Focus</div>
                    <div style={{ fontWeight: 600, color: 'var(--admin-text-main, #FAF8F5)' }}>{selectedItem.purpose}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--gold-primary)', marginTop: '4px' }}>
                      {selectedItem.date} at {selectedItem.time}
                    </div>
                  </div>

                  <div style={{ background: 'var(--admin-surface-2, #181614)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.15))' }}>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--admin-text-muted, #8C847A)', marginBottom: '4px' }}>Visiting Notes</div>
                    <p style={{ fontSize: '0.86rem', color: 'var(--admin-text-sub)', margin: 0, lineHeight: 1.6 }}>
                      {selectedItem.notes || 'Standard lounge appointment.'}
                    </p>
                  </div>
                </>
              )}
            </div>
            <div className="admin-modal-footer">
              <button type="button" className="btn btn-outline btn-sm" onClick={() => setIsViewModalOpen(false)}>
                Close
              </button>
              <button
                type="button"
                className="btn btn-gold btn-sm"
                onClick={() => {
                  const cleanPhone = (selectedItem.phone || '').replace(/[^0-9]/g, '');
                  const text = activeSubTab === 'enquiries'
                    ? `Hello ${selectedItem.customerName}, this is Lax360 Haute Joaillerie regarding your enquiry on ${selectedItem.designName || 'our pieces'}.`
                    : `Hello ${selectedItem.customerName}, this is Lax360 Haute Joaillerie regarding your appointment on ${selectedItem.date}.`;
                  window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`, '_blank');
                }}
              >
                <MessageCircle size={14} style={{ marginRight: '6px' }} />
                Open WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      {/* RECORD ENQUIRY MODAL */}
      {isAddEnquiryOpen && (
        <div className="admin-modal-backdrop" onClick={() => setIsAddEnquiryOpen(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '580px' }}>
            <div className="admin-modal-header">
              <h3 className="admin-modal-title">Record Client Enquiry</h3>
              <button className="admin-modal-close" onClick={() => setIsAddEnquiryOpen(false)}>
                <X size={18} />
              </button>
            </div>
            <form onSubmit={handleCreateEnquiry}>
              <div className="admin-modal-body">
                <div className="admin-form-row">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Client Name *</label>
                    <input
                      type="text"
                      required
                      className="admin-form-input"
                      value={enquiryForm.customerName}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, customerName: e.target.value })}
                      placeholder="e.g. Ananya Singhania"
                    />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-form-label">Phone Number *</label>
                    <input
                      type="text"
                      required
                      className="admin-form-input"
                      value={enquiryForm.phone}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                      placeholder="+91 98200 55667"
                    />
                  </div>
                </div>

                <div className="admin-form-row">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Email Address</label>
                    <input
                      type="email"
                      className="admin-form-input"
                      value={enquiryForm.email}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                      placeholder="client@gmail.com"
                    />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-form-label">Design Name / SKU</label>
                    <input
                      type="text"
                      className="admin-form-input"
                      value={enquiryForm.designName}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, designName: e.target.value })}
                      placeholder="e.g. Royal Noor-E Bridal Choker"
                    />
                  </div>
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Client Message / Enquiry Notes</label>
                  <textarea
                    rows={3}
                    className="admin-form-textarea"
                    value={enquiryForm.message}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                    placeholder="Inquired about 22KT gold pricing, diamond certification, or delivery date..."
                  />
                </div>
              </div>
              <div className="admin-modal-footer">
                <button type="button" className="btn btn-outline btn-sm" onClick={() => setIsAddEnquiryOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-gold btn-sm">
                  <Check size={14} style={{ marginRight: '6px' }} />
                  Save Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* BOOK APPOINTMENT MODAL */}
      {isAddAppointmentOpen && (
        <div className="admin-modal-backdrop" onClick={() => setIsAddAppointmentOpen(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '580px' }}>
            <div className="admin-modal-header">
              <h3 className="admin-modal-title">Book VIP Salon Appointment</h3>
              <button className="admin-modal-close" onClick={() => setIsAddAppointmentOpen(false)}>
                <X size={18} />
              </button>
            </div>
            <form onSubmit={handleCreateAppointment}>
              <div className="admin-modal-body">
                <div className="admin-form-row">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Client Name *</label>
                    <input
                      type="text"
                      required
                      className="admin-form-input"
                      value={appointmentForm.customerName}
                      onChange={(e) => setAppointmentForm({ ...appointmentForm, customerName: e.target.value })}
                      placeholder="e.g. Devendra Birla"
                    />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-form-label">Phone Number *</label>
                    <input
                      type="text"
                      required
                      className="admin-form-input"
                      value={appointmentForm.phone}
                      onChange={(e) => setAppointmentForm({ ...appointmentForm, phone: e.target.value })}
                      placeholder="+91 98200 88990"
                    />
                  </div>
                </div>

                <div className="admin-form-row">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Appointment Date</label>
                    <input
                      type="date"
                      className="admin-form-input"
                      value={appointmentForm.date}
                      onChange={(e) => setAppointmentForm({ ...appointmentForm, date: e.target.value })}
                    />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-form-label">Preferred Time</label>
                    <input
                      type="text"
                      className="admin-form-input"
                      value={appointmentForm.time}
                      onChange={(e) => setAppointmentForm({ ...appointmentForm, time: e.target.value })}
                      placeholder="e.g. 03:30 PM"
                    />
                  </div>
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Consultation Purpose</label>
                  <input
                    type="text"
                    className="admin-form-input"
                    value={appointmentForm.purpose}
                    onChange={(e) => setAppointmentForm({ ...appointmentForm, purpose: e.target.value })}
                    placeholder="e.g. Bridal Jewellery Trousseau Suite"
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Visiting Notes</label>
                  <textarea
                    rows={2}
                    className="admin-form-textarea"
                    value={appointmentForm.notes}
                    onChange={(e) => setAppointmentForm({ ...appointmentForm, notes: e.target.value })}
                    placeholder="Number of guests, private vault suite preference..."
                  />
                </div>
              </div>
              <div className="admin-modal-footer">
                <button type="button" className="btn btn-outline btn-sm" onClick={() => setIsAddAppointmentOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-gold btn-sm">
                  <Check size={14} style={{ marginRight: '6px' }} />
                  Confirm Reservation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION MODAL */}
      {itemToDelete && (
        <div className="admin-modal-backdrop" onClick={() => setItemToDelete(null)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '420px' }}>
            <div className="admin-modal-header">
              <h3 className="admin-modal-title" style={{ color: '#EF4444', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AlertTriangle size={18} />
                Delete Record
              </h3>
              <button className="admin-modal-close" onClick={() => setItemToDelete(null)}>
                <X size={18} />
              </button>
            </div>
            <div className="admin-modal-body">
              <p style={{ color: 'var(--admin-text-main, #FAF8F5)', fontSize: '0.92rem', marginBottom: '8px' }}>
                Permanently delete record <strong>{itemToDelete.id}</strong> ({itemToDelete.customerName})?
              </p>
              <p style={{ color: 'var(--admin-text-muted, #8C847A)', fontSize: '0.8rem', margin: 0 }}>
                This action cannot be undone.
              </p>
            </div>
            <div className="admin-modal-footer">
              <button type="button" className="btn btn-outline btn-sm" onClick={() => setItemToDelete(null)}>
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-sm"
                style={{ background: '#DC2626', color: '#FFF' }}
                onClick={handleConfirmDelete}
              >
                Delete Record
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
