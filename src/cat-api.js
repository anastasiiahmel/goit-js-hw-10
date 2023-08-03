import axios from 'axios';
const BASE_URL = ' https://api.thecatapi.com/v1';

axios.defaults.headers.common['x-api-key'] =
  'live_oc825gUETmLwZ9Mqt9IlkFLJnUwvXrog5FqLjUFtPASKO4ZgXjZBoOrdvx8r9SkG';

// // const fetchBreeds = async cats => {
// //   try {
// //     const { data } = await axios(
// //       'https://api.thecatapi.com/v1/images/search?breed_ids={breed.id}',
// //       cats
// //     );
// //   } catch (error) {
// //     console.log(error.massage);
// //   }
// // };

export function fetchBreeds() {
  return axios.get('https://api.thecatapi.com/v1/breeds');
}

export function fetchCatByBreed(breedId) {
  return axios.get(
    `${BASE_URL}/images/search?api_key=live_oc825gUETmLwZ9Mqt9IlkFLJnUwvXrog5FqLjUFtPASKO4ZgXjZBoOrdvx8r9SkG&breed_ids=${breedId}`
  );
}
