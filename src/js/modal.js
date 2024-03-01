(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle("modal-open");
      refs.modal.classList.toggle("is-hidden");
    }

  })();

  (() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-contact-open]"),
      openModalBtnOrder: document.querySelector("[data-modal-contact-open-order]"),
      closeModalBtn: document.querySelector("[data-modal-contact-close]"),
      modal: document.querySelector("[data-modal-contact]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.openModalBtnOrder.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle("modal-open");
      refs.modal.classList.toggle("is-hidden-contact");
    }

  })();
