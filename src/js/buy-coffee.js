(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-buy-coffee-open]'),
      closeModalBtn: document.querySelector('[data-buy-coffee-close]'),
      modal: document.querySelector('[data-buy-coffee]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle("buy-coffee-open");
      refs.modal.classList.toggle('is-hidden');
    }
  })();