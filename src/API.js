import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '39858338-ffd7e7633f3f70977c15ff106';

const fetchImages = async ( query, page, perPage = 12 ) => {
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

// const API_KEY = '39858338-ffd7e7633f3f70977c15ff106';
// axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.params = {
//   key: API_KEY,
//   image_type: 'photo',
//   orientation: 'horizontal',
//   per_page: 12,
// };
//  const fetchImages = async (query, page) => {
//   const fetchImage = await axios.get(`?q=${query}&page=${page}`);
//   return fetchImage.data.hits;
// };

// export default fetchImages;