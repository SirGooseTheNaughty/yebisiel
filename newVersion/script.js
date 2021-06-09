// состояние
const state = {
    tab: 'home',
    numDishes: 'five',
    day: 0,
    daysSelection: 'work',
    numDays: 'twenty',
    payment: 'card',
    price: 0,
    phone: '',
    activeDish: 0,
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
    tagline.text.textContent = taglineTexts[state.get('tab')];
    tagline.img.innerHTML = svgPics[state.get('tab')];
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
    content.setAttribute('data-active-tab', tab);
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
            numDays[numDay].classList.add('active');
        } else {
            numDays[numDay].classList.remove('active');
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

function setPrice () {
    const { tab, numDishes, daysSelection, numDays } = state;
    const price = prices[tab][numDishes][daysSelection][numDays];
    state.set('price', price);
}

function redrawPrice () {
    const { price } = state;
    let priceArr = String(price).split('');
    priceArr.splice(priceArr.length - 3, 0, ' ');
    priceText.textContent = `${priceArr.join('')} р`;
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
    const ww = $(window).width();
    let key = 'long';
    if (ww < 1200 && ww > 460) {
        key = 'short';
    }
    nextBtnText.textContent = daysTexts[key][state.day];
}

function redrawDishesExamples () {
    dishExamples.innerHTML = '';
    const { tab, numDishes, day } = state;
    const imgUrls = picUrls[tab][numDishes][day];
    imgUrls.forEach(url => {
        dishExamples.innerHTML += picElement(url);
    });
    resetIconsEvents();
}

function resetIconsEvents () {
    const icons = content.querySelectorAll('.dishPopup__icon');
    icons.forEach((icon, i) => {
        icon.addEventListener('mouseenter', (e) => {
            setActiveDish(i);
            redrawDishPopup(e);
        });
        icon.addEventListener('mouseleave', (e) => {
            setActiveDish(null);
            redrawDishPopup(e);
        });
        icon.addEventListener('click', (e) => {
            setActiveDish(i);
            redrawDishPopup(e);
            e.stopPropagation();
        });
        content.addEventListener('click', (e) => {
            setActiveDish(null);
            redrawDishPopup(e);
        });
    });
}

function redrawDishPopup (e) {
    const { tab, activeDish, day } = state;
    if (activeDish == null) {
        dishPopup.popup.classList.add('hidden');
        return;
    };
    const { name, weight, ing } = dishesInfo[tab][day][activeDish];
    dishPopup.title.textContent = '' + name;
    dishPopup.weight.textContent = '' + weight;
    dishPopup.ing.textContent = '' + ing;
    let { pageX, pageY } = e;
    const { right, left } = dishExamples.getBoundingClientRect();
    if (pageX + dishPopup.popup.offsetWidth > right) {
        pageX -= dishPopup.popup.offsetWidth;
    }
    if (pageX < left) {
        pageX = left;
    }
    dishPopup.popup.style.top = `${pageY + 10}px`;
    dishPopup.popup.style.left = `${pageX}px`;
    dishPopup.popup.classList.remove('hidden');
}

function redrawDaytags () {
    const { tab, numDishes, daysSelection } = state;
    const { five, twenty } = prices[tab][numDishes][daysSelection];
    const dividers = daysSelection === 'each' ? {five: 7, twenty: 28} : {five: 5, twenty: 20};
    priceTags.five.textContent = `(${Math.floor(five / dividers.five)} р/день)`;
    priceTags.twenty.textContent = `(${Math.floor(twenty / dividers.twenty)} р/день)`;
    dayTags.five.textContent = dividers.five;
    dayTags.twenty.textContent = dividers.twenty;
    yourProfitTag.textContent = `Ваша выгода — ${4*five - twenty} р`;
}

function changeYourProfitVisibility () {
    const { numDays } = state;
    yourProfitTag.style.opacity = numDays === 'twenty' ? '1' : '0';
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
    setPrice();
    redrawDaytags();
    redrawPrice();
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
    setPrice();
    redrawDaytags();
    redrawPrice();
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
    setPrice();
    redrawDaytags();
    redrawPrice();
    resetOrderInfo();
}

function clickNumDays (numDays) {
    state.set('numDays', numDays);
    setActiveNumDays();
    setPrice();
    redrawPrice();
    changeYourProfitVisibility();
    resetOrderInfo();
}

function clickPaymentMethod (method) {
    state.set('payment', method);
    setActivePayment();
}

function setActiveDish (i) {
    state.set('activeDish', i);
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

window.onresize = redrawDayText;

// initial pics
redrawConfigurator();
phone.value = '';

function redrawConfigurator () {
    setColorScheme();
    setTaglineText();
    setNumDishesTabs();
    setActiveTab();
    setActiveNumDishes();
    redrawDishesExamples();
    setPrice();
    redrawDaytags();
    redrawDayText();
    redrawPrice();
    resetOrderInfo();
    redrawNutrition();
    changeMenuLink();
    fixMarginForLite();
    changePhoneNumber();
}

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