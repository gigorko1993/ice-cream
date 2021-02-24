(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-buy-shake-open]'),
      closeModalBtn: document.querySelector('[data-buy-shake-close]'),
      modal: document.querySelector('[data-buy-shake]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle("buy-shake-open");
      refs.modal.classList.toggle('is-hidden');
    }
  })();