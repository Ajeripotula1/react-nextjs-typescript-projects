import React from "react";
import { useAppContext } from "./context";
import { FaTimes } from "react-icons/fa";
const Modal = () => {
  const { isModalOpen, closeModal } = useAppContext();
  console.log(isModalOpen);
  return (
    <section className={`modal-overlay ${isModalOpen ? "" : "hide"}`}>
      <div className="modal-container">
        <button className="x-btn" onClick={closeModal}>
          <FaTimes />
        </button>
        <h3>Modal Content</h3>
      </div>
    </section>
  );
};

export default Modal;
