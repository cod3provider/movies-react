import axios from 'axios';
import moviesInstance from "./api.js";

// axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// axios.defaults.params = {
//     api_key: '86b2774f72e9923bd0f07dfe6f4fea8a',
//     language: 'en-US',
// }

export const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

export const getTrendingMovies = async () => {
    const response = await moviesInstance.get('/trending/movie/day');
    return response.data.results;
}

export const searchMovies = async query => {
    const response = await moviesInstance.get(`/search/movie?query=${query}`);
    console.log(response.data.results)
    return response.data.results;
}

export const getMovieDetails = async movieId => {
    const response = await moviesInstance.get(`/movie/${movieId}`);
    return response.data;
}

export const getMovieCast = async movieId => {
    const response = await moviesInstance.get(`/movie/${movieId}/credits`);
    return response.data.cast;
}

export const getMoviesReviews = async movieId => {
    const response = await moviesInstance.get(`/movie/${movieId}/reviews`);
    return response.data.results;
}
