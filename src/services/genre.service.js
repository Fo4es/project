import {axiosService} from "./axios";
import {urls} from "../constants";

const genreService = {

    getAll:()=>axiosService.get(urls.genre),
    getGenre:(id)=>axiosService.get(urls.genrelist+`${id}`)
}
export {genreService}