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
const tagline = document.querySelector('.tagline');
const picElement = (url) => {
    return `<img src="${url}" alt="dish example" class="pic">`;
}

// статичные данные
const prices = {
    home: {
        three: {
            each: {
                five: 3900,
                twenty: 14000
            },
            work: {
                five: 2900,
                twenty: 10400
            }
        },
        four: {
            each: {
                five: 4500,
                twenty: 15900
            },
            work: {
                five: 3300,
                twenty: 11800
            }
        },
        five: {
            each: {
                five: 4900,
                twenty: 17600
            },
            work: {
                five: 3600,
                twenty: 13000
            }
        },
        six: {
            each: {
                five: 5450,
                twenty: 19600
            },
            work: {
                five: 4000,
                twenty: 14400
            }
        }
    },
    lite: {
        three: {
            each: {
                five: 3900,
                twenty: 14000
            },
            work: {
                five: 2900,
                twenty: 10400
            }
        },
        five: {
            each: {
                five: 4900,
                twenty: 17600
            },
            work: {
                five: 3600,
                twenty: 13000
            }
        }
    },
    avan: {
        three: {
            each: {
                five: 6000,
                twenty: 21000
            },
            work: {
                five: 4500,
                twenty: 16000
            }
        },
        four: {
            each: {
                five: 7000,
                twenty: 25200
            },
            work: {
                five: 5250,
                twenty: 19000
            }
        },
        five: {
            each: {
                five: 8000,
                twenty: 28500
            },
            work: {
                five: 6000,
                twenty: 21600
            }
        },
        six: {
            each: {
                five: 9000,
                twenty: 32200
            },
            work: {
                five: 6750,
                twenty: 24000
            }
        }
    }
};
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