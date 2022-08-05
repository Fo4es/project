import {useLocation} from "react-router-dom";
import MovieInfo from "../components/MovieInfo";

export default function MovieInfoPage(){

    const location = useLocation();




    return(
        <div>
            <MovieInfo movie={location.state}/>
        </div>
    );
}