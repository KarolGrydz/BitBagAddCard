const btn = document.querySelector('#addToCard');
if (btn) {
  const form = document.querySelector('#sylius-product-adding-to-cart');
  const success = document.createElement('div');
  const closeIcon = document.createElement('i');
  const checkmarkIcon = document.createElement('i');
  const content = document.createElement('div');
  const header = document.createElement('div');
  const body = document.createElement('p');
  const divider = document.querySelector('header');
  const cartPrice = document.querySelector('#sylius-cart-total');

  success.classList.add(
    'ui',
    'icon',
    'positive',
    'message',
    'sylius-flash-message'
  );

  closeIcon.classList.add('close', 'icon');
  checkmarkIcon.classList.add('checkmark', 'icon');
  content.classList.add('content');
  header.classList.add('header');

  content.appendChild(header);
  content.appendChild(body);

  header.innerHTML = 'Success';
  body.innerHTML = 'Item has been added to cart';

  closeIcon.addEventListener('click', () => success.remove());

  const productId = {
    productId: form.action.slice(
      form.action.indexOf('=') + 1,
      form.action.length
    ),
  };

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    // form.submit();
    success.appendChild(closeIcon);
    success.appendChild(checkmarkIcon);
    success.appendChild(content);
    divider.appendChild(success);
    setTimeout(() => {
      form.classList.remove('loading');
    }, 500);

    cartPrice.innerHTML = '$10';
  });

  btn.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(form.action, {
      method: 'POST',
      body: JSON.stringify(productId),
    })
      .then((res) => res.json())
      .then((data) => console.log('success', data))
      .catch((err) => console.log('error', err));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });
}
