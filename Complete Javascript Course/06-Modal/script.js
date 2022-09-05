'use strict';

const modalWindow = document.querySelector('.modal');
const buttonModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.close-modal');

function openModal() {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModal() {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let button = 0; button < buttonModal.length; button++) {
  buttonModal[button].addEventListener('click', openModal);
}

buttonCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModal();
  }
});
