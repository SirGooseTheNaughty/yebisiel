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
const picsUrls = {
    home: [
        './assets/1.png',
        './assets/2.png',
        './assets/3.png',
        './assets/4.png',
        './assets/5.png',
        './assets/6.png',
    ],
    lite: [
        './assets/1.png',
        './assets/2.png',
        './assets/3.png',
        './assets/4.png',
        './assets/5.png',
        './assets/6.png',
    ],
    avan: [
        './assets/1.png',
        './assets/2.png',
        './assets/3.png',
        './assets/4.png',
        './assets/5.png',
        './assets/6.png',
    ],
};
const picUrls = {
    home: {
        three: [
            [
                picsUrls.home[0],
                picsUrls.home[1],
                picsUrls.home[2]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[4],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[0],
                picsUrls.home[2],
                picsUrls.home[4]
            ],
            [
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1]
            ],
            [
                picsUrls.home[5],
                picsUrls.home[3],
                picsUrls.home[2]
            ],
            [
                picsUrls.home[4],
                picsUrls.home[1],
                picsUrls.home[3]
            ]
        ],
        four: [
            [
                picsUrls.home[0],
                picsUrls.home[1],
                picsUrls.home[2],
                picsUrls.home[3]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[4],
                picsUrls.home[5],
                picsUrls.home[1]
            ],
            [
                picsUrls.home[0],
                picsUrls.home[2],
                picsUrls.home[4],
                picsUrls.home[3]
            ],
            [
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[5],
                picsUrls.home[2]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1],
                picsUrls.home[4]
            ],
            [
                picsUrls.home[5],
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1]
            ],
            [
                picsUrls.home[4],
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[2]
            ]
        ],
        five: [
            [
                picsUrls.home[0],
                picsUrls.home[1],
                picsUrls.home[2],
                picsUrls.home[3],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[4],
                picsUrls.home[5],
                picsUrls.home[1],
                picsUrls.home[2]
            ],
            [
                picsUrls.home[0],
                picsUrls.home[2],
                picsUrls.home[4],
                picsUrls.home[3],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[5],
                picsUrls.home[2],
                picsUrls.home[4]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1],
                picsUrls.home[4],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[5],
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1],
                picsUrls.home[0]
            ],
            [
                picsUrls.home[4],
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[5]
            ]
        ],
        six: [
            [
                picsUrls.home[0],
                picsUrls.home[1],
                picsUrls.home[2],
                picsUrls.home[3],
                picsUrls.home[4],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[4],
                picsUrls.home[5],
                picsUrls.home[1],
                picsUrls.home[2],
                picsUrls.home[0]
            ],
            [
                picsUrls.home[0],
                picsUrls.home[2],
                picsUrls.home[4],
                picsUrls.home[3],
                picsUrls.home[5],
                picsUrls.home[1]
            ],
            [
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[5],
                picsUrls.home[2],
                picsUrls.home[4],
                picsUrls.home[0]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1],
                picsUrls.home[4],
                picsUrls.home[5],
                picsUrls.home[0]
            ],
            [
                picsUrls.home[5],
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1],
                picsUrls.home[0],
                picsUrls.home[4]
            ],
            [
                picsUrls.home[4],
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[5],
                picsUrls.home[0]
            ]
        ]
    },
    lite: {
        three: [
            [
                picsUrls.home[0],
                picsUrls.home[1],
                picsUrls.home[2]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[4],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[0],
                picsUrls.home[2],
                picsUrls.home[4]
            ],
            [
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1]
            ],
            [
                picsUrls.home[5],
                picsUrls.home[3],
                picsUrls.home[2]
            ],
            [
                picsUrls.home[4],
                picsUrls.home[1],
                picsUrls.home[3]
            ]
        ],
        five: [
            [
                picsUrls.home[0],
                picsUrls.home[1],
                picsUrls.home[2],
                picsUrls.home[3],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[4],
                picsUrls.home[5],
                picsUrls.home[1],
                picsUrls.home[2]
            ],
            [
                picsUrls.home[0],
                picsUrls.home[2],
                picsUrls.home[4],
                picsUrls.home[3],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[5],
                picsUrls.home[2],
                picsUrls.home[4]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1],
                picsUrls.home[4],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[5],
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1],
                picsUrls.home[0]
            ],
            [
                picsUrls.home[4],
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[5]
            ]
        ]
    },
    avan: {
        three: [
            [
                picsUrls.home[0],
                picsUrls.home[1],
                picsUrls.home[2]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[4],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[0],
                picsUrls.home[2],
                picsUrls.home[4]
            ],
            [
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1]
            ],
            [
                picsUrls.home[5],
                picsUrls.home[3],
                picsUrls.home[2]
            ],
            [
                picsUrls.home[4],
                picsUrls.home[1],
                picsUrls.home[3]
            ]
        ],
        four: [
            [
                picsUrls.home[0],
                picsUrls.home[1],
                picsUrls.home[2],
                picsUrls.home[3]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[4],
                picsUrls.home[5],
                picsUrls.home[1]
            ],
            [
                picsUrls.home[0],
                picsUrls.home[2],
                picsUrls.home[4],
                picsUrls.home[3]
            ],
            [
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[5],
                picsUrls.home[2]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1],
                picsUrls.home[4]
            ],
            [
                picsUrls.home[5],
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1]
            ],
            [
                picsUrls.home[4],
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[2]
            ]
        ],
        five: [
            [
                picsUrls.home[0],
                picsUrls.home[1],
                picsUrls.home[2],
                picsUrls.home[3],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[4],
                picsUrls.home[5],
                picsUrls.home[1],
                picsUrls.home[2]
            ],
            [
                picsUrls.home[0],
                picsUrls.home[2],
                picsUrls.home[4],
                picsUrls.home[3],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[5],
                picsUrls.home[2],
                picsUrls.home[4]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1],
                picsUrls.home[4],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[5],
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1],
                picsUrls.home[0]
            ],
            [
                picsUrls.home[4],
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[5]
            ]
        ],
        six: [
            [
                picsUrls.home[0],
                picsUrls.home[1],
                picsUrls.home[2],
                picsUrls.home[3],
                picsUrls.home[4],
                picsUrls.home[5]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[4],
                picsUrls.home[5],
                picsUrls.home[1],
                picsUrls.home[2],
                picsUrls.home[0]
            ],
            [
                picsUrls.home[0],
                picsUrls.home[2],
                picsUrls.home[4],
                picsUrls.home[3],
                picsUrls.home[5],
                picsUrls.home[1]
            ],
            [
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[5],
                picsUrls.home[2],
                picsUrls.home[4],
                picsUrls.home[0]
            ],
            [
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1],
                picsUrls.home[4],
                picsUrls.home[5],
                picsUrls.home[0]
            ],
            [
                picsUrls.home[5],
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[1],
                picsUrls.home[0],
                picsUrls.home[4]
            ],
            [
                picsUrls.home[4],
                picsUrls.home[1],
                picsUrls.home[3],
                picsUrls.home[2],
                picsUrls.home[5],
                picsUrls.home[0]
            ]
        ]
    }
};
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

