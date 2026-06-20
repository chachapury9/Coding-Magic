(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
(() => {
  const refs = {
    openModalBtn2: document.querySelector('[data-modal-open-thank]'),
    closeModalBtn2: document.querySelector('[data-modal-close-thank]'),
    modal2: document.querySelector('[data-modal-thank]'),
  };

  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.closeModalBtn2.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal2.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
const btnModal = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');

btnModal.addEventListener('click', e => {
  modal.classList.add('is-hidden');
});

window.addEventListener('DOMContentLoaded', () => {
  const welcomeModal = document.querySelector('[data-modal]');
  if (welcomeModal) {
    welcomeModal.classList.remove('is-hidden');
  }
});
document.querySelector('.modal-form').addEventListener('submit', e => {
  e.preventDefault();
  backdrop.classList.add('is-hidden');
});
console.log("js працює")

const userName = document.querySelector("#username")
const inpModal = document.querySelector(".inp-modal")
inpModal.addEventListener('input', () => {
  userName.textContent = inpModal.value.trim() || 'User';
});