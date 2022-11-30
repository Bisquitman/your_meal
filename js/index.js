import { catalogList, modalProduct } from "./elements.js";
import { navigationListController } from "./navigationListController.js";
import { openModal } from "./openModal.js";
import { renderListProduct } from "./renderListProduct.js";

const burgerMax = {
  title: 'Бургер Макс',
  price: 10_000,
  weight: 5000,
  calories: 15_000,
  description: 'Огромный бургер! Съешь сам или поделись с компанией!',
  image: 'img/megaburger.jpg',
  ingredients: [
    'Пшеничная булочка',
    'Мега котлета из говядины',
    'Много сыра',
    'Листья салата',
    'Чипотл',
  ],
};

//* -------------------------------------- *//

catalogList.addEventListener('click', (e) => {
  if (e.target.closest('.product__detail') || e.target.closest('.product__image')) {
    openModal(burgerMax);
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
};

init();