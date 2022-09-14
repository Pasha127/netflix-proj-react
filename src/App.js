import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';

//http://www.omdbapi.com/?apikey=cd1382ea&s=harry%20potter    //<---for Searching Movies
//http://www.omdbapi.com/?apikey=cd1382ea&i=tt0241527         //<---For Specific Movie
function App() {
  return (
    <div className="App">
      <BrowserRouter>      
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
