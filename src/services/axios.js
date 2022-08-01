import {baseURL, baseURL2} from "../constants";
import axios from "axios";

const axiosService = axios.create({baseURL});
const axiosService2 = axios.create({baseURL2})

axiosService.interceptors.request.use((config)=>{
    const access = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjhjNWJmMDM5NGI1ZmJkOWU2MzcyYjhiOWI4MmQ2YiIsInN1YiI6IjYyZTc3ZjY1NmQ5ZmU4MDA1ZWVjN2NhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3AKfzsKsscsK63d8JKxIoGHzqYVol6yRULn96Ne8jNQ"
    if(access){
        config.headers.Authorization = `Bearer ${access}`
    }
    return config
})
export {axiosService,axiosService2}