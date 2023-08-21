import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../App.css";
import lab from './other/Laboratory Services.jpeg';
import Pediatrics from './other/Pediatrics.jpeg';
import Radiology from './other/Radiology.jpeg';
import Surgery from './other/Surgery.jpeg';
import car from './other/cardio.jpeg';
import em from './other/emergency.jpeg';
import neo from './other/nero.jpeg';
import opd from './other/opd.jpeg';
import prim from './other/primary.jpeg';

const Services = () => {
  return (
    <div className="service">
      <h3>We offer Variety of service</h3>
      <h5>Please Browse and select a service to read more</h5>
      <Container>
        <Row>
          <Col>
            {" "}
            <Card style={{ width: "18rem" , height:'25rem'}}>
              <Card.Img variant="top" src={lab} />
              <Card.Body>
                <Card.Title>Lobaratory Service</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Read more!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={em} />
              <Card.Body>
                <Card.Title>Emergency Care</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Read more!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={prim} />
              <Card.Body>
                <Card.Title>Primary Care</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Read more!</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={car} />
              <Card.Body>
                <Card.Title>Cardiologists</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Read more!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={neo} />
              <Card.Body>
                <Card.Title>Neurologists</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Read more!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Surgery} />
              <Card.Body>
                <Card.Title>Surgery</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Read more!</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Pediatrics} />
              <Card.Body>
                <Card.Title>Pediatrics</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Read more!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Radiology} />
              <Card.Body>
                <Card.Title>Radiology</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Read more!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={opd} />
              <Card.Body>
                <Card.Title>Out Patient Department</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Read more!</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
       
      </Container>
    </div>
  );
};

export default Services;
