import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../redux";
import MoviesListCard from "./MoviesListCard";
import {useSearchParams} from "react-router-dom";



export default function MoviesList(){

    const {movies,prev,next} = useSelector(state => state.movies);

    const {results} = movies;


     const dispatch = useDispatch();

     const [query, setQuery] = useSearchParams({page:'1'});

    useEffect(()=>{
        dispatch(movieActions.getAll({page:query.get('page')}))
    },[query])

    const  prevPage =()=> {
           const page = +query.get('page')-1;
           setQuery({page:`${page}`})
    };

    const nextPage =()=> {
        const page = +query.get('page')+1;
        setQuery({page:`${page}`})
    };

    return(
        <div>

            <div className='card'>
            {results && results.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
            <div className='pages'>
                <div className='page' aria-disabled={!prev} onClick={prevPage}>prev</div>
                <div className='page' aria-disabled={!next} onClick={nextPage}>next</div>
            </div>
        </div>
    );
}