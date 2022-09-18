import React from 'react';
import Search from '../Search/Search';
import AddPhoto from '../AddPhoto/AddPhoto';
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
        <AddPhoto />
      </div>
    </div>
  );
};

export default Header;
