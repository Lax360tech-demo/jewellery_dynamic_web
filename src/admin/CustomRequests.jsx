import React, { useState } from 'react';
import {
  Sparkles,
  Image as ImageIcon,
  Search,
  MessageCircle,
  X,
  ExternalLink,
  Eye,
  Plus,
  Trash2,
  Check,
  AlertTriangle,
  User,
  Phone,
  Mail,
  Calendar,
  DollarSign
} from 'lucide-react';
import { useJewellery } from '../context/JewelleryContext';

export const CustomRequests = () => {
  const {
    customRequests,
    addCustomRequest,
    updateCustomRequestStatus,
    deleteCustomRequest
  } = useJewellery();

  const [filterStatus, setFilterStatus] = useState('all');
  const [search, setSearch] = useState('');
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [requestToDelete, setRequestToDelete] = useState(null);

  const statuses = ['New', 'Under Review', 'Quote Sent', 'Completed', 'Cancelled'];

  const [newFormData, setNewFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    jewelleryType: 'Necklace',
    metalPreference: '22KT Yellow Gold',
    budgetRange: '₹2,00,000 - ₹5,00,000',
    designRequirement: '',
    description: '',
    referenceImage: ''
  });

  const filteredRequests = customRequests.filter((item) => {
    const matchesStatus = filterStatus === 'all' || item.status === filterStatus;
    const query = search.toLowerCase().trim();
    const matchesQuery =
      !query ||
      item.customerName?.toLowerCase().includes(query) ||
      item.phone?.includes(query) ||
      item.jewelleryType?.toLowerCase().includes(query) ||
      item.designRequirement?.toLowerCase().includes(query) ||
      item.id?.toLowerCase().includes(query);
    return matchesStatus && matchesQuery;
  });

  const handleOpenAdd = () => {
    setNewFormData({
      customerName: '',
      phone: '',
      email: '',
      jewelleryType: 'Bridal Set',
      metalPreference: '22KT Yellow Gold',
      budgetRange: '₹3,00,000 - ₹6,00,000',
      designRequirement: 'Traditional Peacock Jadau Haar with Emerald droplets',
      description: 'Client requesting heavy heirloom piece for wedding reception in November.',
      referenceImage: '/images/design-aur-bc101.jpg'
    });
    setIsAddModalOpen(true);
  };

  const handleCreateRequest = (e) => {
    e.preventDefault();
    if (!newFormData.customerName.trim() || !newFormData.phone.trim()) {
      alert('Please provide client name and phone number.');
      return;
    }
    addCustomRequest(newFormData);
    setIsAddModalOpen(false);
  };

  const handleOpenView = (req) => {
    setSelectedRequest(req);
    setIsViewModalOpen(true);
  };

  const handleOpenDelete = (req) => {
    setRequestToDelete(req);
  };

  const confirmDelete = () => {
    if (requestToDelete) {
      deleteCustomRequest(requestToDelete.id);
      setRequestToDelete(null);
      if (selectedRequest?.id === requestToDelete.id) {
        setIsViewModalOpen(false);
      }
    }
  };

  return (
    <div className="admin-custom-requests-tab">
      <div className="admin-card">
        <div className="admin-card-header">
          <div>
            <h3 className="admin-card-title">Custom Jewellery Commissions</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--admin-text-muted)', marginTop: '2px' }}>
              Review bespoke design inquiries, reference sketches, budgets, and quotation status ({customRequests.length} total)
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <div className="admin-search-box">
              <Search size={14} className="admin-search-icon" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name, phone, type..."
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

            <button onClick={handleOpenAdd} className="btn btn-gold btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Plus size={15} />
              <span>Record Commission</span>
            </button>
          </div>
        </div>

        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Commission ID</th>
                <th>Client Details</th>
                <th>Type & Budget</th>
                <th>Design Requirement</th>
                <th>Reference Image</th>
                <th>Date</th>
                <th>Status</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.length === 0 ? (
                <tr>
                  <td colSpan={8} style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--admin-text-muted)' }}>
                    No bespoke commission requests found.
                  </td>
                </tr>
              ) : (
                filteredRequests.map((req) => (
                  <tr key={req.id}>
                    <td>
                      <span style={{ color: 'var(--admin-gold-text)', fontWeight: 600 }}>
                        {req.id}
                      </span>
                    </td>
                    <td>
                      <strong style={{ color: 'var(--admin-text-main)' }}>{req.customerName}</strong>
                      <div style={{ fontSize: '0.76rem', color: 'var(--admin-text-sub)' }}>{req.phone}</div>
                      {req.email && (
                        <div style={{ fontSize: '0.72rem', color: 'var(--admin-text-muted)' }}>{req.email}</div>
                      )}
                    </td>
                    <td>
                      <div style={{ color: 'var(--admin-text-main)', fontWeight: 600 }}>{req.jewelleryType}</div>
                      <span style={{ fontSize: '0.74rem', color: 'var(--admin-gold-text)' }}>
                        {req.budgetRange || 'Flexible'}
                      </span>
                    </td>
                    <td style={{ maxWidth: '240px' }}>
                      <strong style={{ color: 'var(--admin-text-main)', fontSize: '0.84rem' }}>
                        {req.designRequirement}
                      </strong>
                      {req.description && (
                        <div style={{
                          fontSize: '0.76rem',
                          color: 'var(--admin-text-sub)',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          marginTop: '3px'
                        }}>
                          {req.description}
                        </div>
                      )}
                    </td>
                    <td>
                      {req.referenceImage ? (
                        <button
                          type="button"
                          onClick={() => setPreviewImage(req.referenceImage)}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'block'
                          }}
                          title="Click to view full reference"
                        >
                          <img
                            src={req.referenceImage}
                            alt="Reference preview"
                            className="admin-table-thumb"
                            style={{ borderColor: 'var(--gold-primary)' }}
                            onError={(e) => {
                              e.target.src = 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300';
                            }}
                          />
                        </button>
                      ) : (
                        <span style={{ fontSize: '0.74rem', color: 'var(--admin-text-muted, #736B63)' }}>No image</span>
                      )}
                    </td>
                    <td style={{ whiteSpace: 'nowrap' }}>{req.date}</td>
                    <td>
                      <select
                        value={req.status}
                        onChange={(e) => updateCustomRequestStatus(req.id, e.target.value)}
                        className="status-select"
                      >
                        {statuses.map((st) => (
                          <option key={st} value={st}>{st}</option>
                        ))}
                      </select>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <button
                          onClick={() => handleOpenView(req)}
                          className="admin-action-btn"
                          title="View Full Details"
                        >
                          <Eye size={13} />
                        </button>

                        <button
                          onClick={() => {
                            const cleanPhone = (req.phone || '').replace(/[^0-9]/g, '');
                            const text = `Hello ${req.customerName}, this is Lax360 Haute Joaillerie Atelier regarding your custom ${req.jewelleryType} commission [Ref: ${req.id}]. Our master goldsmith has prepared an estimate for "${req.designRequirement}". May we share the design render?`;
                            window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`, '_blank');
                          }}
                          className="admin-action-btn"
                          title="Send WhatsApp Quote"
                        >
                          <MessageCircle size={13} color="#25D366" />
                        </button>

                        <button
                          onClick={() => handleOpenDelete(req)}
                          className="admin-action-btn delete"
                          title="Delete Request"
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
      </div>

      {/* VIEW DETAILS MODAL */}
      {isViewModalOpen && selectedRequest && (
        <div className="admin-modal-backdrop" onClick={() => setIsViewModalOpen(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
            <div className="admin-modal-header">
              <h3 className="admin-modal-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={17} color="var(--gold-primary)" />
                Bespoke Commission [{selectedRequest.id}]
              </h3>
              <button className="admin-modal-close" onClick={() => setIsViewModalOpen(false)}>
                <X size={18} />
              </button>
            </div>
            <div className="admin-modal-body">
              {/* Reference Image Banner */}
              {selectedRequest.referenceImage && (
                <div style={{ maxHeight: '240px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '18px', border: '1px solid rgba(197, 168, 105, 0.3)', background: '#000', textAlign: 'center' }}>
                  <img
                    src={selectedRequest.referenceImage}
                    alt="Reference"
                    style={{ maxHeight: '240px', maxWidth: '100%', objectFit: 'contain' }}
                  />
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '16px' }}>
                <div style={{ background: 'var(--admin-surface-2, #181614)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.15))' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--admin-text-muted, #8C847A)', textTransform: 'uppercase' }}>Client Name</div>
                  <div style={{ fontWeight: 600, color: 'var(--admin-text-main, #FAF8F5)', marginTop: '2px' }}>{selectedRequest.customerName}</div>
                </div>

                <div style={{ background: 'var(--admin-surface-2, #181614)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.15))' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--admin-text-muted, #8C847A)', textTransform: 'uppercase' }}>Contact Info</div>
                  <div style={{ fontWeight: 600, color: 'var(--gold-primary)', marginTop: '2px' }}>{selectedRequest.phone}</div>
                  {selectedRequest.email && <div style={{ fontSize: '0.74rem', color: 'var(--admin-text-sub, #AAA196)' }}>{selectedRequest.email}</div>}
                </div>

                <div style={{ background: 'var(--admin-surface-2, #181614)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.15))' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--admin-text-muted, #8C847A)', textTransform: 'uppercase' }}>Jewellery Type & Budget</div>
                  <div style={{ fontWeight: 600, color: 'var(--admin-text-main, #FAF8F5)', marginTop: '2px' }}>{selectedRequest.jewelleryType}</div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--gold-primary)' }}>{selectedRequest.budgetRange || 'Flexible'}</div>
                </div>

                <div style={{ background: 'var(--admin-surface-2, #181614)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.15))' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--admin-text-muted, #8C847A)', textTransform: 'uppercase' }}>Submission Date & Status</div>
                  <div style={{ fontWeight: 600, color: 'var(--admin-text-main, #FAF8F5)', marginTop: '2px' }}>{selectedRequest.date || 'Recent'}</div>
                  <span className="status-badge new" style={{ marginTop: '4px' }}>{selectedRequest.status}</span>
                </div>
              </div>

              <div style={{ background: 'var(--admin-surface-2, #181614)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.15))', marginBottom: '12px' }}>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 600, marginBottom: '4px' }}>Design Requirement</div>
                <p style={{ fontSize: '0.88rem', color: 'var(--admin-text-main, #FAF8F5)', fontWeight: 500, margin: 0 }}>{selectedRequest.designRequirement}</p>
              </div>

              {selectedRequest.description && (
                <div style={{ background: 'var(--admin-surface-2, #181614)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.15))' }}>
                  <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--admin-text-muted, #8C847A)', marginBottom: '4px' }}>Additional Specifications / Notes</div>
                  <p style={{ fontSize: '0.86rem', color: 'var(--admin-text-sub)', margin: 0, lineHeight: 1.6 }}>{selectedRequest.description}</p>
                </div>
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
                  const cleanPhone = (selectedRequest.phone || '').replace(/[^0-9]/g, '');
                  const text = `Hello ${selectedRequest.customerName}, this is Lax360 Haute Joaillerie Atelier regarding your custom ${selectedRequest.jewelleryType} commission [Ref: ${selectedRequest.id}].`;
                  window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`, '_blank');
                }}
              >
                <MessageCircle size={14} style={{ marginRight: '6px' }} />
                Open WhatsApp Chat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ADD COMMISSION MODAL */}
      {isAddModalOpen && (
        <div className="admin-modal-backdrop" onClick={() => setIsAddModalOpen(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
            <div className="admin-modal-header">
              <h3 className="admin-modal-title">Record Bespoke Jewellery Request</h3>
              <button className="admin-modal-close" onClick={() => setIsAddModalOpen(false)}>
                <X size={18} />
              </button>
            </div>
            <form onSubmit={handleCreateRequest}>
              <div className="admin-modal-body">
                <div className="admin-form-row">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Customer Name *</label>
                    <input
                      type="text"
                      required
                      className="admin-form-input"
                      value={newFormData.customerName}
                      onChange={(e) => setNewFormData({ ...newFormData, customerName: e.target.value })}
                      placeholder="e.g. Radhika Merchant"
                    />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-form-label">Phone Number *</label>
                    <input
                      type="text"
                      required
                      className="admin-form-input"
                      value={newFormData.phone}
                      onChange={(e) => setNewFormData({ ...newFormData, phone: e.target.value })}
                      placeholder="+91 98200 12345"
                    />
                  </div>
                </div>

                <div className="admin-form-row">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Email Address</label>
                    <input
                      type="email"
                      className="admin-form-input"
                      value={newFormData.email}
                      onChange={(e) => setNewFormData({ ...newFormData, email: e.target.value })}
                      placeholder="client@domain.com"
                    />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-form-label">Jewellery Type</label>
                    <input
                      type="text"
                      className="admin-form-input"
                      value={newFormData.jewelleryType}
                      onChange={(e) => setNewFormData({ ...newFormData, jewelleryType: e.target.value })}
                      placeholder="e.g. Bridal Choker, Kada, Ring"
                    />
                  </div>
                </div>

                <div className="admin-form-row">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Budget Range</label>
                    <input
                      type="text"
                      className="admin-form-input"
                      value={newFormData.budgetRange}
                      onChange={(e) => setNewFormData({ ...newFormData, budgetRange: e.target.value })}
                      placeholder="e.g. ₹2,00,000 - ₹5,00,000"
                    />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-form-label">Reference Image URL</label>
                    <input
                      type="text"
                      className="admin-form-input"
                      value={newFormData.referenceImage}
                      onChange={(e) => setNewFormData({ ...newFormData, referenceImage: e.target.value })}
                      placeholder="/images/design-aur-bc101.jpg or https://..."
                    />
                  </div>
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Design Requirement Summary *</label>
                  <input
                    type="text"
                    required
                    className="admin-form-input"
                    value={newFormData.designRequirement}
                    onChange={(e) => setNewFormData({ ...newFormData, designRequirement: e.target.value })}
                    placeholder="e.g. Uncut Polki Diamonds with Basra Pearls and Meenakari"
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Detailed Notes</label>
                  <textarea
                    rows={3}
                    className="admin-form-textarea"
                    value={newFormData.description}
                    onChange={(e) => setNewFormData({ ...newFormData, description: e.target.value })}
                    placeholder="Specific design preferences, metal karatage, occasion date..."
                  />
                </div>
              </div>
              <div className="admin-modal-footer">
                <button type="button" className="btn btn-outline btn-sm" onClick={() => setIsAddModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-gold btn-sm">
                  <Check size={14} style={{ marginRight: '6px' }} />
                  Record Commission
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION MODAL */}
      {requestToDelete && (
        <div className="admin-modal-backdrop" onClick={() => setRequestToDelete(null)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '420px' }}>
            <div className="admin-modal-header">
              <h3 className="admin-modal-title" style={{ color: '#EF4444', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AlertTriangle size={18} />
                Delete Commission
              </h3>
              <button className="admin-modal-close" onClick={() => setRequestToDelete(null)}>
                <X size={18} />
              </button>
            </div>
            <div className="admin-modal-body">
              <p style={{ color: 'var(--admin-text-main, #FAF8F5)', fontSize: '0.92rem', marginBottom: '8px' }}>
                Delete commission request <strong>{requestToDelete.id}</strong> from {requestToDelete.customerName}?
              </p>
              <p style={{ color: 'var(--admin-text-muted, #8C847A)', fontSize: '0.8rem', margin: 0 }}>
                This action cannot be undone.
              </p>
            </div>
            <div className="admin-modal-footer">
              <button type="button" className="btn btn-outline btn-sm" onClick={() => setRequestToDelete(null)}>
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-sm"
                style={{ background: '#DC2626', color: '#FFF' }}
                onClick={confirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Image Zoom Lightbox Modal */}
      {previewImage && (
        <div className="admin-modal-backdrop" onClick={() => setPreviewImage(null)}>
          <div
            className="admin-modal"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '640px', textAlign: 'center' }}
          >
            <div className="admin-modal-header">
              <h3 className="admin-modal-title">Client Reference Image</h3>
              <button
                className="admin-modal-close"
                onClick={() => setPreviewImage(null)}
              >
                <X size={18} />
              </button>
            </div>
            <div className="admin-modal-body" style={{ padding: '20px' }}>
              <img
                src={previewImage}
                alt="Client uploaded reference"
                style={{
                  width: '100%',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                  borderRadius: 'var(--radius-sm)'
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
