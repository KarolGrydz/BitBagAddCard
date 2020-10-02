import axios from 'axios';

const btn = document.querySelector('#addToCard');
const form = document.querySelector('#sylius-product-adding-to-cart');
const success = document.createElement('div');
success.classList.add(
  'ui',
  'icon',
  'positive',
  'message',
  'sylius-flash-message'
);

const productId = '18';
btn.addEventListener('click', (e) => {
  //   e.preventDefault();
  console.log('hello');
  if (form.classList.contains('loading')) {
    form.classList.remove('loading');
  } else {
    setTimeout(() => {
      form.classList.remove('loading');
    }, 500);
  }
  //   const onSuccess = document.createElement('div');
  //   onSuccess.classList.add();
  //   const onError = document.querySelector('#sylius-cart-validation-error');
  //   axios
  //     .post(`/en_US/ajax/cart/add?productId=${productId}`, {})
  //     .then((res) => {
  //       onError.classList.add('hidden');
  //     })
  //     .catch((err) => {
  //       onError.classList.remove('hidden');
  //       const validationMsg = '';
  //     });
});

// ui icon positive message sylius-flash-message
