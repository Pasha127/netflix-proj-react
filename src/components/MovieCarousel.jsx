import { useState, useEffect } from "react";
import { Carousel, Card, CarouselItem } from "react-bootstrap";
import SingleMovieCard from "./SingleMovieCard";

const MovieCarousel = (props) =>{
    /* const [color, setColor] = useState(""); */
    return(
        <>
        <Carousel fade>
  <Carousel.Item>
    {/* map cards */}<SingleMovieCard/>
  </Carousel.Item>
  <Carousel.Item>
  <Card className="mx-2" style={{ width: '14rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>    
  </Card.Body>
  </Card>
  <Card className="mx-2" style={{ width: '14rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>    
  </Card.Body>
  </Card>
  <Card className="mx-2" style={{ width: '14rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>    
  </Card.Body>
  </Card>
  <Card className="mx-2" style={{ width: '14rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>    
  </Card.Body>
  </Card>
  
  <Card className="mx-2" style={{ width: '14rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>    
  </Card.Body>
  </Card>
  </Carousel.Item>
  
</Carousel>
        </>
    )
}


export default MovieCarousel

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