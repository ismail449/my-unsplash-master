import React from 'react';
import Input from '../Input/Input';
import './Modal.css';

interface ModalProbs {
  title: string;
  labels: { label: string; type: string }[];
}

const Modal: React.FC<ModalProbs> = ({ title, labels }) => {
  return (
    <div className="dark-background">
      <div className="modal">
        <div className="App">
          <div className="modal-header font">{title}</div>
          <div className="modal-body">
            <form>
              {labels.map((label) => (
                <div key={label.label} className="modal-input">
                  <label htmlFor={label.label} className="modal-label font">
                    {label.label}
                  </label>
                  <Input required={true} type={label.type} placeholder="" />
                </div>
              ))}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
