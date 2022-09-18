import React, { useEffect, useState } from 'react';
import '../../firebase';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import './ImageList.css';

type ImageObj = {
  url: string;
  password: string;
  id: string;
};
const ImageList: React.FC = () => {
  const [images, setImages] = useState<ImageObj[]>([]);
  const fetchImages = async () => {
    const querySnapshot = await getDocs(collection(getFirestore(), 'photos'));
    const fetchedImages: ImageObj[] = [];
    let imageObj: ImageObj;
    querySnapshot.forEach((doc) => {
      imageObj = {
        url: doc.data().url,
        password: doc.data().password,
        id: doc.id,
      };
      fetchedImages.push(imageObj);
    });
    setImages([...fetchedImages]);
  };
  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <div className="image-list">
      {images.map((image) => {
        return (
          <figure key={image.id}>
            <img src={image.url} />
          </figure>
        );
      })}
    </div>
  );
};

export default ImageList;
