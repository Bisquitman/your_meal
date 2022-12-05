import { API_URL } from "./const.js";

//! Формирование карточки
export const createCardProduct = (product) => {
  const li = document.createElement('li');
  li.className = 'catalog__item';

  li.innerHTML = `
    <article class="product" data-id-product="${product.id}">
      <img class="product__image" src="${API_URL}/${product.image}" alt="${product.title}">

      <p class="product__price">${new Intl.NumberFormat('ru', {
        style: 'decimal',
        maximumFractionDigits: 0,
      }).format(product.price)}<span class="currency">&nbsp;₽</span></p>

      <h3 class="product__title">
        <button class="product__detail">${product.title}</button>
      </h3>

      <p class="product__weight">${new Intl.NumberFormat('ru', {
        style: 'unit',
        unit: 'gram',
        maximumFractionDigits: 0,
      }).format(product.weight)}</p>

      <button class="product__add">Добавить</button>
    </article>
  `;

  return li;
};
