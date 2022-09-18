import React from 'react';

import Header from './components/Header/Header';
import ImageList from './components/ImageList/ImageList';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <ImageList />
    </div>
  );
};

export default App;
