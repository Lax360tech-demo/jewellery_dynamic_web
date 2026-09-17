import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Sparkles, Filter, X } from 'lucide-react';
import { JewelleryCard } from '../components/JewelleryCard';
import { useJewellery } from '../context/JewelleryContext';
import '../styles/gallery.css';

export const Gallery = () => {
  const { designs } = useJewellery();
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get('category') || 'all';
  const [searchQuery, setSearchQuery] = useState('');

  const filterCategories = [
    { id: 'all', label: 'All Designs' },
    { id: 'gold', label: 'Gold' },
    { id: 'diamond', label: 'Diamond' },
    { id: 'bridal', label: 'Bridal' },
    { id: 'silver', label: 'Silver' },
    { id: 'traditional', label: 'Traditional' },
    { id: 'contemporary', label: 'Contemporary' },
    { id: 'men', label: "Men's" },
    { id: 'kids', label: 'Kids' }
  ];

  const handleCategorySelect = (categoryId) => {
    if (categoryId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: categoryId });
    }
  };

  // Filtered designs logic
  const filteredDesigns = useMemo(() => {
    return designs.filter((design) => {
      // Category match
      const categoryMatch =
        selectedCategory === 'all' ||
        design.category?.toLowerCase() === selectedCategory.toLowerCase();

      // Search query match (name or code)
      const query = searchQuery.toLowerCase().trim();
      const searchMatch =
        !query ||
        design.name.toLowerCase().includes(query) ||
        design.code.toLowerCase().includes(query) ||
        (design.material && design.material.toLowerCase().includes(query));

      return categoryMatch && searchMatch;
    });
  }, [designs, selectedCategory, searchQuery]);

  return (
    <div className="gallery-page page-with-navbar">
      {/* Page Header Banner */}
      <section style={{
        background: '#12100E',
        color: '#FAF8F5',
        padding: '60px 24px 50px',
        textAlign: 'center',
        borderBottom: '1px solid rgba(197, 168, 105, 0.25)'
      }}>
        <div className="container-narrow">
          <div className="section-eyebrow">
            <span>The Grand Catalogue</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', marginBottom: '14px' }}>
            Collection Gallery
          </h1>
          <p style={{ color: '#C5BEB5', fontSize: '1.02rem', lineHeight: 1.7, maxWidth: '640px', margin: '0 auto' }}>
            Explore our curated fine jewellery archives. Filter by metal, heritage technique, or search by unique design reference code.
          </p>
        </div>
      </section>

      {/* Sticky Filters & Search Bar */}
      <div className="gallery-controls-bar">
        <div className="container">
          <div className="gallery-controls-inner">
            {/* Category Filter Chips */}
            <div className="gallery-filters" role="tablist">
              {filterCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`filter-chip ${
                    selectedCategory === cat.id ? 'active' : ''
                  }`}
                  role="tab"
                  aria-selected={selectedCategory === cat.id}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="gallery-search-box">
              <Search size={16} className="gallery-search-icon" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search design code, name, stone..."
                className="gallery-search-input"
                aria-label="Search jewellery gallery"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#8C847A',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Showcase Content */}
      <section className="section-padding" style={{ background: '#FAF8F5' }}>
        <div className="container">
          <div className="gallery-count-status">
            <div>
              Showing <strong>{filteredDesigns.length}</strong> masterwork
              {filteredDesigns.length === 1 ? '' : 's'}
              {selectedCategory !== 'all' && (
                <span> in <em>{selectedCategory.toUpperCase()}</em></span>
              )}
            </div>
            {selectedCategory !== 'all' && (
              <button
                onClick={() => handleCategorySelect('all')}
                style={{
                  color: 'var(--gold-primary)',
                  fontSize: '0.8rem',
                  textDecoration: 'underline',
                  cursor: 'pointer'
                }}
              >
                Clear filter
              </button>
            )}
          </div>

          {filteredDesigns.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '80px 20px',
              background: '#FFFFFF',
              border: '1px dashed rgba(197, 168, 105, 0.4)',
              borderRadius: 'var(--radius-sm)'
            }}>
              <Sparkles size={36} color="var(--gold-primary)" style={{ margin: '0 auto 16px' }} />
              <h3 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>No Designs Found</h3>
              <p style={{ color: '#736B63', maxWidth: '440px', margin: '0 auto 24px' }}>
                We could not find any jewellery matching "{searchQuery}". You may also request a custom bespoke commission with our master goldsmiths.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  handleCategorySelect('all');
                }}
                className="btn btn-gold"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="gallery-grid">
              {filteredDesigns.map((design) => (
                <JewelleryCard key={design.id} design={design} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
