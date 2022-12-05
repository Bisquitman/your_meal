import { modalProduct } from './elements.js';

export const closeModal = (e) => {
  if (e.key === 'Escape') {
    modalProduct.classList.remove('modal_open');
    document.removeEventListener('keydown', closeModal);
  }
};
