import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../redux";
import HomeInfo from "../components/HomeInfo";
import {useSearchParams} from "react-router-dom";

export default function Homepage(){

    const {movies,prev,next} = useSelector(state => state.movies);


    const {results} = movies;



    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page:'1'});

    useEffect(()=>{
        dispatch(movieActions.getSortMovie({page:query.get('page')}))
    },[query])

    const prevPage =()=> {
        const page = +query.get('page')-1;
        setQuery({page:`${page}`})
    }

    const nextPage =()=> {
        const page = +query.get('page')+1;
        setQuery({page:`${page}`})
    }

    return(
        <div>
            <h2 className='text' >The most rating films </h2>
            <div className='card'>
            {results && results.map(movie=><HomeInfo key={movie.id} movie={movie}/>)}
            </div>
                <div className='pages'>
                <div className='page' aria-disabled={!prev} onClick={prevPage}>prev</div>
                <div className='page' aria-disabled={!next} onClick={nextPage}>next</div>
            </div>
            </div>

    );
}