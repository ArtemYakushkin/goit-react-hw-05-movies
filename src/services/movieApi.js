import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '7074c4672eaf06c100035e388f3425d1';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const getTrendingMovies = () => {
    return axios
        .get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
        .then(response => response.data.results)
};

const getSearchMovies = searchQuery => {
    return axios
        .get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`)
        .then(response => response.data.results)
};

const getMovie = id => {
    return axios
        .get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=images&language=en-US`)
        .then(response => response.data)
};

const getCast = id => {
    return axios
        .get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
        .then(response => response.data)
};

const getReviews = id => {
    return axios
        .get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
        .then(response => response.data)
};

const movieApi = { getTrendingMovies, getSearchMovies, getMovie, getCast, getReviews };

export default movieApi;