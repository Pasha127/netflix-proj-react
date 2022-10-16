import { useState, useEffect } from "react";
import {Navbar, Nav,Container, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

const MyNav = (props) =>{
    /* const [color, setColor] = useState(""); */
    return(
        <>
          <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
        </>
    )
}


export default MyNav

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