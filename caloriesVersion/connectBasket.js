let basket, priceField, phoneField, deliveryField, paymentCash, paymentCard, submit, productsCont, promoField, promoBtn;
const orderDict = {
    calories: {
        'ccal-1200': '1200 калорий',
        'ccal-1600': '1600 калорий',
        'ccal-2000': '2000 калорий',
        'ccal-2500': '2500 калорий'
    },
    duration: {
        'dur-0': 'попробовать',
        'dur-1': 'на 1 неделю',
        'dur-2': 'на 2 недели',
        'dur-3': 'на 3 недели',
    },
    delivery: {
        morning: 'утренняя доставка',
        evening: 'вечерняя доставка'
    }
};

const basketConnectInt = setInterval(() => {
    if (!basketId) {
        console.error('Нет basketId');
        clearInterval(basketConnectInt);
        return;
    }
    basket = document.querySelector(basketId);
    if (basket) {
        clearInterval(basketConnectInt);
        setBasketConnection();
    }
}, 500);

function setBasketConnection () {
    priceField = basket.querySelector('.t706__cartwin-prodamount');
    phoneField = basket.querySelector('input[type="tel"]');
    deliveryField = basket.querySelector('input[name="delivery"]');
    paymentCash = basket.querySelector('[name="paymentsystem"][value="cash"]');
    paymentCard = basket.querySelector('[name="paymentsystem"][value="cloudpayments"]');
    submit = basket.querySelector('.t-submit');
    productsCont = basket.querySelector('.t706__cartwin-products');
    promoField = basket.querySelector('.t-inputpromocode');
    promoBtn = basket.querySelector('.t-inputpromocode__btn');
    promoField.value = '';
}
    
function fillBasket (app) {
    if (!basket) {
        alert('Произошла ошибка, повторите попытку позже');
        return;
    }
    const { ccal, duration, payment, phone, promocode, discount, delivery } = app;
    priceField.innerHTML = '' + prices[ccal][duration];
    phoneField.value = phone;
    deliveryField.value = orderDict.delivery[delivery];
    if (discount) {
        promoField.value = promocode;
        promoBtn.click();
    }
    if (payment === 'card') {
        paymentCard.click();
    } else {
        paymentCash.click();
    }
    setTimeout(() => {
        submit.click();
    }, 500);
}