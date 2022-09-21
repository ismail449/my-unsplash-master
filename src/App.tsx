import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { setImages } from './store/imageSlice';
import { closeAddImageModal, closeDeleteImageModal } from './store/modalSlice';
import './firebase';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

import Header from './components/Header/Header';
import ImageList from './components/ImageList/ImageList';
import Modal from './components/Modal/Modal';

import './App.css';

export type ImageObj = {
  url: string;
  password: string;
  id: string;
  desc: string;
};

const App: React.FC = () => {
  const addImageModal = useSelector(
    (state: RootState) => state.modal.addImageModal,
  );
  const deleteImageModal = useSelector(
    (state: RootState) => state.modal.deleteImageModal,
  );
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
      {addImageModal && (
        <Modal
          labels={[
            { label: 'Label', type: 'text' },
            { label: 'Photo URL', type: 'url' },
            { label: 'Password', type: 'password' },
          ]}
          title="Add a new photo"
          buttonText="submit"
          submitButtonHandler={() => dispatch(closeAddImageModal())}
          cancelButtonHandler={() => dispatch(closeAddImageModal())}
        />
      )}
      {deleteImageModal && (
        <Modal
          labels={[{ label: 'Password', type: 'password' }]}
          title="Are you sure?"
          buttonText="delete"
          submitButtonHandler={() => dispatch(closeDeleteImageModal())}
          cancelButtonHandler={() => dispatch(closeDeleteImageModal())}
        />
      )}
    </div>
  );
};

export default App;
