import './styles.css';
import fetchCountries from './fetchCountries.js';

const debounce = require('lodash.debounce');

export const refs = {
  countriesList: document.querySelector('.countries-list'),
  search: document.querySelector('.js-search'),
}

refs.search.addEventListener('input', debounce(onSearchCountries, 500));

function onSearchCountries(e) {
  e.preventDefault();
  let searchValue = e.target.value.trim();
  refs.countriesList.innerHTML = '';
  if (!searchValue) return;
  fetchCountries(searchValue);
}