# BitBagAddCard

1. Plik bundle.js nie działał po kompilacji w syliusie
2. Fetch pojawiał się błąd "Cannot check if an unsubmitted form is valid. Call Form::isSubmitted() before Form::isValid()." Próbowałem użyć submit() na form ale wtedy mnie przekierowuje.
3. \_addToCart.html.twig w tym pliku dodałem id='addToCard' do buttonu
4. {% include '@SyliusUi/_javascripts.html.twig' with {'path': 'assets/shop/js/addToCard.js'} %} coś takiego dodałem do \_scripts.html.twig w sylius\vendor\sylius\sylius\src\Sylius\Bundle\ShopBundle\Resources\views żeby mój plik js był widoczny
