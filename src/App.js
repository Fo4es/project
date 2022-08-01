import {Route,Routes} from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Moviepage from "./pages/Moviepage";
import Genrepage from "./pages/Genrepage";


const App = ()=> {
  return (
    <div>
      <Routes>
        <Route path={''} element={<MainLayout/>}>
          <Route path={'movie'} element={<Moviepage/>}/>
          <Route path={'genre'} element={<Genrepage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
