const products = document.getElementsByClassName('products');
const product = document.getElementsByClassName('product');
const cartProducts = document.getElementsByClassName('cart__products');
const cartProduct = document.getElementsByClassName('cart__product');

products[0].addEventListener('click', (event) => {
    // Увеличение количества товара
    if (event.target.classList.contains('product__quantity-control_inc')) {
        event.preventDefault();
        const productQuantity = event.target.previousElementSibling;
        if (productQuantity) {
            productQuantity.innerText++;
        }
    }

    // Уменьшение количества товара
    if (event.target.classList.contains('product__quantity-control_dec')) {
        event.preventDefault();
        const productQuantity = event.target.nextElementSibling;
        if (productQuantity) {
            productQuantity.innerText--;

            if (productQuantity.innerText < 1) {
                productQuantity.innerText = 1;
            }
        }
    }

    // Добавление товара в корзину
    if (event.target.classList.contains('product__add')) {
        event.preventDefault();

        const product = event.target.closest('.product');
        const cartProdID = product.getAttribute('data-id');
        const cartProductValue = product.querySelector('.product__quantity-value').innerText;

        // Поиск существующего товара в корзине
        const existingCartProduct = [...cartProducts[0].getElementsByClassName('cart__product')]
            .find(cartProd => cartProd.getAttribute('data-id') === cartProdID);

        if (existingCartProduct) {
            // Если товар уже есть в корзине, увеличиваем его количество
            const existingCartProductCount = existingCartProduct.querySelector('.cart__product-count');
            existingCartProductCount.innerText = parseInt(existingCartProductCount.innerText) + parseInt(cartProductValue);
        } else {
            // Если товара нет в корзине, создаем новый элемент
            let cartProduct = document.createElement('div');
            cartProduct.classList.add('cart__product');
            cartProduct.setAttribute('data-id', cartProdID);

            const cartProductImage = product.querySelector('img').cloneNode(true);
            let cartProductCount = document.createElement('div');
            cartProductCount.classList.add('cart__product-count');
            cartProductCount.textContent = cartProductValue;

            cartProduct.append(cartProductImage, cartProductCount);
            cartProducts[0].appendChild(cartProduct);
        }
    }
});