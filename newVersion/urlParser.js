const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const leadNumber = urlParams.get('lead')
const type = urlParams.get('type')
const num_dishes = urlParams.get('num_dishes')
const period = urlParams.get('period')
const num_days = urlParams.get('num_days')

if (type) state.set('tab', type);
if (num_dishes) state.set('numDishes', num_dishes);
if (period) state.set('daysSelection', period);
if (num_days) state.set('numDays', num_days);

console.log('leadNumber', leadNumber);
console.log('tab', type);
console.log('numDishes', num_dishes);
console.log('daysSelection', period);
console.log('numDays', num_days);

console.log('state', state);

redrawConfigurator();