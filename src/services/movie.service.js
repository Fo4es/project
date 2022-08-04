import {axiosService} from "./axios";
import {urls} from "../constants";

const movieService = {
    getAll:(page)=> axiosService.get(urls.movies,{params:{page}}),
    // getMovieGenre:()=> axiosService.get(urls.movies)
}
export {movieService}