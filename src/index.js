import './styles.css';
import fetchCountries from './fetchCountries.js';
// import countryInfo from './templates/countryInfo.hbs';


export const refs = {
  listCountries: document.querySelector('.list-countries'),
  search: document.querySelector('.js-search'),
}

refs.search.addEventListener('input', e => {
  e.preventDefault();

  const searchValue = e.currentTarget.value;
  refs.listCountries.innerHTML = '';

  fetchCountries(searchValue)
  searchValue = "" ? refs.listCountries.innerHTML = '' : searchValue;
})