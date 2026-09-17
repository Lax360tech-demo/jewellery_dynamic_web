import React, { useState } from 'react';
import {
  Plus,
  Edit2,
  Trash2,
  ArrowUp,
  ArrowDown,
  Check,
  X,
  Layers,
  Image as ImageIcon
} from 'lucide-react';
import { useJewellery } from '../context/JewelleryContext';

export const CollectionsManagement = () => {
  const {
    collections,
    addCollection,
    updateCollection,
    toggleCollectionActive
  } = useJewellery();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCollection, setEditingCollection] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    tagline: '',
    description: '',
    image: '',
    itemCount: '20 Designs',
    featured: false
  });

  const handleOpenAdd = () => {
    setEditingCollection(null);
    setFormData({
      title: '',
      tagline: '',
      description: '',
      image: '/images/design-aur-bc101.jpg',
      itemCount: '24 Designs',
      featured: false
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (col) => {
    setEditingCollection(col);
    setFormData({
      title: col.title,
      tagline: col.tagline,
      description: col.description,
      image: col.image,
      itemCount: col.itemCount,
      featured: col.featured || false
    });
    setIsModalOpen(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!formData.title) return;

    if (editingCollection) {
      updateCollection(editingCollection.id, formData);
    } else {
      addCollection(formData);
    }

    setIsModalOpen(false);
  };

  return (
    <div className="admin-collections-tab">
      <div className="admin-card">
        <div className="admin-card-header">
          <div>
            <h3 className="admin-card-title">Collections Management</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--admin-text-muted)', marginTop: '2px' }}>
              Manage public boutique category suites, imagery, and visibility
            </p>
          </div>
          <button onClick={handleOpenAdd} className="btn btn-gold btn-sm">
            <Plus size={15} />
            <span>Add New Collection</span>
          </button>
        </div>

        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Collection Title</th>
                <th>Tagline & Description</th>
                <th>Designs Count</th>
                <th>Featured</th>
                <th>Status</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {collections.map((col) => (
                <tr key={col.id}>
                  <td>
                    <img
                      src={col.image}
                      alt={col.title}
                      className="admin-table-thumb"
                    />
                  </td>
                  <td>
                    <strong style={{ color: 'var(--admin-text-main)' }}>{col.title}</strong>
                    <div style={{ fontSize: '0.72rem', color: 'var(--admin-text-muted)' }}>ID: {col.id}</div>
                  </td>
                  <td style={{ maxWidth: '280px' }}>
                    <div style={{ color: 'var(--admin-gold-text)', fontSize: '0.76rem', fontWeight: 600 }}>
                      {col.tagline}
                    </div>
                    <div style={{
                      fontSize: '0.78rem',
                      color: 'var(--admin-text-sub)',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}>
                      {col.description}
                    </div>
                  </td>
                  <td style={{ color: 'var(--admin-text-main)' }}>{col.itemCount}</td>
                  <td>
                    <span style={{
                      fontSize: '0.74rem',
                      color: col.featured ? 'var(--admin-gold-text)' : 'var(--admin-text-muted)',
                      fontWeight: col.featured ? 600 : 400
                    }}>
                      {col.featured ? 'Yes' : 'No'}
                    </span>
                  </td>
                  <td>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={col.active !== false}
                        onChange={() => toggleCollectionActive(col.id)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <button
                      onClick={() => handleOpenEdit(col)}
                      className="admin-action-btn"
                      title="Edit Collection"
                    >
                      <Edit2 size={13} />
                      <span>Edit</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Collection Modal */}
      {isModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div
            className="modal-dialog"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            style={{ maxWidth: '540px' }}
          >
            <div className="modal-header">
              <h3 className="modal-header-title">
                {editingCollection ? 'Edit Collection' : 'Create New Collection'}
              </h3>
              <button
                className="modal-close-btn"
                onClick={() => setIsModalOpen(false)}
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSave} className="modal-body">
              <div className="form-group">
                <label className="form-label">Collection Title *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. Royal Polki Suites"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Tagline</label>
                <input
                  type="text"
                  value={formData.tagline}
                  onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                  placeholder="e.g. Authentic Mughal Kundan Heritage"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea
                  rows="3"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Short romantic storytelling description..."
                  className="form-textarea"
                />
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Item Count Label</label>
                  <input
                    type="text"
                    value={formData.itemCount}
                    onChange={(e) => setFormData({ ...formData, itemCount: e.target.value })}
                    placeholder="e.g. 35 Designs"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Show on Homepage</label>
                  <select
                    value={formData.featured ? 'yes' : 'no'}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.value === 'yes' })}
                    className="form-select"
                  >
                    <option value="yes">Yes, Feature on Home</option>
                    <option value="no">No, Only in Catalogue</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Image URL</label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://..."
                  className="form-input"
                />
                {formData.image && (
                  <div style={{ marginTop: '10px' }}>
                    <img
                      src={formData.image}
                      alt="Preview"
                      style={{ height: '80px', borderRadius: 'var(--radius-sm)', objectFit: 'cover' }}
                    />
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn btn-outline-gold btn-sm"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-gold btn-sm">
                  {editingCollection ? 'Save Changes' : 'Create Collection'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
