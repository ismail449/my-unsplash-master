import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import './firebase';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

import './App.css';

function App() {
  const fetchImages = async () => {
    const querySnapshot = await getDocs(collection(getFirestore(), 'photos'));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
    });
  };
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
