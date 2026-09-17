import React from 'react';
import { Star } from 'lucide-react';

export const TestimonialCard = ({ testimonial }) => {
  const { name, location, rating, title, review, piece } = testimonial;

  return (
    <div className="testimonial-card">
      <div>
        <div className="testimonial-stars" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={15} fill="#C5A869" color="#C5A869" />
          ))}
        </div>
        <p className="testimonial-quote">"{review}"</p>
      </div>

      <div className="testimonial-author">
        <div>
          <div className="author-name">{name}</div>
          <div className="author-piece">Piece: {piece}</div>
        </div>
        <div className="author-loc">{location}</div>
      </div>
    </div>
  );
};
