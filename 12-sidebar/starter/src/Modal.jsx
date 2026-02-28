import React from "react";
import { useAppContext } from "./context";
import { FaTimes } from "react-icons/fa";
const Modal = () => {
  const { closeModal } = useAppContext();
  return (
    <section className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close" onClick={closeModal}>
          <FaTimes />
        </button>
        <h3>Modal Content</h3>
      </div>
    </section>
  );
};

export default Modal;
