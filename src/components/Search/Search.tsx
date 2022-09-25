import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchImages } from '../../store/imageSlice';
import Input from '../Input/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Search.css';

const Search: React.FC = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    dispatch(searchImages(value));
    setInput(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submitted input', input);
  };
  return (
    <div className="search">
      <form onSubmit={onSubmit}>
        <FontAwesomeIcon
          className="magnifying-glass"
          icon={faMagnifyingGlass}
        />
        <Input
          name="search"
          onChange={onChange}
          required={false}
          type="text"
          placeholder="Search by name"
        />
      </form>
    </div>
  );
};

export default Search;
