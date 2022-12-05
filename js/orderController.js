import { clearCart } from './cart.js';
import { ORDER_URL } from './const.js';
import {
  modalDelivery,
  modalDeliveryContainer,
  modalDeliveryForm,
} from './elements.js';

export const orderController = (getCart) => {
  const checkDelivery = () => {
    if (modalDeliveryForm.format.value === 'pickup') {
      modalDeliveryForm['address-info'].classList.add(
        'modal-delivery__fieldset-input_hide',
      );
    }

    if (modalDeliveryForm.format.value === 'delivery') {
      modalDeliveryForm['address-info'].classList.remove(
        'modal-delivery__fieldset-input_hide',
      );
    }
  };
  modalDeliveryForm.addEventListener('change', checkDelivery);

  modalDeliveryForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(modalDeliveryForm);
    const data = Object.fromEntries(formData);
    data.order = getCart();

    fetch(ORDER_URL, {
      method: 'post',
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        clearCart();

        modalDeliveryContainer.innerHTML = `
          <h2>Большое спасибо за заказ!</h2>
          <h3>Ваш номер заказа: ${response.id}</h3>
          <p></p>
          <p>В ближайшее время с вами свяжется наш менеджер <b>${response.manager}</b></p>
          <p></p>
          <h4>Ваш заказ:</h4>
        `;

        const ol = document.createElement('ol');
        data.order.forEach((item) => {
          console.log('item: ', item);
          ol.insertAdjacentHTML('beforeend', `
            <li>${item.id}: ${item.count} шт.</li>
          `);
        });
        modalDeliveryContainer.insertAdjacentElement('beforeend', ol);

        // modalDeliveryForm.reset();
        // checkDelivery();
      });
  });
};
