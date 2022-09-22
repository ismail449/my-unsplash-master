import React from 'react';
import { useDispatch } from 'react-redux';
import { openDeleteImageModal } from '../../store/modalSlice';
import { setDeletedImageId } from '../../store/imageSlice';
import './Image.css';

interface ImageProps {
  url: string;
  desc: string;
  id: string;
  password: string;
}
const Image: React.FC<ImageProps> = ({ url, desc, id, password }) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(setDeletedImageId({ password: password, id: id }));
    dispatch(openDeleteImageModal());
  };
  return (
    <figure className="image">
      <img src={url} />

      <figcaption>
        <button
          onClick={() => clickHandler()}
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
