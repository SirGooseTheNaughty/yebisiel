const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const leadNumber = urlParams.get('lead');
const type = urlParams.get('type');
const num_dishes = urlParams.get('num_dishes');
const period = urlParams.get('period');
const num_days = urlParams.get('num_days');

if (leadNumber && leadTexts[leadNumber]) {
    leadTextCont.textContent = leadTexts[leadNumber];
}
if (type && possibleURLParams.types.indexOf(type) !== -1) {
    state.set('tab', type);
}
if (num_dishes && possibleURLParams.num_dishes.indexOf(num_dishes) !== -1) {
    state.set('numDishes', num_dishes);
}
if (period && possibleURLParams.periods.indexOf(period) !== -1) {
    state.set('daysSelection', period);
}
if (num_days && possibleURLParams.num_days.indexOf(num_days) !== -1) {
    state.set('numDays', num_days);
}

redrawConfigurator();