import React from 'react';
import { useSelector } from 'react-redux';
import Categorylist from './Categorylist';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  return (
    <div className="divcategories">
      <h3>Categories list...</h3>
      <Categorylist
        categories={categories}
      />
    </div>
  );
};

export default Categories;
