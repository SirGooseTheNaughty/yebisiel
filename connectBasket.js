let basket, priceField, phoneField, menuField, numDishesField, numDaysField, paumentCash, paumentCard, dict, submit, productsCont, paymentMethod;
const orderDict = {
    menus: {
        home: 'домашнее',
        lite: 'легкое',
        avan: 'авангард'
    },
    numDishes: {
        three: 'три блюда',
        four: 'четыре блюда',
        five: 'пять блюд',
        six: 'шесть блюд'
    },
    numDays: {
        five: {
            work: 'на 5 дней',
            each: 'на 20 дней'
        },
        twenty: {
            work: 'на 7 дней',
            each: 'на 28 дней'
        }
    },
    paymentMethod: {
        card: 'оплата онлайн',
        cash: 'оплата курьеру при получении'
    }
}

const int = setInterval(() => {
    basket = document.querySelector('#rec313869959');
    if (basket) {
        clearInterval(int);
        setBasketConnection();
    }
}, 500);

function setBasketConnection () {
    priceField = basket.querySelector('.t706__cartwin-prodamount');
    phoneField = basket.querySelector('[data-input-lid="1496239459190"] input');
    menuField = basket.querySelector('[data-input-lid="1602789521102"] input');
    numDishesField = basket.querySelector('[data-input-lid="1620733210076"] input');
    numDaysField = basket.querySelector('[data-input-lid="1620733232870"] input');
    paymentMethodField = basket.querySelector('[data-input-lid="1620740580240"] input');
    paymentCash = basket.querySelector('[name="paymentsystem"][value="cash"]');
    paymentCard = basket.querySelector('[name="paymentsystem"][value="cloudpayments"]');
    submit = basket.querySelector('.t-submit');
    productsCont = basket.querySelector('.t706__cartwin-products');
}
    
function fillBasket () {
    const { tab, numDishes, daysSelection, numDays, payment, phone } = state;
    const price = prices[tab][numDishes][daysSelection][numDays];
    priceField.innerHTML = '' + price;
    phoneField.value = phone;
    menuField.value = orderDict.menus[tab];
    numDishesField.value = orderDict.numDishes[numDishes];
    numDaysField.value = orderDict.numDays[numDays][daysSelection];
    paymentMethodField.value = orderDict.paymentMethod[payment];
    if (payment === 'card') {
        paymentCash.removeAttribute('checked');
        paymentCard.setAttribute('checked', 'checked');
    } else {
        paymentCash.setAttribute('checked', 'checked');
        paymentCard.removeAttribute('checked');
    }
    // appendProduct(price, tab, numDishes, daysSelection, numDays);
    // submit.click();
}

function appendProduct (price, tab, numDishes, daysSelection, numDays) {
    $(productsCont).append(
        `
            <div class="t706__product" data-cart-product-i="0">
                <div class="t706__product-title t-descr t-descr_sm">
                    <a style="color: inherit">${dict.menus[tab]}, ${dict.numDishes[numDishes]} ${dict.numDays[numDays][daysSelection]}</a>
                </div>
                <div class="t706__product-plusminus t-descr t-descr_sm">
                    <span class="t706__product-quantity">1</span>
                </div>
                <div class="t706__product-amount t-descr t-descr_sm">${price}&nbsp;р.</div>
            </div>
        `
    )
}