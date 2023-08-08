import axios from 'axios';
// const BASE_URL = ' https://api.thecatapi.com/v1';

// axios.defaults.headers.common['x-api-key'] =
//   'live_oc825gUETmLwZ9Mqt9IlkFLJnUwvXrog5FqLjUFtPASKO4ZgXjZBoOrdvx8r9SkG';

const url = 'https://api.thecatapi.com/v1';
const api_key =
  'live_oc825gUETmLwZ9Mqt9IlkFLJnUwvXrog5FqLjUFtPASKO4ZgXjZBoOrdvx8r9SkG';
export async function fetchBreeds() {
  try {
    const { data } = await axios.get(`${url}/breeds?api_key=${api_key}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchCatByBreed(breedId) {
  try {
    const { data } = await axios.get(
      `${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

// export function fetchBreeds() {
//   return fetch(`${url}/breeds?api_key=${api_key}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// export function fetchCatByBreed(breedId) {
//   return fetch(
//     `${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }
