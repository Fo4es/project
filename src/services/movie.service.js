import {axiosService} from "./axios";
import {urls} from "../constants";

const movieService = {
    getAll:()=> axiosService.get(urls.movies),
}
export {movieService}