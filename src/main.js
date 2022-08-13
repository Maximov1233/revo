const products = [{
        'img': 1,
        'price': '99.000',
        'name': 'REVO Morning',
        'info': 'Bitter, sweet aftertaste, floral scen'
    },
    {
        'img': 2,
        'price': '85.000',
        'name': 'REVO Everyday',
        'info': 'Balance, bitter aftertaste, chocolate taste'
    }, {
        'img': 3,
        'price': '139.000',
        'name': 'REVO Origin',
        'info': 'Sweet aftertaste, less bitter, strawberry sour taste'
    }, {
        'img': 4,
        'price': '75.000',
        'name': 'REVO Bold',
        'info': 'Bold, bitter, traditiona'
    },
];

// show products

const productsList = document.querySelector('.products-list');

let productsShow = () => {
    products.forEach(product => {
        let item = document.createElement('div');
        item.classList.add('product');
        item.innerHTML = `
            <div class="product-left">
                <div class="product-image"><img src="./img/main/products/${product.img}.png" alt="1"></div>
            </div>
            <div class="product-right">
                <div class="product-price">
                    <p>${product.price}</p>
                </div>
                <div class="product-name">
                    <h5>${product.name}</h5>
                </div>
                <div class="product-info">
                    <p>${product.info}</p>
                </div>
                <div class="product-buttons">
                    <div class="product-buy"><button class="button-buy">Buy now</button></div>
                    <div class="product-details"><button class="button-details">Details</button></div>
                </div>
            </div>
        `;
        productsList.append(item);
    });
};

const headerCartQuantity = document.querySelector('.header-cart__quantity'),
    headerCartQuantityText = headerCartQuantity.querySelector('p');

productsShow();

const cartDataRefresh = () => {

    const quantityButtons = document.querySelectorAll('cart-item__quantity-minus, .cart-item__quantity-add');
    console.log(quantityButtons);

    quantityButtons.forEach(button => {
        button.onclick = () => {
            let buttonType = button.classList.value,
                price = button.closest('.cart-item').querySelector('.cart-item__price'),
                priceText = parseInt(price.textContent),
                currentQuantity = button.closest('.cart-item').querySelector('.cart-item__quantity-text'),
                currentQuantityText = parseInt(currentQuantity.textContent);


            if (buttonType === 'cart-item__quantity-minus') {
                if (currentQuantityText > 1) {
                    currentQuantity.innerHTML = currentQuantityText - 1;
                    price.innerHTML = `<p>${priceText - priceText / currentQuantityText}.000</p>`;
                } else {
                    let item = currentQuantity.closest('.cart-item'),
                        itemsList = document.querySelector('.cart-modal__list');

                    item.remove();

                    if (!itemsList.textContent) {
                        cartModal.style.display = '';
                        setTimeout(() => {
                            alert("Sorry, your cart is empty now. Add some items to continue shopping");
                        }, 200);
                    }

                    headerCartQuantityRefresh();
                }
            } else {
                console.log(currentQuantityText);
                currentQuantity.innerHTML = currentQuantityText + 1;
                price.innerHTML = `<p>${priceText + priceText / currentQuantityText}.000</p>`;
            }
        }
    });
};

const buttonsBuy = document.querySelectorAll('.button-buy'),
    buyModal = document.querySelector('.buy-modal__wrap');

let cartModal = document.querySelector('.cart-modal__wrap'),
    cartList = cartModal.querySelector('.cart-modal__list'),
    cartClose = cartModal.querySelector('.cart-modal__close');

cartClose.addEventListener('click', () => {
    cartModal.style.display = '';
});

const headerCart = document.querySelector('.header-cart');

headerCart.addEventListener('click', () => {
    let cartList = cartModal.querySelector('.cart-modal__list');

    if (cartList.textContent !== '') {
        cartModal.style.display = 'flex';
    } else {
        alert("Sorry, your cart is empty now. Add some items to continue shopping");
    }

});

buttonsBuy.forEach(button => {
    button.addEventListener('click', () => {
        // console.log('a');
        let productName = button.closest('.product-right').children[1].textContent.trim();

        products.forEach(product => {
            if (product.name === productName) {
                let cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
                    <div class="cart-item__name">
                        <p>${product.name}</p>
                    </div>
                    <div class="cart-item__quantity">
                        <div class="cart-item__quantity-minus">
                            <img src="./img/modals/cart/minus.png" alt="minus">
                        </div>
                        <div class="cart-item__quantity-text">1</div>
                        <div class="cart-item__quantity-add">
                            <img src="./img/modals/cart/add.png" alt="add">
                        </div>
                    </div>
                    <div class="cart-item__price">
                        <p>${product.price}</p>
                    </div>
                `;
                cartList.append(cartItem);
            }
        });
        // document.body.style.overflowY = 'hidden';
        buyModal.style.display = 'flex';

        const buttonContinue = buyModal.querySelector('.button-continue'),
            buttonCart = buyModal.querySelector('.button-cart');

        buttonContinue.addEventListener('click', () => {
            buyModal.style.display = '';
            document.body.style.overflowY = '';
        });

        buttonCart.addEventListener('click', () => {
            buyModal.style.display = '';
            cartModal.style.display = 'flex';
            document.body.style.overflowY = '';
        });

        headerCartQuantityRefresh();
        cartDataRefresh();
    });
});

// refresh quantity of items in cart

const headerCartQuantityRefresh = () => {
    let cartList = document.querySelector('.cart-modal__list');

    if (cartList.childNodes.length > 0) {
        headerCartQuantity.style.display = 'flex';
        headerCartQuantityText.innerHTML = cartList.childNodes.length;
    } else {
        headerCartQuantity.style.display = '';
    }
}

// giftset tabs

let tabs = document.querySelectorAll('.tab'),
    toggles = document.querySelectorAll('.toggle');

toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        let toggleId = toggle.id;

        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i].id !== toggleId) {
                tabs[i].style.display = 'none';
            } else {
                tabs[i].style.display = 'flex';
            }
        }
        for (let i = 0; i < toggles.length; i++) {
            toggles[i].classList.remove('toggle-active');
        }
        toggle.classList.add('toggle-active');
    });
});