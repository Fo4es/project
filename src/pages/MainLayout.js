import Header from "../components/Header";
import {Outlet} from "react-router-dom"
import css from "../css/css.css";



export default function MainLayout(){
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
}