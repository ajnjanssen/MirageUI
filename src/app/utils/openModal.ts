import React from "react";

export const openModal = (
  shouldOpenModal: boolean,
  modalId: string | undefined
) => {
  if (shouldOpenModal) {
    // Logic to open the modal
    console.log("Modal opened");
  }
};
