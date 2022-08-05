import {useDispatch, useSelector} from "react-redux";
import Genre from "./Genre";
import {useEffect} from "react";

import {genreActions} from "../redux";

export default function GenreBadge(){
    const {genre} = useSelector(state => state.genre);

    const dispatch = useDispatch();

    const {genres} = genre;

    useEffect(()=>{
        dispatch(genreActions.getAll())
    },[])

    return(
        <div  className='genres'>
            {genres && genres.map(genre=><Genre key={genre.id} genre={genre}/>)}
        </div>
    );
}