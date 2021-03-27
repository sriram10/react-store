import React from 'react';
import CategoryFilter from './CategoryFilter';
import ProductNameFilter from './ProductNameFilter';

const FilterContainer = ({ data, selectedCategories=[], onChange, searchText, onSearchChange }) => {
  return (
    <>
      <ProductNameFilter {...{ searchText, onSearchChange }} />
      <CategoryFilter {...{ data, selectedCategories, onChange }} />
    </>
  )
}

export default FilterContainer;