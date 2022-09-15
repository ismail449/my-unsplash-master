import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Search.css';

const Search = () => {
  return (
    <div className="search">
      <FontAwesomeIcon className="magnifying-glass" icon={faMagnifyingGlass} />
      <input placeholder="Search by name" type="search" />
    </div>
  );
};

export default Search;
