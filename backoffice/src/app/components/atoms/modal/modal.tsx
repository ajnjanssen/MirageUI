"use client";

import React from "react";

interface ModalProps {
  id: string;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ id, title, subtitle, children }) => {
  const closeModal = () => {
    const modal = document.getElementById(id) as HTMLDialogElement;
    if (modal) {
      modal.close();
    }
  };

  return (
    <dialog
      id={id}
      className="sticky hidden  z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-sm text-gray-600">{subtitle}</p>
        </div>
        <div className="mb-4">{children}</div>
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 rounded"
            onClick={closeModal}
          >
            Close
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={closeModal}
          >
            Confirm
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
