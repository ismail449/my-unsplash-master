import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Image from '../Image/Image';
import Loader from '../Loader/Loader';
import './ImageList.css';

const ImageList: React.FC = () => {
  const images = useSelector((state: RootState) => state.image.filteredImages);
  return (
    <div className="image-list">
      {images.length === 0 ? (
        <Loader />
      ) : (
        images.map((image) => {
          return (
            <Image
              key={image.id}
              id={image.id}
              desc={image.desc}
              url={image.url}
              password={image.password}
            />
          );
        })
      )}
    </div>
  );
};

export default ImageList;
