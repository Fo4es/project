import MovieInfo from "./MovieInfo";
import {baseURL2} from "../constants";
import StarsRating from "./StarsRating";
import {Link} from "react-router-dom";
import css from '../css/css.css'

export default function GenreInfo({movie}){
   const {title,poster_path,vote_average,id} = movie

    return(
        <div className='result-card'>
            <Link to ={`/movie/${id}`} state={movie}>
                <div>
                <div ><img alt={`${title}`} src={baseURL2+poster_path}/></div>
                <div>
                    <div className='text'>{title}</div>
                    <div className='stars'><StarsRating vote={vote_average}/></div>
                </div>
            </div></Link>
        </div>
    );
}