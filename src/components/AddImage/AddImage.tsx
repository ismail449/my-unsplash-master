import React from 'react';
import { useDispatch } from 'react-redux';
import { openAddImageModal } from '../../store/modalSlice';
import Button from '../Button/Button';
import './AddImage.css';

const AddImage: React.FC = () => {
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(openAddImageModal());
  };
  return (
    <div className="add-image">
      <Button
        type="button"
        onClick={onClickHandler}
        text="Add a photo"
        color="submit"
      />
    </div>
  );
};

export default AddImage;
