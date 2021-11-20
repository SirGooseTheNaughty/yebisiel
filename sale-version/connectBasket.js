let basket, priceField, phoneField, menuField, numDishesField, numDaysField, paumentCash, paumentCard, dict, submit, productsCont, promoField, promoBtn;
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
            work: 'по будням, 8 недель',
            each: 'каждый день, 8 недель'
        },
        twenty: {
            work: 'по будням, 12 недель',
            each: 'каждый день, 12 недель'
        }
    }
}

const int = setInterval(() => {
    basket = document.querySelector('#rec313869959'); // rec331499307 // rec313869959
    if (basket) {
        clearInterval(int);
        setBasketConnection();
    }
}, 500);

function setBasketConnection () {
    priceField = basket.querySelector('.t706__cartwin-prodamount');
    phoneField = basket.querySelector('input[name="phone"]');
    paymentCash = basket.querySelector('[name="paymentsystem"][value="cash"]');
    paymentCard = basket.querySelector('[name="paymentsystem"][value="cloudpayments"]');
    submit = basket.querySelector('.t-submit');
    productsCont = basket.querySelector('.t706__cartwin-products');
    promoField = basket.querySelector('.t-inputpromocode');
    promoBtn = basket.querySelector('.t-inputpromocode__btn');
}
    
function fillBasket () {
    const { tab, numDishes, daysSelection, numDays, payment, phone, price, promocode, discount } = state;
    priceField.innerHTML = '' + price;
    phoneField.value = phone;
    menuField.value = orderDict.menus[tab];
    numDishesField.value = orderDict.numDishes[numDishes];
    numDaysField.value = orderDict.numDays[numDays][daysSelection];
    if (discount) {
        promoField.value = promocode;
        promoBtn.click();
    }
    if (payment === 'card' && tab !== 'avan') {     // т.к. авангард больше не оплачивается
        paymentCard.click();
    } else {
        paymentCash.click();
    }
    setTimeout(() => {
        submit.click();
    }, 500);
}