import Header from "../components/Header";
import {Outlet} from "react-router-dom"
import css from "../css/css.css";
import Homepage from "./Homepage";


export default function MainLayout(){
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
}