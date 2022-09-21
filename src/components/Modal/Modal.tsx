import React, { FormEvent } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import './Modal.css';

interface ModalProps {
  title: string;
  labels: { label: string; type: string }[];
  buttonText: string;
  cancelButtonHandler: Function;
  submitButtonHandler: Function;
}

const Modal: React.FC<ModalProps> = ({
  title,
  labels,
  buttonText,
  cancelButtonHandler,
  submitButtonHandler,
}) => {
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <div className="dark-background">
      <div className="modal">
        <div className="App">
          <div className="modal-header font">{title}</div>
          <div className="modal-body">
            <form onSubmit={submitHandler}>
              {labels.map((label) => (
                <div key={label.label} className="modal-input">
                  <label htmlFor={label.label} className="modal-label font">
                    {label.label}
                  </label>
                  <Input required={true} type={label.type} placeholder="" />
                </div>
              ))}
              <div className="button-group">
                <Button
                  text="cancel"
                  color="cancel"
                  onClick={() => cancelButtonHandler()}
                  type="button"
                />
                <Button
                  text={buttonText}
                  color={buttonText}
                  onClick={() => submitButtonHandler()}
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
