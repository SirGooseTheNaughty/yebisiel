// элементы взаимодействия
const content = document.querySelector('.content');
const tabs = {
    home: document.querySelector('.tabHome'),
    lite: document.querySelector('.tabLite'),
    avan: document.querySelector('.tabAvan')
};
const numDishes = {
    three: document.querySelector('.threeDishes'),
    four: document.querySelector('.fourDishes'),
    five: document.querySelector('.fiveDishes'),
    six: document.querySelector('.sixDishes')
};
const nextBtn = document.querySelector('.nextButton');
const dishExamples = document.querySelector('.pics');
const daysSelect = {
    each: document.querySelector('.eachDay'),
    work: document.querySelector('.workDay')
};
const numDays = {
    five: document.querySelector('.numDaysSelect.five'),
    twenty: document.querySelector('.numDaysSelect.twenty')
};
const dayTags = {
    five: numDays.five.querySelector('.dayTag'),
    twenty: numDays.twenty.querySelector('.dayTag')
};
const priceTags = {
    five: numDays.five.querySelector('.dayPrice'),
    twenty: numDays.twenty.querySelector('.dayPrice')
};
const yourProfitTag = document.querySelector('.yourProfit');
const payment = {
    cash: document.querySelector('.cash'),
    card: document.querySelector('.card')
};
const phone = document.querySelector('.phone');
const orderBtn = document.querySelector('#order');
const orderInfoLink = document.querySelector('.orderInfo');
const tagline = document.querySelector('.tagline');
const picElement = (url) => {
    return `<img src="${url}" alt="dish example" class="pic">`;
}

// статичные данные
const possibleDishes = {
    home: ['three', 'four', 'five', 'six'],
    lite: ['three', 'five'],
    avan: ['three', 'four', 'five', 'six']
};
const numDishTexts = {
    three: '3 блюда',
    four: '4 блюда',
    five: '5 блюд',
    six: '6 блюд'
};
const drinkText = ' + напиток';
/*
place for demoPics
*/
const colorSchemes = {
    home: '--lighterColor: #F8E8D7; --mainColor: #FFCC99; --darkerColor: #F9E1C3; --darkColor: #F08D46; --nutritionColor: #EBAE70',
    lite: '--lighterColor: #F0F4E5 ; --mainColor: #D6E5B1; --darkerColor: #C5D699 ; --darkColor: #B0CB6C; --nutritionColor: #BAD084',
    avan: '--lighterColor: #E2DEE7; --mainColor: #BFBAC6; --darkerColor: #ACA7B5; --darkColor: #8D839C; --nutritionColor: #9791A0'
};
const taglineTexts = {
    home: 'Знакомый вкус для повседневной жизни ',
    lite: 'Баланс привычной еды для красивой фигуры',
    avan: 'Палитра блюд различных стран мира'
};