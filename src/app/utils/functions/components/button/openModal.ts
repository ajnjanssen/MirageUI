export const openModal = (shouldOpenModal: boolean, modalId?: string) => {
  if (shouldOpenModal && modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      (modal as HTMLDialogElement).showModal();
    }
  }
};
