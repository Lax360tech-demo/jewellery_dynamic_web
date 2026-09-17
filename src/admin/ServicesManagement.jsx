import React, { useState } from 'react';
import {
  Plus,
  Edit2,
  Trash2,
  Search,
  Eye,
  Sparkles,
  Clock,
  X,
  Check,
  AlertTriangle,
  Image as ImageIcon
} from 'lucide-react';
import { useJewellery } from '../context/JewelleryContext';

export const ServicesManagement = () => {
  const { services, addService, updateService, deleteService } = useJewellery();

  const [search, setSearch] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [serviceToEdit, setServiceToEdit] = useState(null);
  const [serviceToDelete, setServiceToDelete] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    tagline: '',
    description: '',
    turnaround: '',
    image: ''
  });

  const filteredServices = (services || []).filter((srv) => {
    const query = search.toLowerCase().trim();
    return (
      !query ||
      srv.title.toLowerCase().includes(query) ||
      srv.tagline.toLowerCase().includes(query) ||
      srv.turnaround.toLowerCase().includes(query)
    );
  });

  const handleOpenAdd = () => {
    setServiceToEdit(null);
    setFormData({
      title: '',
      tagline: '',
      description: '',
      turnaround: '2 - 3 Days',
      image: '/images/royal-heritage-story.jpg'
    });
    setIsFormModalOpen(true);
  };

  const handleOpenEdit = (srv) => {
    setServiceToEdit(srv);
    setFormData({
      title: srv.title || '',
      tagline: srv.tagline || '',
      description: srv.description || '',
      turnaround: srv.turnaround || '',
      image: srv.image || ''
    });
    setIsFormModalOpen(true);
  };

  const handleOpenView = (srv) => {
    setSelectedService(srv);
    setIsViewModalOpen(true);
  };

  const handleOpenDelete = (srv) => {
    setServiceToDelete(srv);
    setIsDeleteModalOpen(true);
  };

  const handleSaveForm = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert('Please enter a service title.');
      return;
    }

    if (serviceToEdit) {
      updateService(serviceToEdit.id, formData);
    } else {
      addService(formData);
    }
    setIsFormModalOpen(false);
  };

  const confirmDelete = () => {
    if (serviceToDelete) {
      deleteService(serviceToDelete.id);
      setIsDeleteModalOpen(false);
      setServiceToDelete(null);
    }
  };

  return (
    <div className="admin-services-tab">
      <div className="admin-card">
        {/* Header Bar */}
        <div className="admin-card-header">
          <div>
            <h3 className="admin-card-title">Maison Services & Care Management</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--admin-text-muted, #8C847A)', marginTop: '2px' }}>
              Manage atelier, repair, cleaning, valuation, and custom craftsmanship offerings ({services?.length || 0} total)
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <div className="admin-search-box">
              <Search size={14} className="admin-search-icon" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search services..."
                className="admin-search-input"
              />
            </div>

            {/* Add Service Button */}
            <button onClick={handleOpenAdd} className="btn btn-gold btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Plus size={15} />
              <span>Add New Service</span>
            </button>
          </div>
        </div>

        {/* Services Table */}
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th style={{ width: '80px' }}>Preview</th>
                <th>Service Title & Tagline</th>
                <th>Turnaround Time</th>
                <th>Description</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredServices.length === 0 ? (
                <tr>
                  <td colSpan={5} style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--admin-text-muted, #8C847A)' }}>
                    No services found matching your criteria.
                  </td>
                </tr>
              ) : (
                filteredServices.map((srv) => (
                  <tr key={srv.id}>
                    <td>
                      <img
                        src={srv.image || '/images/collection-gold.webp'}
                        alt={srv.title}
                        className="admin-table-thumb"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300';
                        }}
                      />
                    </td>
                    <td>
                      <div style={{ fontWeight: 600, color: 'var(--admin-text-main, #FAF8F5)', fontSize: '0.92rem' }}>
                        {srv.title}
                      </div>
                      <div style={{ fontSize: '0.76rem', color: 'var(--gold-primary, #C5A869)', marginTop: '2px' }}>
                        {srv.tagline}
                      </div>
                    </td>
                    <td>
                      <span className="status-badge" style={{ background: 'rgba(197, 168, 105, 0.15)', color: 'var(--gold-primary)', border: '1px solid rgba(197, 168, 105, 0.3)' }}>
                        <Clock size={12} style={{ marginRight: '4px' }} />
                        {srv.turnaround || 'Upon Request'}
                      </span>
                    </td>
                    <td style={{ maxWidth: '340px' }}>
                      <p style={{
                        fontSize: '0.8rem',
                        color: 'var(--admin-text-sub, #AAA196)',
                        lineHeight: 1.5,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        margin: 0
                      }}>
                        {srv.description}
                      </p>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        <button
                          onClick={() => handleOpenView(srv)}
                          className="admin-action-btn"
                          title="View Service Details"
                        >
                          <Eye size={13} />
                          <span>View</span>
                        </button>
                        <button
                          onClick={() => handleOpenEdit(srv)}
                          className="admin-action-btn"
                          title="Edit Service"
                        >
                          <Edit2 size={13} />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => handleOpenDelete(srv)}
                          className="admin-action-btn delete"
                          title="Delete Service"
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

      {/* VIEW SERVICE MODAL */}
      {isViewModalOpen && selectedService && (
        <div className="admin-modal-backdrop" onClick={() => setIsViewModalOpen(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '560px' }}>
            <div className="admin-modal-header">
              <h3 className="admin-modal-title">Service Details</h3>
              <button className="admin-modal-close" onClick={() => setIsViewModalOpen(false)}>
                <X size={18} />
              </button>
            </div>
            <div className="admin-modal-body">
              <div style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', height: '220px', marginBottom: '18px', border: '1px solid rgba(197, 168, 105, 0.3)' }}>
                <img
                  src={selectedService.image || '/images/collection-gold.webp'}
                  alt={selectedService.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600';
                  }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--admin-text-main, #FAF8F5)', margin: 0 }}>
                  {selectedService.title}
                </h4>
                <span className="status-badge new">
                  {selectedService.turnaround}
                </span>
              </div>

              <p style={{ color: 'var(--gold-primary)', fontSize: '0.86rem', fontStyle: 'italic', marginBottom: '16px' }}>
                "{selectedService.tagline}"
              </p>

              <div style={{ background: 'var(--admin-surface-2, #181614)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.15))' }}>
                <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--admin-text-muted, #8C847A)', marginBottom: '6px' }}>
                  Full Description
                </div>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--admin-text-sub)', margin: 0 }}>
                  {selectedService.description}
                </p>
              </div>
            </div>
            <div className="admin-modal-footer">
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => setIsViewModalOpen(false)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-gold btn-sm"
                onClick={() => {
                  setIsViewModalOpen(false);
                  handleOpenEdit(selectedService);
                }}
              >
                <Edit2 size={13} style={{ marginRight: '6px' }} />
                Edit Service
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ADD / EDIT SERVICE MODAL */}
      {isFormModalOpen && (
        <div className="admin-modal-backdrop" onClick={() => setIsFormModalOpen(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
            <div className="admin-modal-header">
              <h3 className="admin-modal-title">
                {serviceToEdit ? 'Edit Service' : 'Add New Atelier Service'}
              </h3>
              <button className="admin-modal-close" onClick={() => setIsFormModalOpen(false)}>
                <X size={18} />
              </button>
            </div>
            <form onSubmit={handleSaveForm}>
              <div className="admin-modal-body">
                <div className="admin-form-group">
                  <label className="admin-form-label">Service Title *</label>
                  <input
                    type="text"
                    required
                    className="admin-form-input"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g. Bespoke Jewellery Commission"
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Tagline / Subtitle *</label>
                  <input
                    type="text"
                    required
                    className="admin-form-input"
                    value={formData.tagline}
                    onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                    placeholder="e.g. Your Vision Sculpted by Master Artisans"
                  />
                </div>

                <div className="admin-form-row">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Turnaround Time</label>
                    <input
                      type="text"
                      className="admin-form-input"
                      value={formData.turnaround}
                      onChange={(e) => setFormData({ ...formData, turnaround: e.target.value })}
                      placeholder="e.g. 3 - 5 Business Days"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Image URL</label>
                    <input
                      type="text"
                      className="admin-form-input"
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      placeholder="/images/royal-heritage-story.jpg or https://..."
                    />
                  </div>
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Detailed Description *</label>
                  <textarea
                    rows={4}
                    required
                    className="admin-form-textarea"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Detailed explanation of the artisan service, procedures, and deliverables..."
                  />
                </div>
              </div>
              <div className="admin-modal-footer">
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  onClick={() => setIsFormModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-gold btn-sm">
                  <Check size={14} style={{ marginRight: '6px' }} />
                  {serviceToEdit ? 'Save Changes' : 'Create Service'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION MODAL */}
      {isDeleteModalOpen && serviceToDelete && (
        <div className="admin-modal-backdrop" onClick={() => setIsDeleteModalOpen(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '440px' }}>
            <div className="admin-modal-header">
              <h3 className="admin-modal-title" style={{ color: '#EF4444', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AlertTriangle size={18} />
                Delete Service
              </h3>
              <button className="admin-modal-close" onClick={() => setIsDeleteModalOpen(false)}>
                <X size={18} />
              </button>
            </div>
            <div className="admin-modal-body">
              <p style={{ color: 'var(--admin-text-main, #FAF8F5)', fontSize: '0.92rem', marginBottom: '10px' }}>
                Are you sure you want to permanently delete <strong>"{serviceToDelete.title}"</strong>?
              </p>
              <p style={{ color: 'var(--admin-text-muted, #8C847A)', fontSize: '0.8rem', lineHeight: 1.5 }}>
                This will remove the service card from both the public Services page and salon catalogue.
              </p>
            </div>
            <div className="admin-modal-footer">
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-sm"
                style={{ background: '#DC2626', color: '#FFF' }}
                onClick={confirmDelete}
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
