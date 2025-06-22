import axios from 'axios';

const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const OMDB_BASE_URL = 'https://www.omdbapi.com/';

export const fetchOMDbMovie = async (title) => {
  try {
    const response = await axios.get(OMDB_BASE_URL, {
      params: {
        t: title,
        apikey: OMDB_API_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error('OMDb fetch error:', error);
    return null;
  }
};