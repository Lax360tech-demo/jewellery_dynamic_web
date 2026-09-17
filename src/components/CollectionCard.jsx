import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const CollectionCard = ({ collection }) => {
  const { id, title, tagline, description, image, itemCount } = collection;

  return (
    <article className="collection-card">
      <div className="collection-image-box">
        <img src={image} alt={title} loading="lazy" />
        <span className="collection-count-badge">{itemCount}</span>
      </div>

      <div className="collection-content">
        <h3 className="collection-title">{title}</h3>
        <div className="collection-tagline">{tagline}</div>
        <p className="collection-desc">{description}</p>
        <div className="collection-footer">
          <Link
            to={`/gallery?category=${id}`}
            className="btn btn-outline-gold btn-sm"
            style={{ width: '100%' }}
          >
            <span>Explore Collection</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
};
