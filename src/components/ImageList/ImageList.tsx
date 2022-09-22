import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Image from '../Image/Image';
import { ImageObj } from '../../App';
import './ImageList.css';

const ImageList: React.FC = () => {
  const images = useSelector((state: RootState) => state.image.images);
  return (
    <div className="image-list">
      {images.map((image) => {
        return (
          <Image
            key={image.id}
            id={image.id}
            desc={image.desc}
            url={image.url}
            password={image.password}
          />
        );
      })}
    </div>
  );
};

export default ImageList;
