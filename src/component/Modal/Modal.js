import React from 'react';
import './Modal.css'; // Import your CSS for styling the modal

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        {/* <button onClick={onClose}>Close Modal</button> */}
      </div>
    </div>
  );
};

export default Modal;
