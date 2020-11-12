import countryInfo from './templates/countryInfo.hbs';
import names from './templates/names.hbs';
import {refs} from './index.js'

const { error } = require('@pnotify/core');

import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

export default

function fetchCountries(searchQuery) {
  fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
  .then(res => res.json())
  .then(data => {data

    if (data.length > 10) {
    return error ({
        text: 'Too many matches found. Please enter a more specific query!',
        animateSpeed:'fast',
        delay: 1000,
      });
    };

    if (data.length >= 2 && data.length <=10) {
    const markup = names(data)
    refs.countriesList.insertAdjacentHTML('beforeend', markup);
    }

    if (data.length === 1) {
    const markup = countryInfo(data)
    refs.countriesList.insertAdjacentHTML('beforeend', markup);
    }

  })
  .catch(error => console.log(error));
}




