export default class Modal {
  constructor(id) {
    this.modal = document.getElementById(id);
    this.overlay = this.modal.parentElement;

    this.listenCloseButton();
  }

  open() {
    this.modal.classList.add("modal-showed");
    this.overlay.classList.add("modal-showed");
  }

  close() {
    this.modal.classList.remove("modal-showed");
    this.overlay.classList.remove("modal-showed");
  }

  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }

  listenCloseButton() {
    const closeButton = this.modal.querySelector(".modal__close");

    closeButton.addEventListener("click", () => {
      this.close();
    });
  }
}
