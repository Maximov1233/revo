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

const giftsets = [{
        'img': 1,
        'price': '285.000',
        'name': 'Giftset "Vietnamese filter coffee"',
        'info': `Great gift for coffee connoisseurs. Coffee beans are carefully selected by Revo,
                roasted and ground according to the technology and know-how learned from famous
                artisans, along with the love and passion of coffee makers… creating pure cups of
                coffee only exclusively for you.`,
        'beans': 'Fine Robusta Blend',
        'height': '700 - 800m'
    },
    {
        'img': 2,
        'price': '325.000',
        'name': 'Giftset "Cambodian non-filter coffee"',
        'info': `Great gift for coffee connoisseurs. Coffee beans are carefully selected by Revo,
                roasted and ground according to the technology and know-how learned from famous
                artisans, along with the love and passion of coffee makers… creating pure cups of
                coffee only exclusively for you.`,
        'beans': 'La Vida Loca',
        'height': '300 - 400m'
    },
    {
        'img': 3,
        'price': '455.000',
        'name': 'Giftset "Bangladeshi eco-friendly coffee"',
        'info': `Great gift for coffee connoisseurs. Coffee beans are carefully selected by Revo,
                roasted and ground according to the technology and know-how learned from famous
                artisans, along with the love and passion of coffee makers… creating pure cups of
                coffee only exclusively for you.`,
        'beans': 'Como Esperanto',
        'height': '1100 - 1200m'
    },
];

const combos = [{
        'img': 1,
        'price': '147.000',
        'oldPrice': '155.000',
        'name': 'Bold Revo Combo',
        'info': 'The caffeine content in Revo Bold is strong enough to keep you awake to work...'
    },
    {
        'img': 2,
        'price': '156.000',
        'oldPrice': '165.000',
        'name': 'Bold Revo Everyday',
        'info': 'Revo Everyday is a blend of the bitter taste of Robusta beans and the aroma of...'
    },
    {
        'img': 3,
        'price': '260.000',
        'oldPrice': '275.000',
        'name': 'Combo Revo Honey',
        'info': 'Honey – in the name Revo Honey comes from the method of processing Arabica beans...'
    },
];

const giftsetShow = () => { // show giftsets

    const giftsetList = document.querySelector('.giftset-list__tabs');

    for (let i = 0; i < giftsets.length; i++) {
        let tab = document.createElement('div');
        tab.classList.add('tab');
        tab.id = i + 1;
        tab.innerHTML = `
            <div class="tab-image">
                <img src="./img/main/giftset/${giftsets[i].img}.png" alt="${i + 1}">
            </div>
            <div class="tab-text">
                <div class="tab-price">
                    <p>${giftsets[i].price}</p>
                </div>
                <div class="tab-name">
                    <h5>${giftsets[i].name}</h5>
                </div>
                <div class="tab-info">
                    <p>${giftsets[i].info}</p>
                </div>
                <div class="tab-origin__wrap">
                    <div class="tab-origin">
                        <div class="tab-origin__image tab-beans__image">
                            <img src="./img/main/giftset/beans.png" alt="beans">
                        </div>
                        <div class="tab-origin__text tab-beans__text">
                            <p>Kind of bean</p>
                            <p>${giftsets[i].beans}</p>
                        </div>
                    </div>
                    <div class="tab-origin">
                        <div class="tab-origin__image tab-height__image">
                            <img src="./img/main/giftset/mountain.png" alt="mountain">
                        </div>
                        <div class="tab-origin__text tab-height__text">
                            <p>Height</p>
                            <p>${giftsets[i].height}</p>
                        </div>
                    </div>
                </div>
                <div class="tab-buttons">
                    <div class="tab-buy"><button class="button-buy">Buy now</button></div>
                    <div class="tab-details"><button class="button-details">Details</button></div>
                </div>
            </div>
            `;

        giftsetList.append(tab);
    }
}

// show products

const productsShow = () => { // show products

    const productsList = document.querySelector('.products-list');

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

const comboShow = () => {
    
    const comboList = document.querySelector('.combo-list'); 

    for (let i = 0; i < combos.length; i++) {
        let item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `
            <div class="item-image">
                <img src="./img/main/combo/${combos[i].img}.png" alt="${i + 1}">
            </div>
            <div class="item-text">
                <div class="item-price">
                    <p class="new-price">${combos[i].price}</p>
                    <p class="old-price">${combos[i].oldPrice}</p>
                </div>
                <div class="item-name">
                    <h5>${combos[i].name}</h5>
                </div>
                <div class="item-info">
                    <p>${combos[i].info}</p>
                </div>
                <div class="item-buttons">
                    <div class="item-buy"><button class="button-buy">Buy now</button></div>
                    <div class="item-details"><button class="button-details">Details</button></div>
                </div>
            </div>
            `;

        comboList.append(item);
    }
}

giftsetShow();
productsShow();
comboShow();

const headerCartQuantity = document.querySelector('.header-cart__quantity'),
    headerCartQuantityText = headerCartQuantity.querySelector('p');

const cartDataRefresh = () => { // after adding item to the cart tracking changes of quantity of the items

    const quantityButtons = document.querySelectorAll('.cart-item__quantity-minus, .cart-item__quantity-add');

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
                        document.body.classList.remove('ov-hidden');
                        setTimeout(() => {
                            alert("Sorry, your cart is empty now. Add some items to continue shopping");
                        }, 200);
                    }

                    headerCartQuantityRefresh();
                }
            } else {
                currentQuantity.innerHTML = currentQuantityText + 1;
                price.innerHTML = `<p>${priceText + priceText / currentQuantityText}.000</p>`;
            }

            totalPrice();
        }
    });
};

