import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Appointment from "./Components/Appointment";
import Home from "./Components/Home";
import Services from "./Components/Services";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar bg="primary" data-bs-theme="dark"fixed="top" >
        <Container fluid>
          <Navbar.Brand href="#">Hospital App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/appointment">
                Appointment
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/services" Component={Services} />
        <Route path="/appointment" Component={Appointment} />
        <Route path="/about" Component={About} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
/*         <Nav className="ml-auto">

</Nav>
*/
