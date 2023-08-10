import axios from 'axios';
const API_KEY = '86b2774f72e9923bd0f07dfe6f4fea8a';
const LANGUAGE = 'en-US';

const moviesInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: API_KEY,
        language: LANGUAGE,
    }
});

export default moviesInstance;