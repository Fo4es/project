const baseURL = 'https://api.themoviedb.org/3/';
const baseURL2 = 'https://image.tmdb.org/t/p/w500';

const urls = {

    movies:'discover/movie?page',
    genre:'genre/movie/list',
    genrelist:'discover/movie?sort_by=popularity.desc&page&with_genres=',
    sort_movies:'discover/movie?sort_by=vote_average.desc&page&vote_count.gte=700'
}
export {baseURL,urls,baseURL2}
