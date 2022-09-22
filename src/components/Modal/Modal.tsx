import React, { FormEvent, useState } from 'react';
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
  const [input, setInput] = useState({});
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    console.log('submitted ', input);
    submitButtonHandler(input);
    cancelButtonHandler();
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;
    setInput((input) => ({
      ...input,
      [name]: value,
    }));
  };
  return (
    <div className="dark-background">
      <div className="modal">
        <div className="App">
          <div className="modal-header font">{title}</div>
          <div className="modal-body">
            <form onSubmit={(event) => submitHandler(event)}>
              {labels.map((label) => (
                <div key={label.label} className="modal-input">
                  <label htmlFor={label.label} className="modal-label font">
                    {label.label}
                  </label>
                  <Input
                    name={label.label}
                    onChange={onChange}
                    required={true}
                    type={label.type}
                    placeholder=""
                  />
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
                  onClick={() => {}}
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
