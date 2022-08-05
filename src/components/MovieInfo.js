import StarsRating from "./StarsRating";
import {baseURL2} from "../constants";
import css from "../css/css.css";

export default function MovieInfo({movie}){
    const {title,release_date,overview,poster_path,vote_average} = movie;
    return(
        <div>
            <div className='text'>{title}</div>

            <div className='owerview'>

                <div className='width'><img className='img2' alt={`${title}`} src={baseURL2+poster_path}/></div>
                <div className='owerview'><h3>Description:</h3>{overview}<div><h3>Release date</h3></div>{release_date}
                    <StarsRating vote={vote_average}/>
                </div>

            </div>


        </div>

    );
}