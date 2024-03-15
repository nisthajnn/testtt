// CategorySelector.js
import React from 'react';
import { ApiCategories } from './ApiCategories';

const CategorySelector = ({ onSelectCategory }) => {
  return (
    <div className="category-selector">
      {ApiCategories.map((category) => (
        <div key={category.title} className="category-item">
          <img src={category.src} alt={category.title} />
          <button onClick={() => onSelectCategory(category.title)}>
            {category.title}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CategorySelector;
