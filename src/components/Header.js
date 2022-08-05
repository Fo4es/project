import {Link} from "react-router-dom";
import css from "../css/css.css";

export default function Header(){
    return(
        <div className='headers'>

            <div className='header' ><Link to={'home'}>Home</Link></div>
            <div className='header'><Link to={'movie'}>Movie</Link></div>
            <div className='header'><Link to={'genre'}>Genre</Link></div>
        </div>
    );
}