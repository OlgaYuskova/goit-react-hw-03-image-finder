import React from 'react';

const Modal = ({ imageUrl, closeModal }) => (
  <div className="overlay" onClick={closeModal}>
    <div className="modal">
      <img src={imageUrl} alt="Large" />
    </div>
  </div>
);

export default Modal;