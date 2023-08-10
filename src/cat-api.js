import axios from 'axios';
const BASE_URL = ' https://api.thecatapi.com/v1';
const API_KEY =
  'live_oc825gUETmLwZ9Mqt9IlkFLJnUwvXrog5FqLjUFtPASKO4ZgXjZBoOrdvx8r9SkG';

export async function fetchBreeds() {
  try {
    const { data } = await axios.get(`${BASE_URL}/breeds?api_key=${API_KEY}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchCatByBreed(breedId) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
