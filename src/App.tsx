import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { setImages, addImage, deleteImage } from './store/imageSlice';
import { closeAddImageModal, closeDeleteImageModal } from './store/modalSlice';
import './firebase';
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  getFirestore,
  doc,
} from 'firebase/firestore';

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
  const deletedImage = useSelector(
    (state: RootState) => state.image.deletedImage,
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
  const addImageHandler = async (data: {
    Label: string;
    Password: string;
    'Photo URL': string;
  }) => {
    const docRef = await addDoc(collection(getFirestore(), 'photos'), {
      desc: data.Label,
      url: data['Photo URL'],
      password: data.Password,
    });
    const newImage: ImageObj = {
      desc: data.Label,
      url: data['Photo URL'],
      password: data.Password,
      id: docRef.id,
    };
    dispatch(addImage(newImage));
    return '';
  };
  const deleteImageHandler = async (data: { Password: string }) => {
    if (data.Password === deletedImage.password) {
      await deleteDoc(doc(getFirestore(), 'photos', deletedImage.id));
      dispatch(deleteImage());
      return '';
    } else {
      return 'Wrong Password';
    }
  };
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
          submitButtonHandler={addImageHandler}
          cancelButtonHandler={() => dispatch(closeAddImageModal())}
        />
      )}
      {deleteImageModal && (
        <Modal
          labels={[{ label: 'Password', type: 'password' }]}
          title="Are you sure?"
          buttonText="delete"
          submitButtonHandler={deleteImageHandler}
          cancelButtonHandler={() => dispatch(closeDeleteImageModal())}
        />
      )}
    </div>
  );
};

export default App;
