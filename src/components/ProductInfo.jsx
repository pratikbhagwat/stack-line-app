import React from "react";

export default function ProductInfo({ product }) {
  return (
    <div className="product-info">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-subtitle">{product.subtitle}</p>
      <div className="tags">
        {product.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}