import React from 'react';
import Input from '../Input/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Search.css';

const Search: React.FC = () => {
  const onChange = () => {};
  return (
    <div className="search">
      <FontAwesomeIcon className="magnifying-glass" icon={faMagnifyingGlass} />
      <Input
        name="search"
        onChange={onChange}
        required={false}
        type="text"
        placeholder="Search by name"
      />
    </div>
  );
};

export default Search;
