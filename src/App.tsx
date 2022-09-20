import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setImages } from './store/imageSlice';
import './firebase';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

import Header from './components/Header/Header';
import ImageList from './components/ImageList/ImageList';

import './App.css';

export type ImageObj = {
  url: string;
  password: string;
  id: string;
  desc: string;
};

const App: React.FC = () => {
  const dispatch = useDispatch();
  const fetchImages = async () => {
    const querySnapshot = await getDocs(collection(getFirestore(), 'photos'));
    const fetchedImages: ImageObj[] = [];
    let imageObj: ImageObj;
    querySnapshot.forEach((doc) => {
      imageObj = {
        url: doc.data().url,
        password: doc.data().password,
        desc: doc.data().desc,
        id: doc.id,
      };
      fetchedImages.push(imageObj);
    });
    dispatch(setImages([...fetchedImages]));
  };
  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <div className="App">
      <Header />
      <ImageList />
    </div>
  );
};

export default App;
