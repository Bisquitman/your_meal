import { cartInit } from './cart.js';
import { closeModal } from './closeModal.js';
import { catalogList, modalProduct, modalProductBtn } from './elements.js';
import { navigationListController } from './navigationListController.js';
import { openModal } from './openModal.js';
import { renderListProduct } from './renderListProduct.js';

catalogList.addEventListener('click', (e) => {
  if (
    e.target.closest('.product__detail') ||
    e.target.closest('.product__image')
  ) {
    const id = e.target.closest('.product').dataset.idProduct;
    openModal(id);
    modalProductBtn.focus();
    document.addEventListener('keydown', closeModal);
  }
});

modalProduct.addEventListener('click', (e) => {
  if (e.target.closest('.modal__close') || e.target === modalProduct) {
    modalProduct.classList.remove('modal_open');
  }
});

const init = () => {
  renderListProduct();
  navigationListController();
  cartInit();
};

init();
