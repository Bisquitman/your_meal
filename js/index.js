const catalogList = document.querySelector('.catalog__list');
const modalProduct = document.querySelector('.modal_product');

const product = {
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

// Формирование содержимого модального окна

const modalProductTitle = document.querySelector('.modal-product__title');
const modalProductImage = document.querySelector('.modal-product__image');
const modalProductDescription = document.querySelector('.modal-product__description');
const ingredientsList = document.querySelector('.ingredients__list');
const ingredientsCalories = document.querySelector('.ingredients__calories');
const modalProductPriceCount = document.querySelector('.modal-product__price-count');

modalProductTitle.textContent = product.title; // Название
modalProductImage.src = product.image; // Картинка

// Список ингредиентов 
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

modalProductPriceCount.textContent = new Intl.NumberFormat("ru", {style: "decimal",minimumFractionDigits:0}).format(product.price);
ingredientsCalories.innerHTML = `${new Intl.NumberFormat('ru', {
  style: 'decimal',
  minimumFractionDigits: 0,
}).format(product.weight)}&nbsp;г, ккал&nbsp;${new Intl.NumberFormat('ru', {
  style: 'decimal',
  minimumFractionDigits: 0,
}).format(product.calories)}`;
modalProductDescription.textContent = product.description;

catalogList.addEventListener('click', (e) => {
  if (e.target.closest('.product__detail') || e.target.closest('.product__image')) {
    modalProduct.classList.add('modal_open');
  }
});

modalProduct.addEventListener('click', (e) => {
  if (e.target.closest('.modal__close') || e.target === modalProduct) {
    modalProduct.classList.remove('modal_open');
  }
});
