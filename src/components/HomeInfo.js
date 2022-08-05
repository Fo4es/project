import {baseURL2} from "../constants";
import StarsRating from "./StarsRating";
import {Link} from "react-router-dom";

export default function HomeInfo({movie}) {

    const {original_title,poster_path,vote_average,id} = movie

    return (

        <Link to ={`/movie/${id}`} state={movie}><div className='result-card'>
            <div ><img alt={`${original_title}`} src={baseURL2+poster_path}/></div>

            <div>
                <div className='text'>{original_title}</div>
                <div className='stars'><StarsRating vote={vote_average}/></div>
            </div>
        </div></Link>
    );
}