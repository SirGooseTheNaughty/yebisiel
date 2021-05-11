const basket = document.querySelector('#rec313869959 .t706__cartwin-content');
const priceField = basket.querySelector('.t706__cartwin-prodamount');
const phoneField = basket.querySelector('[data-input-lid="1496239459190"] input');
const menuField = basket.querySelector('[data-input-lid="1602789521102"] input');
const numDishesField = basket.querySelector('[data-input-lid="1620733210076"] input');
const numDaysField = basket.querySelector('[data-input-lid="1620733232870"] input');
const paumentCash = basket.querySelector('[name="paymentsystem"][value="cash"]');
const paumentCard = basket.querySelector('[name="paymentsystem"][value="cloudpayments"]');

const dict = {
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
}

function fillBasket () {
    const { tab, numDishes, daysSelection, numDays, daysSelection, payment, phone } = state;
    const price = prices[tab][numDishes][daysSelection][numDays];
    priceField.innerHTML = price;
    phoneField.innerHTML = phone;
    menuField.innerHTML = dict.menus[tab];
    numDishesField.innerHTML = dict.numDishes[numDishes];
    numDaysField.innerHTML = dict.numDays[numDays][daysSelection];
    if (payment === 'card') {
        paumentCash.removeAttribute('checked');
        paumentCash.setAttribute('checked', 'checked');
    } else {
        paumentCash.setAttribute('checked', 'checked');
        paumentCash.removeAttribute('checked');
    }
}