import {Link} from "react-router-dom";

export default function Header(){
    return(
        <div>
            <div><Link to={'movie'}>Movie</Link></div>
            <div><Link to={'genre'}>Genre</Link></div>
        </div>
    );

    
}