import './styles.css';
import fetchCountries from './fetchCountries.js';
// import countryInfo from './templates/countryInfo.hbs';

// const { error } = require('@pnotify/core');
// import { alert, notice, info, success, error, defaultModules } from'@pnotify/core';
// import "@pnotify/core/dist/PNotify.css";
// import "@pnotify/core/dist/BrightTheme.css";

// import { alert, defaultModules } from 'node_modules/@pnotify/core/dist/PNotify.js';


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
  fetchCountries(searchValue);
  // console.log(searchValue);

  if (!searchValue) return
}