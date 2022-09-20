import React from 'react';
import { doc, deleteDoc, getFirestore } from 'firebase/firestore';
import './Image.css';

interface ImageProbs {
  url: string;
  desc: string;
  id: string;
}
const Image: React.FC<ImageProbs> = ({ url, desc, id }) => {
  const deleteImage = async () => {
    await deleteDoc(doc(getFirestore(), 'photos', id));
  };
  return (
    <figure className="image">
      <img src={url} />

      <figcaption>
        <button onClick={deleteImage} type="submit" className="image-delete">
          delete
        </button>
        <div className="image-desc">{desc}</div>
      </figcaption>
    </figure>
  );
};

export default Image;
