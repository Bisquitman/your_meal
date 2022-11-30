import { modalProductTitle, modalProductImage, modalProductDescription, ingredientsList, ingredientsCalories, modalProductPriceCount, modalProduct } from "./elements.js";

//! Функция для формирования и открытия модального окна
export const openModal = (product) => {
  //! Формирование содержимого модального окна

  modalProductTitle.textContent = product.title; // Название
  modalProductImage.src = product.image; // Картинка

  //* Список ингредиентов
  // 1 способ
  ingredientsList.textContent = '';
  for (let i = 0; i < product.ingredients.length; i++) {
    const li = document.createElement('li');
    li.className = 'ingredients__item';
    li.textContent = product.ingredients[i];
    ingredientsList.append(li);
  }

  // 2 способ
  ingredientsList.textContent = '';
  product.ingredients.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'ingredients__item';
    li.textContent = item;
    ingredientsList.append(li);
  });

  // 3 способ (рекомендуемый!)
  ingredientsList.textContent = '';
  const ingredientsListItems = product.ingredients.map((item) => {
    const li = document.createElement('li');
    li.className = 'ingredients__item';
    li.textContent = item;
    return li;
  });
  ingredientsList.append(...ingredientsListItems);

  // Цена
  modalProductPriceCount.textContent = new Intl.NumberFormat('ru', {
    style: 'decimal',
    maximumFractionDigits: 0,
  }).format(product.price);
  // Калории
  ingredientsCalories.innerHTML = `${new Intl.NumberFormat('ru', {
    style: 'unit',
    unit: 'gram',
    maximumFractionDigits: 0,
  }).format(product.weight)}, ккал&nbsp;${new Intl.NumberFormat('ru', {
    style: 'decimal',
    maximumFractionDigits: 0,
  }).format(product.calories)}`;
  // Описание
  modalProductDescription.textContent = product.description;

  //! Открытие модального окна
  modalProduct.classList.add('modal_open');
};
