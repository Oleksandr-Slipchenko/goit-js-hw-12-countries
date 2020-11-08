import './styles.css';
import fetchCountries from './fetchCountries.js';
// import countryInfo from './templates/countryInfo.hbs';
import '@pnotify/core/dist/BrightTheme.css';

var debounce = require('lodash.debounce');


export const refs = {
  listCountries: document.querySelector('.list-countries'),
  search: document.querySelector('.js-search'),
}

// refs.search.addEventListener('input', _.debounce(onSearchCountries, 500));
refs.search.addEventListener('input', onSearchCountries);


function onSearchCountries(e) {
  e.preventDefault();
  const searchValue = e.currentTarget.value;
  refs.listCountries.innerHTML = '';
  fetchCountries(searchValue);
  console.log(searchValue);
  searchValue = "" ? refs.listCountries.innerHTML = '' : searchValue;
}