const buttonsBuy = document.querySelectorAll('.button-buy'),
    buyModal = document.querySelector('.buy-modal__wrap'),
    buyModalWindow = buyModal.querySelector('.buy-modal');

let cartModal       = document.querySelector('.cart-modal__wrap'),
    cartModalWindow = cartModal.querySelector('.cart-modal'),
    cartList        = cartModal.querySelector('.cart-modal__list'),
    cartClose       = cartModal.querySelector('.cart-modal__close'),
    cartTotal       = cartModal.querySelector('.cart-modal__total p');

cartClose.addEventListener('click', () => {
    cartModal.style.display = '';
    document.body.classList.remove('ov-hidden');
});

const headerCart = document.querySelector('.header-cart');

headerCart.addEventListener('click', () => {
    let cartList = cartModal.querySelector('.cart-modal__list');

    if (cartList.childNodes.length > 0) {
        cartModal.style.display = 'flex';
        cartModalWindow.classList.add('popup');
    } else {
        alert("Sorry, your cart is empty now. Add some items to continue shopping");
    }
});

const buttonsDetails = document.querySelectorAll('.button-details'),
    detailsModal = document.querySelector('.details-modal__wrap'),
    detailsModalWindow = detailsModal.querySelector('.details-modal'),
    detailsModalText = detailsModal.querySelector('.details-modal__text'),
    detailsModalClose = detailsModal.querySelector('.details-modal__close');

buttonsDetails.forEach(button => {
    button.addEventListener('click', () => {
        let productName,
            type;        // name and type of the product

        switch (button.parentNode.className) { // finding the name of the goods
            case 'product-details':
                productName = button.closest('.product-right').children[1].textContent.trim();
                type = 'products';
                break;

            case 'tab-details':
                productName = button.closest('.tab-text').children[1].textContent.trim();
                type = 'giftsets';
                break;

            case 'item-details':
                productName = button.closest('.item-text').children[1].textContent.trim();
                type = 'combos';
                break;
        }

        const data = [...products, ...giftsets, ...combos];

        data.forEach(product => {
            if (product.name === productName) {
                let info,
                beans,
                height;

                if (type === 'giftsets') {
                    info = product.info,
                    beans = product.beans,
                    height = product.height;

                    detailsModalText.innerHTML = `
                        <p>${info}</p>
                        <p>${beans}</p>
                        <p>${height}</p>
                    `;
                } 

                detailsModal.style.display = 'flex';
                detailsModalWindow.classList.add('popup');

                detailsModalClose.addEventListener('click', () => {
                    detailsModal.style.display = '';
                });

            }
        });
    });
});    

// update total price of the whole cart

const totalPrice = () => {
    if (cartList.textContent) { // checking whether cart has any items
        let totalPrice = 0;
        let cartItems = cartList.querySelectorAll('.cart-item');

        cartItems.forEach(item => {
            let itemPrice = parseInt(item.querySelector('.cart-item__price').textContent.trim());
            totalPrice += itemPrice;
        });

        cartTotal.innerHTML = `Total amount: ${totalPrice}.000`;
    }
};

const cartItemAdd = (productName) => { // adding item to the cart

    const data = [...products, ...giftsets, ...combos];

    data.forEach(product => { // going through products data
        if (product.name === productName) { // getting a match
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

            totalPrice(cartItem);
        }
    });

    buyModal.style.display = 'flex';
    buyModalWindow.classList.add('popup');
    document.body.classList.add('ov-hidden');

    const buttonContinue = buyModal.querySelector('.button-continue'),
        buttonCart = buyModal.querySelector('.button-cart');

    buttonContinue.addEventListener('click', () => {
        buyModal.style.display = '';
        document.body.classList.remove('ov-hidden');
    });

    buttonCart.addEventListener('click', () => {
        buyModal.style.display = '';
        cartModal.style.display = 'flex';
        cartModalWindow.classList.add('popup');
    });
}

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

const cartItemsCheck = (arr, selector, name) => { // checks if there is any matching products
    return arr.every(item => item.querySelector(`.${selector}`).textContent.trim() !== name);
}

// const productNameFunction = (button) => {
//     let productName;
//     console.log(button);
//     switch (button) { // finding the name of the goods
//         case 'product-buy':
//             return productName = button.closest('.product-right').children[1].textContent.trim();
         

//         case 'tab-buy':
//             return productName = button.closest('.tab-text').children[1].textContent.trim();
           

//         case 'item-buy':
//             return productName = button.closest('.item-text').children[1].textContent.trim();
            
//     }
// }

buttonsBuy.forEach(button => { // tracking click on button's-buy
    button.addEventListener('click', () => {      
        let productName; // name of the product

        switch (button.parentNode.className) { // finding the name of the goods
            case 'product-buy':
                productName = button.closest('.product-right').children[1].textContent.trim();
                break;

            case 'tab-buy':
                productName = button.closest('.tab-text').children[1].textContent.trim();
                break;

            case 'item-buy':
                productName = button.closest('.item-text').children[1].textContent.trim();
                break;
        }

        let cartItems = cartModal.querySelectorAll('.cart-item');

        if (cartItems.length > 0) {
            let cartItemsArr = Array.from(cartItems);

            if (cartItemsCheck(cartItemsArr, 'cart-item__name', productName)) { // checking if this item is already in the cart
                cartItemAdd(productName);
                headerCartQuantityRefresh();
                cartDataRefresh();
            } else {
                alert('You have already added this item to your cart. You may increase the quantity of it via cart window');
            }
        } else {
            cartItemAdd(productName);
            headerCartQuantityRefresh();
            cartDataRefresh();
        }
    });
});

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