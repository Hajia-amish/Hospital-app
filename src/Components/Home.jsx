import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../App.css";
import ExampleCarouselImage from "./ExampleCarouselImage";
import imagePaths from "./ImageList";
import doc from "./other/doctor1.jpeg";

const Home = () => {
  return (
    <div className="home">
      <Carousel>
        {imagePaths.map((imagePath, index) => (
          <Carousel.Item key={index}>
            <ExampleCarouselImage imagePath={imagePath} />
            <Carousel.Caption>
              <h3>Welcome to Amish hospitals</h3>
              <p>Your Health is our prioty </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <h2>Promotions</h2>
      <Container>
        <Row>
          <Col>
            <img src={doc} alt="Our doctors" className="doc" />
          </Col>
          <Col>
            <ul>
              <li>Free Antenatal for one month</li>
              <li>Free medications for six month</li>
              <li>Free eye screening</li>
              <li>50% off on all cadio related surgeries</li>
              <li>Free Antenatal for one month</li>
              <li>Free medications for six month</li>
              <li>Free eye screening</li>
              <li>50% off on all cadio related surgeries</li>
              <li>Free Antenatal for one month</li>
              <li>Free medications for six month</li>
              <li>Free eye screening</li>
              <li>50% off on all cadio related surgeries</li>
              <li>Free Antenatal for one month</li>
              <li>Free medications for six month</li>
              <li>Free eye screening</li>
              <li>50% off on all cadio related surgeries</li>{" "}
              <li>Free Antenatal for one month</li>
              <li>Free medications for six month</li>
              <li>Free eye screening</li>
              <li>50% off on all cadio related surgeries</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
