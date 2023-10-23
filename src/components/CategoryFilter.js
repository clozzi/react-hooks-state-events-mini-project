import React from "react";

function CategoryFilter({ categories, onCategoryChange }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => (
        <button onClick={onCategoryChange} value={category} key={category}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
