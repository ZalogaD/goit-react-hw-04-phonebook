import React from 'react';
import PropTypes from 'prop-types';
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

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
