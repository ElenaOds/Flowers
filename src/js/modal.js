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
      closeModalCurrentBtn: document.querySelector("[data-modal-contact-close-curent]"),
      modal: document.querySelector("[data-modal-contact]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.openModalBtnOrder.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.closeModalCurrentBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle("modal-open");
      refs.modal.classList.toggle("is-hidden-contact");
    }

  })();

  (() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-final-open]"),
      closeModalBtn: document.querySelector("[data-modal-final-close]"),
      closeModalFinalBtn: document.querySelector("[data-modal-final-btn-close]"),
      modal: document.querySelector("[data-modal-final]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalFinalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle("modal-open");
      refs.modal.classList.toggle("is-hidden-final");
    }

  })();