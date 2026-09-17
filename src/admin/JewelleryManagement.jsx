import React, { useState } from 'react';
import {
  Plus,
  Edit2,
  Trash2,
  Search,
  Check,
  X,
  Sparkles,
  Eye,
  AlertTriangle
} from 'lucide-react';
import { useJewellery } from '../context/JewelleryContext';

export const JewelleryManagement = () => {
  const {
    designs,
    collections,
    addDesign,
    updateDesign,
    deleteDesign,
    toggleFeatured,
    toggleNew
  } = useJewellery();

  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Modal States
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [designToEdit, setDesignToEdit] = useState(null);
  const [designToDelete, setDesignToDelete] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    category: 'gold',
    categoryLabel: 'Gold Jewellery',
    material: '',
    approxWeight: '',
    stoneDetails: '',
    shortDescription: '',
    description: '',
    images: [''],
    isFeatured: false,
    isNew: true
  });

  const handleOpenAdd = () => {
    setDesignToEdit(null);
    setFormData({
      name: '',
      code: `AUR-GN${Math.floor(100 + Math.random() * 900)}`,
      category: 'gold',
      categoryLabel: 'Gold Jewellery',
      material: '22KT Yellow Gold (BIS 916)',
      approxWeight: '38.50 gms',
      stoneDetails: 'Natural Untreated Rubies & South Sea Pearls',
      shortDescription: 'Handcrafted heritage masterwork with intricate gold repoussé detailing.',
      description: 'Sculpted by master goldsmiths using four-century-old techniques. Each link is individually articulated for supreme comfort.',
      images: [
        '/images/design-aur-gn102.jpg',
        '/images/design-aur-bc101.jpg'
      ],
      isFeatured: true,
      isNew: true
    });
    setIsFormModalOpen(true);
  };

  const handleOpenEdit = (design) => {
    setDesignToEdit(design);
    setFormData({
      name: design.name,
      code: design.code,
      category: design.category,
      categoryLabel: design.categoryLabel,
      material: design.material,
      approxWeight: design.approxWeight,
      stoneDetails: design.stoneDetails,
      shortDescription: design.shortDescription,
      description: design.description,
      images: design.images || [''],
      isFeatured: !!design.isFeatured,
      isNew: !!design.isNew
    });
    setIsFormModalOpen(true);
  };

  const handleOpenDelete = (design) => {
    setDesignToDelete(design);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (designToDelete) {
      deleteDesign(designToDelete.id);
      setIsDeleteModalOpen(false);
      setDesignToDelete(null);
    }
  };

  const handleCategoryChange = (catId) => {
    const col = collections.find((c) => c.id === catId);
    setFormData((prev) => ({
      ...prev,
      category: catId,
      categoryLabel: col ? col.title : 'Gold Jewellery'
    }));
  };

  const handleImageChange = (index, value) => {
    const updatedImages = [...formData.images];
    updatedImages[index] = value;
    setFormData((prev) => ({ ...prev, images: updatedImages }));
  };

  const handleAddImageField = () => {
    setFormData((prev) => ({ ...prev, images: [...prev.images, ''] }));
  };

  const handleRemoveImageField = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.code) return;

    const cleanedImages = formData.images.filter((img) => img && img.trim().length > 0);
    const finalImages = cleanedImages.length > 0
      ? cleanedImages
      : ['/images/design-aur-bc101.jpg'];

    const payload = {
      ...formData,
      images: finalImages,
      specifications: {
        purity: formData.material,
        certification: 'BIS 916 Hallmark & Gemological Certificate',
        closure: 'Adjustable Clasp / Traditional Threading',
        dimensions: 'Standard Luxury Dimensions',
        craftsmanship: 'Master Goldsmith Hand-Finished'
      }
    };

    if (designToEdit) {
      updateDesign(designToEdit.id, payload);
    } else {
      addDesign(payload);
    }

    setIsFormModalOpen(false);
  };

  // Filtered designs
  const filtered = designs.filter((d) => {
    const matchesCat = categoryFilter === 'all' || d.category === categoryFilter;
    const query = search.toLowerCase().trim();
    const matchesQuery =
      !query ||
      d.name.toLowerCase().includes(query) ||
      d.code.toLowerCase().includes(query) ||
      d.material?.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  return (
    <div className="admin-designs-tab">
      <div className="admin-card">
        <div className="admin-card-header">
          <div>
            <h3 className="admin-card-title">Jewellery Design Catalogue</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--admin-text-muted)', marginTop: '2px' }}>
              Manage designs, specifications, stones, weights, and catalogue highlights ({designs.length} total)
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            {/* Search */}
            <div className="admin-search-box">
              <Search size={14} className="admin-search-icon" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search code or name..."
                className="admin-search-input"
              />
            </div>

            {/* Category select */}
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="status-select"
            >
              <option value="all">All Categories</option>
              {collections.map((c) => (
                <option key={c.id} value={c.id}>{c.title}</option>
              ))}
            </select>

            <button onClick={handleOpenAdd} className="btn btn-gold btn-sm">
              <Plus size={15} />
              <span>Add Design</span>
            </button>
          </div>
        </div>

        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Preview</th>
                <th>Design Name & Code</th>
                <th>Category</th>
                <th>Material & Weight</th>
                <th>Stone Details</th>
                <th>Featured</th>
                <th>New Badge</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((design) => (
                <tr key={design.id}>
                  <td>
                    <img
                      src={design.images?.[0] || '/images/design-aur-bc101.jpg'}
                      alt={design.name}
                      className="admin-table-thumb"
                    />
                  </td>
                  <td>
                    <strong style={{ color: 'var(--admin-text-main)' }}>{design.name}</strong>
                    <div style={{ color: 'var(--admin-gold-text)', fontSize: '0.74rem', fontWeight: 600 }}>
                      {design.code}
                    </div>
                  </td>
                  <td>
                    <span style={{ fontSize: '0.82rem', color: 'var(--admin-text-sub)' }}>
                      {design.categoryLabel}
                    </span>
                  </td>
                  <td>
                    <div style={{ fontSize: '0.82rem', color: 'var(--admin-text-main)' }}>{design.material}</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--admin-text-muted)' }}>{design.approxWeight}</div>
                  </td>
                  <td style={{ maxWidth: '240px' }}>
                    <div style={{
                      fontSize: '0.78rem',
                      color: 'var(--admin-text-muted)',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}>
                      {design.stoneDetails}
                    </div>
                  </td>
                  <td>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={!!design.isFeatured}
                        onChange={() => toggleFeatured(design.id)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </td>
                  <td>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={!!design.isNew}
                        onChange={() => toggleNew(design.id)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px' }}>
                      <button
                        onClick={() => handleOpenEdit(design)}
                        className="admin-action-btn"
                        title="Edit Design"
                      >
                        <Edit2 size={13} />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => handleOpenDelete(design)}
                        className="admin-action-btn delete"
                        title="Delete Design"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Design Modal */}
      {isFormModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsFormModalOpen(false)}>
          <div
            className="modal-dialog"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '680px' }}
          >
            <div className="modal-header">
              <h3 className="modal-header-title">
                {designToEdit ? `Edit: ${designToEdit.name}` : 'Add New Jewellery Design'}
              </h3>
              <button
                className="modal-close-btn"
                onClick={() => setIsFormModalOpen(false)}
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="modal-body">
              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Design Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Royal Noor-E-Aurelia Choker"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Design Code *</label>
                  <input
                    type="text"
                    required
                    value={formData.code}
                    onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                    placeholder="e.g. AUR-GN102"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    className="form-select"
                  >
                    {collections.map((col) => (
                      <option key={col.id} value={col.id}>{col.title}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Approx. Weight *</label>
                  <input
                    type="text"
                    required
                    value={formData.approxWeight}
                    onChange={(e) => setFormData({ ...formData, approxWeight: e.target.value })}
                    placeholder="e.g. 48.20 gms"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Material & Purity *</label>
                <input
                  type="text"
                  required
                  value={formData.material}
                  onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                  placeholder="e.g. 22KT Yellow Gold (BIS 916 Hallmarked)"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Stone Details</label>
                <input
                  type="text"
                  value={formData.stoneDetails}
                  onChange={(e) => setFormData({ ...formData, stoneDetails: e.target.value })}
                  placeholder="e.g. Uncut Syndicate Polki (18 cts), Zambian Emerald Drops"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Short Description</label>
                <input
                  type="text"
                  value={formData.shortDescription}
                  onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                  placeholder="One sentence overview for cards..."
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Full Narrative Description</label>
                <textarea
                  rows="3"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Detailed craftsmanship storytelling..."
                  className="form-textarea"
                />
              </div>

              {/* Multiple Image URLs */}
              <div className="form-group">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <label className="form-label" style={{ marginBottom: 0 }}>
                    Image URLs (Multi-Angle Gallery)
                  </label>
                  <button
                    type="button"
                    onClick={handleAddImageField}
                    style={{ color: 'var(--gold-primary)', fontSize: '0.74rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  >
                    <Plus size={12} /> Add Image Link
                  </button>
                </div>
                {formData.images.map((imgUrl, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                    <input
                      type="url"
                      value={imgUrl}
                      onChange={(e) => handleImageChange(idx, e.target.value)}
                      placeholder="https://images.unsplash.com/..."
                      className="form-input"
                    />
                    {formData.images.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveImageField(idx)}
                        className="admin-action-btn delete"
                      >
                        <Trash2 size={13} />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Featured & New Toggles */}
              <div style={{ display: 'flex', gap: '30px', margin: '20px 0' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '0.84rem' }}>
                  <input
                    type="checkbox"
                    checked={formData.isFeatured}
                    onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                  />
                  <span>Featured on Home Page</span>
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '0.84rem' }}>
                  <input
                    type="checkbox"
                    checked={formData.isNew}
                    onChange={(e) => setFormData({ ...formData, isNew: e.target.checked })}
                  />
                  <span>Mark with "NEW" Badge</span>
                </label>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
                <button
                  type="button"
                  onClick={() => setIsFormModalOpen(false)}
                  className="btn btn-outline-gold btn-sm"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-gold btn-sm">
                  {designToEdit ? 'Update Design' : 'Add Design to Catalogue'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && designToDelete && (
        <div className="modal-backdrop" onClick={() => setIsDeleteModalOpen(false)}>
          <div
            className="modal-dialog"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '460px', textAlign: 'center' }}
          >
            <div className="modal-body" style={{ padding: '36px 28px' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid #EF4444',
                color: '#EF4444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 18px'
              }}>
                <AlertTriangle size={28} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', marginBottom: '10px', color: 'var(--admin-text-main)' }}>
                Confirm Deletion
              </h3>
              <p style={{ color: 'var(--admin-text-sub)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '24px' }}>
                Are you sure you want to remove <strong>{designToDelete.name}</strong> ({designToDelete.code}) from the public catalogue? This action cannot be undone.
              </p>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                <button
                  onClick={() => setIsDeleteModalOpen(false)}
                  className="btn btn-outline-gold btn-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="btn btn-sm"
                  style={{ background: '#EF4444', color: '#FFFFFF', fontWeight: 600 }}
                >
                  Confirm Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
