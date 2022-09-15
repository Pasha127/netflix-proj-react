import { useState, useEffect } from "react";
import { Carousel, Card } from "react-bootstrap";

const SingleMovieCard = (props) =>{
    /* const [color, setColor] = useState(""); */
    return(
        <>
        <Card className="mx-2" style={{ width: '14rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{/* Movie Title */}</Card.Title>
    <Card.Text>
      {/* Movie details */}
    </Card.Text>    
  </Card.Body>
  </Card>
        </>
    )
}


export default SingleMovieCard

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