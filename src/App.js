import {Route,Routes} from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Moviepage from "./pages/Moviepage";
import Genrepage from "./pages/Genrepage";
import Homepage from "./pages/Homepage";
import MovieInfoPage from "./pages/MovieInfoPage";
import GenreInfoPage from "./pages/GenreInfoPage";




const App = ()=> {

  return (
    <div>
      <Routes>
        <Route path={''} element={<MainLayout/>}>
          <Route path={'home'} element={<Homepage/>}/>
          <Route path={'movie'} element={<Moviepage/>}/>
          <Route path={'movie/:id'} element={<MovieInfoPage/>}/>
          <Route path={'genre'} element={<Genrepage/>}/>
          <Route path={'genre/:id'} element={<GenreInfoPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
