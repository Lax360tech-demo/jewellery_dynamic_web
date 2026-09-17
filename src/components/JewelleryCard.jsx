import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Eye } from 'lucide-react';
import { useJewellery } from '../context/JewelleryContext';

export const JewelleryCard = ({ design }) => {
  const { openEnquiryModal } = useJewellery();
  const {
    id,
    code,
    name,
    categoryLabel,
    shortDescription,
    images,
    isNew
  } = design;

  const displayImage = images && images.length > 0
    ? images[0]
    : '/images/design-aur-bc101.jpg';

  const handleEnquire = (e) => {
    e.preventDefault();
    e.stopPropagation();
    openEnquiryModal({
      designCode: code,
      designName: name,
      category: categoryLabel,
      image: displayImage
    });
  };

  return (
    <article className="jewellery-card">
      {isNew && <span className="badge-new">NEW</span>}

      <Link to={`/jewellery/${code}`} className="jewellery-card-image">
        <img src={displayImage} alt={name} loading="lazy" />
      </Link>

      <div className="jewellery-card-content">
        <div className="jewellery-card-meta">
          <span className="jewellery-card-category">{categoryLabel}</span>
          <span className="jewellery-card-code">{code}</span>
        </div>

        <h4 className="jewellery-card-name">
          <Link to={`/jewellery/${code}`}>{name}</Link>
        </h4>

        <p className="jewellery-card-desc">{shortDescription}</p>

        <div className="jewellery-card-actions">
          <Link to={`/jewellery/${code}`} className="btn btn-outline-gold btn-sm">
            <Eye size={14} />
            <span>View Design</span>
          </Link>

          <button onClick={handleEnquire} className="btn btn-gold btn-sm">
            <Sparkles size={14} />
            <span>Enquire</span>
          </button>
        </div>
      </div>
    </article>
  );
};