// состояние
const state = {
    tab: 'home',
    numDishes: 'five',
    day: 0,
    daysSelection: 'work',
    numDays: 'five',
    payment: 'card',
    get: function(id) {
        return this[id];
    },
    set: function(id, state) {
        return this[id] = state;
    }
};

// функции вычисления и установки состояния
function setColorScheme () {
    content.style = colorSchemes[state.get('tab')]
}

function setTaglineText () {
    tagline.textContent = taglineTexts[state.get('tab')];
}

function setNumDishesTabs () {
    const { tab } = state;
    const possDishes = possibleDishes[tab];
    for (const dishTab in numDishes) {
        if (possDishes.indexOf(dishTab) === -1) {
            numDishes[dishTab].style.display = 'none';
            if (state.numDishes === 'four' || state.numDishes === 'six') {
                state.set('numDishes', 'five');
            }
        } else {
            numDishes[dishTab].style.display = 'grid';
            numDishes[dishTab].textContent = tab !== 'lite' ? numDishTexts[dishTab] + drinkText : numDishTexts[dishTab];
        }
    }
}

function setActiveNumDishes () {
    const activeTab = state.get('numDishes');
    for (const dishTab in numDishes) {
        if (dishTab === activeTab) {
            numDishes[dishTab].classList.add('dishActive');
        } else {
            numDishes[dishTab].classList.remove('dishActive');
        }
    }
}

