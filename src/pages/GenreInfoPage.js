import {useLocation} from "react-router-dom";
import GenreInfo from "../components/GenreInfo";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../redux";

export default function GenreInfoPage(){

    const location = useLocation();

    const {id} = location.state;

    const {movies} = useSelector(state => state.movies);

    const {results} = movies;

     const dispatch = useDispatch();

     useEffect(()=>{
         dispatch(movieActions.getGenre({id:id}))
     })




    return(
        <div>
        <div className='card'>
            {results && results.map(movie=><GenreInfo key={movie.id} movie={movie}/>)}
        </div>
        </div>
    );
}