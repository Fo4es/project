import {axiosService2} from "./axios";


const posterService = {

    getPost:(picture)=> axiosService2.get(`/${picture}`),
}
export {posterService}