import {axiosService} from "./axios";
import {urls} from "../constants";

const movieService = {

    getAll:(page=1)=> axiosService.get(urls.movies,{params:{page}}),
    getSortMovie:(page=1)=> axiosService.get(urls.sort_movies,{params:{page}})
    // getMovieGenre:()=> axiosService.get(urls.movies)
}
export {movieService}