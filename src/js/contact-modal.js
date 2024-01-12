// import Inputmask from 'inputmask';
// import sendMessage from './tgBotSender';

const form = document.querySelector('.contact-modal-form');
const refs = {
  closeModalBtn: document.querySelector('[data-contact-modal-close]'),
  contactOpenModalBtns: document.querySelectorAll('[data-contact-modal-open]'),
  contactModal: document.querySelector('[data-contact-modal]'),
  contactBackdrop: document.querySelector('.contact-backdrop'),
};
(() => {
  refs.contactOpenModalBtns.forEach(element =>
    element.addEventListener('click', toggleModal.bind(null, refs, true))
  );
  refs.contactBackdrop.addEventListener(
    'click',
    handleBackdropClick.bind(null, refs, true)
  );

  function handleBackdropClick(refs, isContactModal = false, event) {
    if (event.target === refs.contactBackdrop) {
      toggleModal(refs, isContactModal);
    }
  }
})();

function toggleModal(refs, isContactModal = false) {
  refs.contactModal.classList.toggle('backdrop--is-hidden');
}
