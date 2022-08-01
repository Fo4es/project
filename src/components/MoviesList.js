import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions, postActions} from "../redux";
import MoviesListCard from "./MoviesListCard";
import PosterPreview from "./PosterPreview";


export default function MoviesList(){
    const {movies} = useSelector(state => state.movies);
    // const {posts} = useSelector(state => state.posts);

    const {results} = movies;
    // const {results2} = posts;
    // useEffect(()=>{
    //     dispatch(postActions.getPost())
    // },[])

     const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(movieActions.getAll())
    },[])

    return(
        <div>
            {results && results.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
            {/*{results2 && results2.map(post=><PosterPreview key={post.id} movie={post}/>)}*/}
        </div>
    );
}