function setActiveTab () {
    const { tab } = state;
    for (let tabId in tabs) {
        if (tabId === tab) {
            tabs[tabId].classList.add('tabActive');
        } else {
            tabs[tabId].classList.remove('tabActive');
        }
    }
}

function setActiveDays () {
    const { daysSelection } = state;
    for (let day in daysSelect) {
        if (daysSelection === day) {
            daysSelect[day].classList.add('active');
        } else {
            daysSelect[day].classList.remove('active');
        }
    }
}

function setActiveNumDays () {
    for (let numDay in numDays) {
        if (numDay === state.numDays) {
            numDays[numDay].classList.add('checked');
        } else {
            numDays[numDay].classList.remove('checked');
        }
    }
}

function setActivePayment () {
    for (let method in payment) {
        if (method === state.payment) {
            payment[method].classList.add('checked');
        } else {
            payment[method].classList.remove('checked');
        }
    }
}

function incrementDay () {
    const newDay = state.day + 1;
    if (newDay > 6) {
        state.set('day', 0);
    } else {
        state.set('day', newDay);
    }
}

function redrawDishesExamples () {
    dishExamples.innerHTML = '';
    const { tab, numDishes, day } = state;
    const imgUrls = picUrls[tab][numDishes][day];
    imgUrls.forEach(url => {
        dishExamples.innerHTML += picElement(url);
    });
}

function redrawPrices () {
    const { tab, numDishes, daysSelection } = state;
    const { five, twenty } = prices[tab][numDishes][daysSelection];
    priceTags.five.textContent = `${five} рублей`;
    priceTags.twenty.textContent = `${twenty} рублей`;
    yourProfitTag.textContent = `Ваша выгода — ${4*five - twenty} р`;
}

function redrawDaytags () {
    if (state.daysSelection === 'each') {
        dayTags.five.textContent = 'На 7 дней';
        dayTags.twenty.textContent = 'На 28 дней';
    } else {
        dayTags.five.textContent = 'На 5 дней';
        dayTags.twenty.textContent = 'На 20 дней';
    }
}

// функции-обработчики
function clickTab (tabId) {
    state.set('tab', tabId);
    setColorScheme();
    setTaglineText();
    setNumDishesTabs();
    setActiveTab();
    setActiveNumDishes();
    redrawDishesExamples();
    redrawPrices();
}

function clickNumDishes (numDishes) {
    state.set('numDishes', numDishes);
    setActiveNumDishes();
    redrawDishesExamples();
    redrawPrices();
}

function clickNext () {
    incrementDay();
    redrawDishesExamples();
}

function clickDaysSelect (daysId) {
    state.set('daysSelection', daysId);
    setActiveDays();
    redrawDaytags();
    redrawPrices();
}

function clickNumDays (numDays) {
    state.set('numDays', numDays);
    setActiveNumDays();
}

function clickPaymentMethod (method) {
    state.set('payment', method);
    setActivePayment();
}

function clickOrder () {
    console.log('order');
}

// обработчики кликов
for (let tab in tabs) {
    tabs[tab].addEventListener('click', () => {
        clickTab(tab);
    });
}

for (let numDish in numDishes) {
    numDishes[numDish].addEventListener('click', () => {
        clickNumDishes(numDish);
    });
}

for (let daySelect in daysSelect) {
    daysSelect[daySelect].addEventListener('click', () => {
        clickDaysSelect(daySelect);
    });
}

for (let numDay in numDays) {
    numDays[numDay].addEventListener('click', () => {
        clickNumDays(numDay);
    });
}

for (let method in payment) {
    payment[method].addEventListener('click', () => {
        clickPaymentMethod(method);
    });
}

nextBtn.addEventListener('click', clickNext);