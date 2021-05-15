let basket, priceField, phoneField, menuField, numDishesField, numDaysField, paumentCash, paumentCard, dict, submit, productsCont;
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
            each: 'на 7 дней'
        },
        twenty: {
            work: 'на 20 дней',
            each: 'на 28 дней'
        }
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
    if (payment === 'card') {
        paymentCard.click();
    } else {
        paymentCash.click();
    }
    setTimeout(() => {
        submit.click();
    }, 500);
}