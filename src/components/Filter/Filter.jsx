import React from 'react';
import prop from 'prop-types';
import { Input } from './Filter.styled';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <Input
      type="text"
      placeholder="Search contacts"
      value={filter}
      onChange={onFilterChange}
    />
  );
};

Filter.prop = {
  filter: prop.string.isRequired,
  onFilterChange: prop.func.isRequired,
};

export default Filter;
