import React from 'react';
import CategoryFilter from './CategoryFilter';

const FilterContainer = ({ data, selectedCategories=[], onChange }) => {
  return (
    <CategoryFilter {...{ data, selectedCategories, onChange }} />
  )
}

export default FilterContainer;