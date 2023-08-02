import { fetchBreeds, fetchCatByBreed } from './cat-api';
// import SlimSelect from 'slim-select';
const breedsSelect = document.querySelector('.breed-select');
const catsList = document.querySelector('.cat-info');
// breedsSelect.addEventListener('click', popl);

function openValue(data) {
  return data
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

fetchBreeds()
  .then(response => {
    const breeds = response.data;
    console.log(breeds);
    breedsSelect.innerHTML = openValue(breeds);
  })
  .catch(console.warn);

function informCats(data) {
  const catsId = data.id;
  const catsName = data.name;
  const catsDesp = data.description;
  const catsTemp = data.temperament;
  if (catsId === data.id) {
    const cats = `
      <ul>
        <li>
          <h2>${catsName}</h2>
          <img src="" alt="cats" />

          <p>${catsDesp}</p>
          <p>${catsTemp}</p>
        </li>
      </ul>
`;
  }
}

fetchCatByBreed(breedId)
  .then(response => {
    const breedsas = response.breedId;
    console.log(breedsas);
    catsList.innerHTML = informCats(breedId);
  })
  .catch(console.warn);
