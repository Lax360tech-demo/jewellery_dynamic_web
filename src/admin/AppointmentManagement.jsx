import React, { useState } from 'react';
import { Calendar, Clock, Phone, CheckCircle, XCircle, Search, MessageCircle } from 'lucide-react';
import { useJewellery } from '../context/JewelleryContext';

export const AppointmentManagement = () => {
  const { appointments, updateAppointmentStatus } = useJewellery();
  const [filterStatus, setFilterStatus] = useState('all');
  const [search, setSearch] = useState('');

  const statuses = ['New', 'Confirmed', 'Completed', 'Cancelled'];

  const filteredAppointments = appointments.filter((item) => {
    const matchesStatus = filterStatus === 'all' || item.status === filterStatus;
    const query = search.toLowerCase().trim();
    const matchesQuery =
      !query ||
      item.customerName.toLowerCase().includes(query) ||
      item.phone.includes(query) ||
      item.purpose.toLowerCase().includes(query) ||
      item.id.toLowerCase().includes(query);
    return matchesStatus && matchesQuery;
  });

  return (
    <div className="admin-appointments-tab">
      <div className="admin-card">
        <div className="admin-card-header">
          <div>
            <h3 className="admin-card-title">Salon Appointments Management</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--admin-text-muted)', marginTop: '2px' }}>
              Manage private lounge reservations, bridal consultations, and VIP viewings ({appointments.length} total)
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <div className="admin-search-box">
              <Search size={14} className="admin-search-icon" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name, phone, purpose..."
                className="admin-search-input"
              />
            </div>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="status-select"
            >
              <option value="all">All Statuses</option>
              {statuses.map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Client Name & Phone</th>
                <th>Scheduled Date & Time</th>
                <th>Consultation Focus</th>
                <th>Notes / Guests</th>
                <th>Status Action</th>
                <th style={{ textAlign: 'right' }}>WhatsApp Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.map((apt) => (
                <tr key={apt.id}>
                  <td>
                    <span style={{ color: 'var(--gold-primary)', fontWeight: 600 }}>
                      {apt.id}
                    </span>
                  </td>
                  <td>
                    <strong style={{ color: 'var(--admin-text-main)' }}>{apt.customerName}</strong>
                    <div style={{ fontSize: '0.76rem', color: 'var(--admin-text-sub)' }}>{apt.phone}</div>
                    {apt.email && (
                      <div style={{ fontSize: '0.72rem', color: 'var(--admin-text-muted)' }}>{apt.email}</div>
                    )}
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gold-primary)', fontWeight: 600 }}>
                      <Calendar size={13} />
                      <strong>{apt.date}</strong>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', color: 'var(--admin-text-muted)' }}>
                      <Clock size={12} />
                      {apt.time}
                    </div>
                  </td>
                  <td>
                    <span style={{ color: 'var(--admin-text-main)', fontSize: '0.84rem' }}>{apt.purpose}</span>
                  </td>
                  <td style={{ maxWidth: '240px' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--admin-text-sub)', margin: 0 }}>
                      {apt.notes || '—'}
                    </p>
                  </td>
                  <td>
                    <select
                      value={apt.status}
                      onChange={(e) => updateAppointmentStatus(apt.id, e.target.value)}
                      className="status-select"
                      style={{
                        borderColor:
                          apt.status === 'Confirmed'
                            ? '#3B82F6'
                            : apt.status === 'Completed'
                            ? '#22C55E'
                            : apt.status === 'Cancelled'
                            ? '#EF4444'
                            : 'var(--gold-primary)'
                      }}
                    >
                      {statuses.map((st) => (
                        <option key={st} value={st}>{st}</option>
                      ))}
                    </select>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <button
                      onClick={() => {
                        const cleanPhone = apt.phone.replace(/[^0-9]/g, '');
                        const text = `Hello ${apt.customerName}, confirming your private salon reservation at AURELIA Maison on ${apt.date} at ${apt.time} for "${apt.purpose}". Looking forward to welcoming you.`;
                        window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`, '_blank');
                      }}
                      className="admin-action-btn"
                      title="Send WhatsApp Confirmation"
                    >
                      <MessageCircle size={14} color="#25D366" />
                      <span>Confirm</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
