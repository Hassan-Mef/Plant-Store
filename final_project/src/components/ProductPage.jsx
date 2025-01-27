import React from 'react';
import './ProductPage.css';

const ProductPage = ({ products, addToCart }) => {
  const categories = ['Low Light', 'Succulents', 'Air Purifying', 'Large Plants', 'Easy Care', 'Flowering'];

  return (
    <div className="product-page">
      <h2 className="product-title">Our Plants</h2>
      {categories.map((category) => (
        <div key={category} className="product-category">
          <h3>{category}</h3>
          <div className="product-grid">
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <div className="product-card" key={product.id}>
                  <img src={product.image} alt={product.name} className="product-image" />
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">${product.price}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="add-to-cart"
                    disabled={product.addedToCart}
                  >
                    {product.addedToCart ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
