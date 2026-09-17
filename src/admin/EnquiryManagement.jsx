import React, { useState } from 'react';
import { MessageSquare, Phone, Mail, Search, MessageCircle, Calendar } from 'lucide-react';
import { useJewellery } from '../context/JewelleryContext';

export const EnquiryManagement = () => {
  const { enquiries, updateEnquiryStatus } = useJewellery();
  const [filterStatus, setFilterStatus] = useState('all');
  const [search, setSearch] = useState('');

  const statuses = ['New', 'Contacted', 'Follow-up', 'Completed'];

  const filteredEnquiries = enquiries.filter((item) => {
    const matchesStatus = filterStatus === 'all' || item.status === filterStatus;
    const query = search.toLowerCase().trim();
    const matchesQuery =
      !query ||
      item.customerName.toLowerCase().includes(query) ||
      item.phone.includes(query) ||
      item.designName.toLowerCase().includes(query) ||
      item.id.toLowerCase().includes(query);
    return matchesStatus && matchesQuery;
  });

  return (
    <div className="admin-enquiries-tab">
      <div className="admin-card">
        <div className="admin-card-header">
          <div>
            <h3 className="admin-card-title">Client Enquiries Management</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--admin-text-muted)', marginTop: '2px' }}>
              Track customer enquiries, update follow-up statuses, and dispatch WhatsApp responses ({enquiries.length} total)
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
                <th>Ref ID</th>
                <th>Client Name</th>
                <th>Design / Subject</th>
                <th>Message & Notes</th>
                <th>Date</th>
                <th>Status Action</th>
                <th style={{ textAlign: 'right' }}>Direct Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredEnquiries.map((enq) => (
                <tr key={enq.id}>
                  <td>
                    <span style={{ color: 'var(--gold-primary)', fontWeight: 600 }}>
                      {enq.id}
                    </span>
                  </td>
                  <td>
                    <strong style={{ color: 'var(--admin-text-main)' }}>{enq.customerName}</strong>
                    <div style={{ fontSize: '0.76rem', color: 'var(--admin-text-sub)' }}>{enq.phone}</div>
                    {enq.email && (
                      <div style={{ fontSize: '0.72rem', color: 'var(--admin-text-muted)' }}>{enq.email}</div>
                    )}
                  </td>
                  <td>
                    <div style={{ color: 'var(--admin-text-main)', fontWeight: 500 }}>{enq.designName}</div>
                    <span style={{ fontSize: '0.74rem', color: 'var(--gold-primary)' }}>
                      {enq.designCode}
                    </span>
                  </td>
                  <td style={{ maxWidth: '280px' }}>
                    <p style={{
                      fontSize: '0.82rem',
                      color: 'var(--admin-text-sub)',
                      lineHeight: 1.5,
                      margin: 0
                    }}>
                      "{enq.message}"
                    </p>
                  </td>
                  <td style={{ whiteSpace: 'nowrap' }}>{enq.date}</td>
                  <td>
                    <select
                      value={enq.status}
                      onChange={(e) => updateEnquiryStatus(enq.id, e.target.value)}
                      className="status-select"
                      style={{
                        borderColor:
                          enq.status === 'New'
                            ? 'var(--gold-primary)'
                            : enq.status === 'Completed'
                            ? '#22C55E'
                            : 'rgba(197, 168, 105, 0.3)'
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
                        const cleanPhone = enq.phone.replace(/[^0-9]/g, '');
                        const text = `Hello ${enq.customerName}, this is AURELIA Concierge regarding your enquiry for ${enq.designName} [Ref: ${enq.id}]. How may we assist you today?`;
                        window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`, '_blank');
                      }}
                      className="admin-action-btn"
                      title="Reply via WhatsApp"
                    >
                      <MessageCircle size={14} color="#25D366" />
                      <span>WhatsApp</span>
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
