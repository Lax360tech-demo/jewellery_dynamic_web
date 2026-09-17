import React, { useState } from 'react';
import {
  Plus,
  Edit2,
  Trash2,
  Search,
  Eye,
  Sparkles,
  Star,
  X,
  Check,
  AlertTriangle,
  Image as ImageIcon,
  ExternalLink,
  Layers,
  Filter
} from 'lucide-react';
import { useJewellery } from '../context/JewelleryContext';

export const GalleryManagement = () => {
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
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [viewLayout, setViewLayout] = useState('grid'); // 'grid' | 'table'

  const categories = [
    { id: 'all', label: 'All Collections' },
    { id: 'gold', label: 'Gold' },
    { id: 'diamond', label: 'Diamond' },
    { id: 'bridal', label: 'Bridal' },
    { id: 'silver', label: 'Silver' },
    { id: 'traditional', label: 'Traditional' },
    { id: 'contemporary', label: 'Contemporary' },
    { id: 'men', label: "Men's" },
    { id: 'kids', label: 'Kids' }
  ];

  const [formData, setFormData] = useState({
    name: '',
    code: '',
    category: 'gold',
    categoryLabel: 'Gold Jewellery',
    material: '22KT Yellow Gold (BIS 916)',
    approxWeight: '24.50 gms',
    stoneDetails: 'Natural Untreated Rubies & South Sea Pearls',
    shortDescription: 'Handcrafted sovereign luxury heirloom piece.',
    description: 'Forged by generational goldsmiths with intricate repoussé and lustrous mirror finish.',
    images: ['/images/collection-gold.webp'],
    isFeatured: true,
    isNew: true
  });

  const filteredDesigns = designs.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      item.category?.toLowerCase() === selectedCategory.toLowerCase();
    const query = search.toLowerCase().trim();
    const matchesQuery =
      !query ||
      item.name.toLowerCase().includes(query) ||
      item.code.toLowerCase().includes(query) ||
      (item.material && item.material.toLowerCase().includes(query));
    return matchesCategory && matchesQuery;
  });

  const handleOpenAdd = () => {
    setItemToEdit(null);
    const generatedCode = `AUR-GL${Math.floor(100 + Math.random() * 900)}`;
    setFormData({
      name: '',
      code: generatedCode,
      category: 'gold',
      categoryLabel: 'Gold Jewellery',
      material: '22KT Yellow Gold (BIS 916)',
      approxWeight: '28.00 gms',
      stoneDetails: 'Certified Natural Diamonds & Basra Pearls',
      shortDescription: 'Masterwork jewellery piece handcrafted for the gallery collection.',
      description: 'Hand-forged by master artisans honoring centuries-old craftsmanship traditions.',
      images: ['/images/design-aur-gn102.jpg'],
      isFeatured: true,
      isNew: true
    });
    setIsFormModalOpen(true);
  };

  const handleOpenEdit = (item) => {
    setItemToEdit(item);
    setFormData({
      name: item.name,
      code: item.code,
      category: item.category || 'gold',
      categoryLabel: item.categoryLabel || 'Gold Jewellery',
      material: item.material || '',
      approxWeight: item.approxWeight || '',
      stoneDetails: item.stoneDetails || '',
      shortDescription: item.shortDescription || '',
      description: item.description || '',
      images: item.images && item.images.length > 0 ? item.images : ['/images/collection-gold.webp'],
      isFeatured: !!item.isFeatured,
      isNew: !!item.isNew
    });
    setIsFormModalOpen(true);
  };

  const handleOpenView = (item) => {
    setSelectedItem(item);
    setIsViewModalOpen(true);
  };

  const handleOpenDelete = (item) => {
    setItemToDelete(item);
    setIsDeleteModalOpen(true);
  };

  const handleSaveForm = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.code.trim()) {
      alert('Please provide Design Name and Code.');
      return;
    }

    const matchingCat = categories.find((c) => c.id === formData.category);
    const categoryLabel = matchingCat ? matchingCat.label : 'Haute Joaillerie';

    const payload = {
      ...formData,
      categoryLabel
    };

    if (itemToEdit) {
      updateDesign(itemToEdit.id, payload);
    } else {
      addDesign(payload);
    }
    setIsFormModalOpen(false);
  };

  const confirmDelete = () => {
    if (itemToDelete) {
      deleteDesign(itemToDelete.id);
      setIsDeleteModalOpen(false);
      setItemToDelete(null);
    }
  };

  return (
    <div className="admin-gallery-tab">
      <div className="admin-card">
        {/* Header Bar */}
        <div className="admin-card-header">
          <div>
            <h3 className="admin-card-title">Gallery Showcase & Archives</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--admin-text-muted, #8C847A)', marginTop: '2px' }}>
              Manage curated catalogue exhibits, photography previews, and featured showcase highlights ({designs.length} total designs)
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            {/* View Mode Toggle */}
            <div style={{ display: 'inline-flex', background: 'var(--admin-surface-2, #181614)', padding: '3px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.2))' }}>
              <button
                type="button"
                onClick={() => setViewLayout('grid')}
                className={`admin-action-btn ${viewLayout === 'grid' ? 'active' : ''}`}
                style={{ border: 'none', padding: '5px 10px', fontSize: '0.74rem' }}
              >
                Grid Cards
              </button>
              <button
                type="button"
                onClick={() => setViewLayout('table')}
                className={`admin-action-btn ${viewLayout === 'table' ? 'active' : ''}`}
                style={{ border: 'none', padding: '5px 10px', fontSize: '0.74rem' }}
              >
                Table View
              </button>
            </div>

            <div className="admin-search-box">
              <Search size={14} className="admin-search-icon" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search SKU, name, metal..."
                className="admin-search-input"
              />
            </div>

            {/* Add Design Button */}
            <button onClick={handleOpenAdd} className="btn btn-gold btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Plus size={15} />
              <span>Add Showcase Piece</span>
            </button>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div style={{
          padding: '12px 24px',
          borderBottom: '1px solid var(--admin-border, rgba(197, 168, 105, 0.14))',
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
          background: 'var(--admin-surface-2, rgba(20, 18, 16, 0.5))'
        }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`filter-chip ${selectedCategory === cat.id ? 'active' : ''}`}
              style={{ padding: '4px 12px', fontSize: '0.76rem' }}
            >
              {cat.label}
              {cat.id === 'all' ? ` (${designs.length})` : ` (${designs.filter(d => d.category?.toLowerCase() === cat.id).length})`}
            </button>
          ))}
        </div>

        {/* Content View: Grid or Table */}
        {viewLayout === 'grid' ? (
          <div style={{ padding: '24px' }}>
            {filteredDesigns.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '50px 20px', color: 'var(--admin-text-muted, #8C847A)' }}>
                No showcase pieces found matching your criteria.
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '20px'
              }}>
                {filteredDesigns.map((item) => {
                  const img = item.images && item.images[0] ? item.images[0] : '/images/collection-gold.webp';
                  return (
                    <div
                      key={item.id}
                      style={{
                        background: 'var(--admin-surface, #141210)',
                        border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.2))',
                        borderRadius: 'var(--radius-sm)',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'transform 0.2s, box-shadow 0.2s'
                      }}
                    >
                      {/* Image Preview */}
                      <div
                        style={{
                          position: 'relative',
                          height: '200px',
                          overflow: 'hidden',
                          background: '#0D0C0B',
                          cursor: 'pointer'
                        }}
                        onClick={() => handleOpenView(item)}
                      >
                        <img
                          src={img}
                          alt={item.name}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400';
                          }}
                        />
                        <span
                          style={{
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            background: 'rgba(10, 9, 8, 0.82)',
                            backdropFilter: 'blur(4px)',
                            color: 'var(--gold-primary)',
                            fontSize: '0.68rem',
                            fontWeight: 600,
                            padding: '3px 8px',
                            borderRadius: 'var(--radius-full)',
                            border: '1px solid rgba(197, 168, 105, 0.3)'
                          }}
                        >
                          {item.code}
                        </span>

                        {item.isFeatured && (
                          <span
                            style={{
                              position: 'absolute',
                              top: '10px',
                              right: '10px',
                              background: 'var(--gold-primary)',
                              color: '#121110',
                              fontSize: '0.66rem',
                              fontWeight: 700,
                              padding: '3px 8px',
                              borderRadius: 'var(--radius-full)',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '3px'
                            }}
                          >
                            <Star size={10} fill="#121110" />
                            Showcase
                          </span>
                        )}
                      </div>

                      {/* Card Content */}
                      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                        <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--gold-primary)', letterSpacing: '0.08em', marginBottom: '4px' }}>
                          {item.categoryLabel || item.category}
                        </div>
                        <h4
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '1.08rem',
                            color: 'var(--admin-text-main, #FAF8F5)',
                            lineHeight: 1.3,
                            marginBottom: '6px',
                            cursor: 'pointer'
                          }}
                          onClick={() => handleOpenView(item)}
                        >
                          {item.name}
                        </h4>
                        <div style={{ fontSize: '0.76rem', color: 'var(--admin-text-muted, #8C847A)', marginBottom: '12px' }}>
                          {item.material || 'BIS Hallmarked Gold'}
                        </div>

                        <div style={{ marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid var(--admin-border, rgba(197, 168, 105, 0.12))', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <button
                            onClick={() => toggleFeatured(item.id)}
                            className="admin-action-btn"
                            title={item.isFeatured ? 'Remove from Showcase' : 'Feature in Showcase'}
                            style={{ color: item.isFeatured ? 'var(--gold-primary)' : 'var(--admin-text-muted, #8C847A)' }}
                          >
                            <Star size={13} fill={item.isFeatured ? 'currentColor' : 'none'} />
                            <span>{item.isFeatured ? 'Featured' : 'Regular'}</span>
                          </button>

                          <div style={{ display: 'flex', gap: '6px' }}>
                            <button
                              onClick={() => handleOpenView(item)}
                              className="admin-action-btn"
                              title="View Details"
                            >
                              <Eye size={13} />
                            </button>
                            <button
                              onClick={() => handleOpenEdit(item)}
                              className="admin-action-btn"
                              title="Edit"
                            >
                              <Edit2 size={13} />
                            </button>
                            <button
                              onClick={() => handleOpenDelete(item)}
                              className="admin-action-btn delete"
                              title="Delete"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          /* Table View */
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th style={{ width: '70px' }}>Thumbnail</th>
                  <th>SKU Code</th>
                  <th>Piece Name & Category</th>
                  <th>Purity & Material</th>
                  <th>Approx Weight</th>
                  <th>Showcase</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredDesigns.length === 0 ? (
                  <tr>
                    <td colSpan={7} style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--admin-text-muted, #8C847A)' }}>
                      No pieces found matching your criteria.
                    </td>
                  </tr>
                ) : (
                  filteredDesigns.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img
                          src={item.images?.[0] || '/images/collection-gold.webp'}
                          alt={item.name}
                          className="admin-table-thumb"
                          onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300';
                          }}
                        />
                      </td>
                      <td style={{ fontWeight: 600, color: 'var(--gold-primary)' }}>
                        {item.code}
                      </td>
                      <td>
                        <div style={{ fontWeight: 600, color: 'var(--admin-text-main, #FAF8F5)' }}>
                          {item.name}
                        </div>
                        <div style={{ fontSize: '0.74rem', color: 'var(--admin-text-muted, #8C847A)' }}>
                          {item.categoryLabel || item.category}
                        </div>
                      </td>
                      <td>{item.material || '22KT Gold'}</td>
                      <td>{item.approxWeight || '—'}</td>
                      <td>
                        <button
                          onClick={() => toggleFeatured(item.id)}
                          className={`status-badge ${item.isFeatured ? 'new' : ''}`}
                          style={{
                            cursor: 'pointer',
                            background: item.isFeatured ? 'rgba(197, 168, 105, 0.2)' : 'transparent',
                            border: '1px solid rgba(197, 168, 105, 0.3)',
                            color: item.isFeatured ? 'var(--gold-primary)' : 'var(--admin-text-muted)'
                          }}
                        >
                          <Star size={11} fill={item.isFeatured ? 'currentColor' : 'none'} style={{ marginRight: '3px' }} />
                          {item.isFeatured ? 'Showcase' : 'Standard'}
                        </button>
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                          <button
                            onClick={() => handleOpenView(item)}
                            className="admin-action-btn"
                            title="View Piece"
                          >
                            <Eye size={13} />
                          </button>
                          <button
                            onClick={() => handleOpenEdit(item)}
                            className="admin-action-btn"
                            title="Edit Piece"
                          >
                            <Edit2 size={13} />
                          </button>
                          <button
                            onClick={() => handleOpenDelete(item)}
                            className="admin-action-btn delete"
                            title="Delete Piece"
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

      {/* VIEW PIECE MODAL / LIGHTBOX */}
      {isViewModalOpen && selectedItem && (
        <div className="admin-modal-backdrop" onClick={() => setIsViewModalOpen(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '680px' }}>
            <div className="admin-modal-header">
              <h3 className="admin-modal-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Eye size={18} color="var(--gold-primary)" />
                {selectedItem.name}
              </h3>
              <button className="admin-modal-close" onClick={() => setIsViewModalOpen(false)}>
                <X size={18} />
              </button>
            </div>
            <div className="admin-modal-body">
              <div style={{ position: 'relative', height: '280px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '18px', border: '1px solid rgba(197, 168, 105, 0.3)' }}>
                <img
                  src={selectedItem.images?.[0] || '/images/collection-gold.webp'}
                  alt={selectedItem.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800';
                  }}
                />
                <span style={{ position: 'absolute', bottom: '12px', left: '12px', background: 'rgba(0,0,0,0.75)', color: '#FAF8F5', padding: '4px 10px', borderRadius: 'var(--radius-sm)', fontSize: '0.78rem', fontWeight: 600 }}>
                  SKU: {selectedItem.code}
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '18px' }}>
                <div style={{ background: 'var(--admin-surface-2, #181614)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.15))' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--admin-text-muted, #8C847A)', textTransform: 'uppercase' }}>Category</div>
                  <div style={{ fontWeight: 600, color: 'var(--admin-text-main, #FAF8F5)', marginTop: '2px' }}>{selectedItem.categoryLabel || selectedItem.category}</div>
                </div>

                <div style={{ background: 'var(--admin-surface-2, #181614)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.15))' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--admin-text-muted, #8C847A)', textTransform: 'uppercase' }}>Metal Purity</div>
                  <div style={{ fontWeight: 600, color: 'var(--admin-text-main, #FAF8F5)', marginTop: '2px' }}>{selectedItem.material || '22KT Yellow Gold'}</div>
                </div>

                <div style={{ background: 'var(--admin-surface-2, #181614)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.15))' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--admin-text-muted, #8C847A)', textTransform: 'uppercase' }}>Approx Weight</div>
                  <div style={{ fontWeight: 600, color: 'var(--admin-text-main, #FAF8F5)', marginTop: '2px' }}>{selectedItem.approxWeight || '—'}</div>
                </div>
              </div>

              <div style={{ background: 'var(--admin-surface-2, #181614)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.15))', marginBottom: '14px' }}>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 600, marginBottom: '4px' }}>Gemstones & Setting</div>
                <div style={{ fontSize: '0.86rem', color: 'var(--admin-text-sub)' }}>{selectedItem.stoneDetails || 'Natural Diamonds & Fine Gemstones'}</div>
              </div>

              <div style={{ background: 'var(--admin-surface-2, #181614)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--admin-border, rgba(197, 168, 105, 0.15))' }}>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--admin-text-muted, #8C847A)', marginBottom: '4px' }}>Atelier Notes</div>
                <p style={{ fontSize: '0.86rem', lineHeight: 1.6, color: 'var(--admin-text-sub)', margin: 0 }}>
                  {selectedItem.description || selectedItem.shortDescription || 'Crafted with sovereign excellence.'}
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
                  handleOpenEdit(selectedItem);
                }}
              >
                <Edit2 size={13} style={{ marginRight: '6px' }} />
                Edit Piece
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ADD / EDIT GALLERY ITEM MODAL */}
      {isFormModalOpen && (
        <div className="admin-modal-backdrop" onClick={() => setIsFormModalOpen(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '680px' }}>
            <div className="admin-modal-header">
              <h3 className="admin-modal-title">
                {itemToEdit ? 'Edit Gallery Showcase Piece' : 'Add New Showcase Masterwork'}
              </h3>
              <button className="admin-modal-close" onClick={() => setIsFormModalOpen(false)}>
                <X size={18} />
              </button>
            </div>
            <form onSubmit={handleSaveForm}>
              <div className="admin-modal-body">
                <div className="admin-form-row">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Piece Name *</label>
                    <input
                      type="text"
                      required
                      className="admin-form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. The Royal Nizam Kundan Haar"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">SKU / Reference Code *</label>
                    <input
                      type="text"
                      required
                      className="admin-form-input"
                      value={formData.code}
                      onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                      placeholder="AUR-GL101"
                    />
                  </div>
                </div>

                <div className="admin-form-row">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Category</label>
                    <select
                      className="admin-form-input"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                      {categories.filter(c => c.id !== 'all').map((c) => (
                        <option key={c.id} value={c.id}>{c.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Metal / Purity</label>
                    <input
                      type="text"
                      className="admin-form-input"
                      value={formData.material}
                      onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                      placeholder="e.g. 22KT Yellow Gold (BIS 916)"
                    />
                  </div>
                </div>

                <div className="admin-form-row">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Approx Weight</label>
                    <input
                      type="text"
                      className="admin-form-input"
                      value={formData.approxWeight}
                      onChange={(e) => setFormData({ ...formData, approxWeight: e.target.value })}
                      placeholder="e.g. 34.20 gms"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Image URL</label>
                    <input
                      type="text"
                      className="admin-form-input"
                      value={formData.images[0] || ''}
                      onChange={(e) => setFormData({ ...formData, images: [e.target.value] })}
                      placeholder="/images/design-aur-gn102.jpg or https://..."
                    />
                  </div>
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Gemstones & Accents</label>
                  <input
                    type="text"
                    className="admin-form-input"
                    value={formData.stoneDetails}
                    onChange={(e) => setFormData({ ...formData, stoneDetails: e.target.value })}
                    placeholder="e.g. Uncut Polki Diamonds & Colombian Emeralds"
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Artisan Description</label>
                  <textarea
                    rows={3}
                    className="admin-form-textarea"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Heirloom story, repoussé technique, and craftsmanship notes..."
                  />
                </div>

                <div style={{ display: 'flex', gap: '24px', marginTop: '12px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.84rem' }}>
                    <input
                      type="checkbox"
                      checked={formData.isFeatured}
                      onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                    />
                    <span>Highlight in Featured Gallery Showcase</span>
                  </label>

                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.84rem' }}>
                    <input
                      type="checkbox"
                      checked={formData.isNew}
                      onChange={(e) => setFormData({ ...formData, isNew: e.target.checked })}
                    />
                    <span>Mark as New Arrival</span>
                  </label>
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
                  {itemToEdit ? 'Save Changes' : 'Add to Gallery'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION MODAL */}
      {isDeleteModalOpen && itemToDelete && (
        <div className="admin-modal-backdrop" onClick={() => setIsDeleteModalOpen(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '440px' }}>
            <div className="admin-modal-header">
              <h3 className="admin-modal-title" style={{ color: '#EF4444', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AlertTriangle size={18} />
                Delete Gallery Piece
              </h3>
              <button className="admin-modal-close" onClick={() => setIsDeleteModalOpen(false)}>
                <X size={18} />
              </button>
            </div>
            <div className="admin-modal-body">
              <p style={{ color: 'var(--admin-text-main, #FAF8F5)', fontSize: '0.92rem', marginBottom: '8px' }}>
                Are you sure you want to remove <strong>"{itemToDelete.name}"</strong> ({itemToDelete.code})?
              </p>
              <p style={{ color: 'var(--admin-text-muted, #8C847A)', fontSize: '0.8rem', lineHeight: 1.5 }}>
                This item will be deleted from the showcase archives and public gallery.
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
