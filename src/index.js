import { fetchBreeds, fetchCatByBreed } from './cat-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const ref = {
  breedSelector: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
};
const { breedSelector, catInfo, loader, error } = ref;
loader.classList.remove('is-hidden');
breedSelector.classList.add('is-hidden');
function listBreed(data) {
  return data
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}
fetchBreeds()
  .then(data => {
    console.log(data);
    breedSelector.innerHTML = listBreed(data);
    new SlimSelect({
      select: breedSelector,
    });
    breedSelector.classList.remove('is-hidden');
  })
  .catch(() =>
    Notify.failure('Oops! Something went wrong! Try reloading the page!')
  )
  .finally(() => loader.classList.add('is-hidden'));

breedSelector.addEventListener('change', onSelectBreed);

function onSelectBreed(event) {
  catInfo.innerHTML = '';
  loader.classList.remove('is-hidden');

  const breedId = event.currentTarget.value;
  fetchCatByBreed(breedId)
    .then(data => {
      const { url, breeds } = data[0];

      catInfo.innerHTML = `<div class="box-img"><img src="${url}" alt="${breeds[0].name}" width="400"/></div><div class="box"><h1>${breeds[0].name}</h1><p>${breeds[0].description}</p><p><b>Temperament:</b> ${breeds[0].temperament}</p></div>`;
    })
    .catch(() =>
      Notify.failure('Oops! Something went wrong! Try reloading the page!')
    )
    .finally(() => loader.classList.add('is-hidden'));
}
