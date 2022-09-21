import React from 'react';
import { useDispatch } from 'react-redux';
import { doc, deleteDoc, getFirestore } from 'firebase/firestore';
import { openDeleteImageModal } from '../../store/modalSlice';
import './Image.css';

interface ImageProps {
  url: string;
  desc: string;
  id: string;
}
const Image: React.FC<ImageProps> = ({ url, desc, id }) => {
  const dispatch = useDispatch();
  const deleteImage = async () => {
    await deleteDoc(doc(getFirestore(), 'photos', id));
  };
  return (
    <figure className="image">
      <img src={url} />

      <figcaption>
        <button
          onClick={() => dispatch(openDeleteImageModal())}
          type="submit"
          className="image-delete"
        >
          delete
        </button>
        <div className="image-desc">{desc}</div>
      </figcaption>
    </figure>
  );
};

export default Image;
