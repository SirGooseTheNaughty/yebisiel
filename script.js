// состояние
const state = {
    tab: 'home',
    numDishes: 'five',
    day: 0,
    daysSelection: 'work',
    numDays: 'five',
    payment: 'card',
    phone: '',
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

function incrementDay (direction) {
    const newDay = state.day + direction;
    if (newDay > 6) {
        state.set('day', 0);
    } else if (newDay < 0) {
        state.set('day', 6);
    } else {
        state.set('day', newDay);
    }
}

function redrawDayText () {
    nextBtnText.textContent = daysTexts[state.day];
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

function resetOrderInfo () {
    const { tab, numDishes, daysSelection, numDays } = state;
    const price = prices[tab][numDishes][daysSelection][numDays];
    orderInfoLink.setAttribute('href', `#order:${orderDict.menus[tab]}, ${orderDict.numDishes[numDishes]} ${orderDict.numDays[numDays][daysSelection]}=${price}`);
}

function handleOrder () {
    console.log('order: ', state);
    fillBasket();
}

function redrawNutrition () {
    const { tab, numDishes, day } = state;
    const nutrVals = nutritionValues[tab][numDishes][day].split('/');
    const nutrText = `${nutrVals[0]} ккал / Б: ${nutrVals[1]} / Ж: ${nutrVals[2]} / У: ${nutrVals[3]}`;
    nitrition.textContent = nutrText;
}

function changeMenuLink () {
    menuLink.setAttribute('href', menuLinks[state.tab]);
}

function changePhoneNumber () {
    state.set('phone', this.value || phone.value);
    if (state.phone.split('').indexOf('_') !== -1) {
        orderBtn.classList.remove('active');
        orderBtn.removeEventListener('click', handleOrder);
        orderInfoLink.style.pointerEvents = 'none';
    }
}

function fixMarginForLite () {
    if (state.tab === 'lite') {
        numDishes.five.classList.add('noMargin');
    } else {
        numDishes.five.classList.remove('noMargin');
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
    resetOrderInfo();
    redrawNutrition();
    changeMenuLink();
    fixMarginForLite();
    trackMenu();
}

function clickNumDishes (numDishes) {
    state.set('numDishes', numDishes);
    setActiveNumDishes();
    redrawDishesExamples();
    redrawPrices();
    resetOrderInfo();
    redrawNutrition();
}

function clickNext (direction) {
    incrementDay(direction);
    redrawDishesExamples();
    redrawNutrition();
    redrawDayText();
}

function clickDaysSelect (daysId) {
    state.set('daysSelection', daysId);
    setActiveDays();
    redrawDaytags();
    redrawPrices();
    resetOrderInfo();
}

function clickNumDays (numDays) {
    state.set('numDays', numDays);
    setActiveNumDays();
    resetOrderInfo();
}

function clickPaymentMethod (method) {
    state.set('payment', method);
    setActivePayment();
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

nextBtns.next.addEventListener('click', () => clickNext(1));
nextBtns.prev.addEventListener('click', () => clickNext(-1));

$(phone).on('input', changePhoneNumber);

// initial pics
redrawDishesExamples();
changePhoneNumber();
resetOrderInfo();
redrawNutrition();
changeMenuLink();
redrawPrices();
phone.value = '';

// phone mask
$(phone).inputmask("+7 (999) 999-99-99", {
    "oncomplete": function () {
        orderBtn.classList.add('active');
        orderBtn.addEventListener('click', handleOrder);
        orderInfoLink.style.pointerEvents = 'auto';
    }
});

// трекер пикселя для меню
function trackMenu () {
    const menu = orderDict.menus[state.tab];
    fbq('track', 'InitiateCheckout', {
        content_ids: [menu],
        content_type: 'product'
    });  
}