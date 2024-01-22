const yearEl = document.querySelector(".year");
const monthEl = document.querySelector(".mounth");
const weekEl = document.querySelector(".week");
const dayEl = document.querySelector(".day");

const date = new Date();

const year = date.toLocaleDateString('uk-UA', {year: 'numeric'})
yearEl.textContent = year;

const month = date.toLocaleDateString('uk-UA', {month: 'long'})
monthEl.textContent = month;

const week = date.toLocaleDateString('uk-UA', {weekday: 'long'})
weekEl.textContent = week;

const day = date.toLocaleDateString('uk-UA', {day: 'numeric'});
dayEl.textContent = day;