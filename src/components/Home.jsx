import { useState, useEffect } from "react";
import { Carousel, Card } from "react-bootstrap";
import MovieCarousel from "./MovieCarousel";

const Home = (props) =>{
    /* const [color, setColor] = useState(""); */
    return(
        <>
        <MovieCarousel/>
        </>
    )
}


export default Home

/* useEffect(() => {
    //Runs on every render
  });
  useEffect(() => {
    //Runs only on the first render
  }, []);
  useEffect(() => {
    //Runs on the first render
    //And any time any dependency value changes
  }, [prop, state]); */