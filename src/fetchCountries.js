import countryInfo from './templates/countryInfo.hbs';
import {refs} from './index.js'

export default

function fetchCountries(searchQuery) {
  fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
  .then(res => res.json())
  .then(data => {data
    const markup = countryInfo(data)

    refs.listCountries.insertAdjacentHTML('beforeend', markup);
  })
  .catch(error => console.log(error));
}




