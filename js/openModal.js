import { API_URL, PREFIX_PRODUCT } from "./const.js";
import { modalProductTitle, modalProductImage, modalProductDescription, ingredientsList, ingredientsCalories, modalProductPriceCount, modalProduct, modalProductBtn } from "./elements.js";
import { getData } from "./getData.js";

//! Функция для формирования и открытия модального окна
export const openModal = async (id) => {
  const product = await getData(`${API_URL}${PREFIX_PRODUCT}/${id}`)
  
  //! Формирование содержимого модального окна

  modalProductTitle.textContent = product.title; // Название
  modalProductImage.src = `${API_URL}/${product.image}`; // Картинка

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

  // Записываем id продукта (из базы) в data-атрибут data-id-product
  modalProductBtn.dataset.idProduct = product.id;

  //! Открытие модального окна
  modalProduct.classList.add('modal_open');
};
