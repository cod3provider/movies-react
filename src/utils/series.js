import moviesInstance from "./api.js";

export const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

export const getTrendingSeries = async () => {
    const response = await moviesInstance.get('/trending/tv/day');
    return response.data.results;
}

export const searchSeries = async query => {
    const response = await moviesInstance.get(`/search/tv?query=${query}`);
    // console.log(response.data.results)
    return response.data.results;
}

export const getSeriesDetails = async movieId => {
    const response = await moviesInstance.get(`/tv/${movieId}`);
    return response.data;
}

export const getSeriesCast = async movieId => {
    const response = await moviesInstance.get(`/tv/${movieId}/credits`);
    return response.data.cast;
}

export const getSeriesReviews = async movieId => {
    const response = await moviesInstance.get(`/tv/${movieId}/reviews`);
    return response.data.results;
}
