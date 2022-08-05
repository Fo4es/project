import {Link} from "react-router-dom";

export default function Genre({genre}){
    const {name,id} = genre;

    return(
        <div className='genre'>

              <Link to={`/genre/${id}`} state={genre}>{name}</Link>
        </div>
    );
}
