// ProductComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductComponent = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Use selectedCategory prop in the API request
        const response = await axios.get(
          `https://fakestoreapi.com/products${
            selectedCategory ? `?category=${selectedCategory}` : ''
          }`
        );
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {/* Map through products and display them */}
        {products.map((product) => (
          <li key={product.id}>
            {/* Display product details */}
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price} USD</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductComponent;
