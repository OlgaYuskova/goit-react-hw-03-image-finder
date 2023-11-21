import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '39858338-ffd7e7633f3f70977c15ff106';

const fetchImages = async ( query, page, perPage = 12  ) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    );
    return response.data.hits;
  } catch (error) {
    throw error;
  }
};

fetchImages()

export default fetchImages;

