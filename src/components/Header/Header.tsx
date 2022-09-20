import React from 'react';
import Search from '../Search/Search';
import AddImage from '../AddImage/AddImage';
import Logo from '../../assets/my_unsplash_logo.svg';

import './Header.css';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img src={Logo} alt="my unsplash logo" />
        <Search />
      </div>
      <div>
        <AddImage />
      </div>
    </div>
  );
};

export default Header;
