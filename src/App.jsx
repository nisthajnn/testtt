// App.js or relevant component
import React, { useState } from 'react';
import CategorySelector from './Components/CategorySelector';
import ProductComponent from './Components/ProductComponent';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <h1>E-commerce App</h1>
      <CategorySelector onSelectCategory={handleSelectCategory} />
      <ProductComponent selectedCategory={selectedCategory} />
    </div>
  );
};

export default App;
