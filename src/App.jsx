import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import "@fortawesome/fontawesome-free/css/all.min.css"
import Tv from "./components/Tv";
import Movies from "./components/Movies";
import People from "./components/People";

function App() {
  return (
      <div className="App">
            <Navbar/>
        <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="movies" element={<Movies/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="people" element={<People/>}/>
            <Route path="tv" element={<Tv/>}/>
            <Route path="*" element={<h1>Not Found</h1>}/>
        </Routes>
      </div>
  );
}

export default App;
