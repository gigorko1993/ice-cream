(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-buy-cream-open]'),
      closeModalBtn: document.querySelector('[data-buy-cream-close]'),
      modal: document.querySelector('[data-buy-cream]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle("buy-cream-open");
      refs.modal.classList.toggle('is-hidden');
    }
  })();