import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../App.css';

const About = () => {
  return (
    <div className="about">
      <h1>About Our Hospital</h1>
      <Container>
        <Row>
          <Col md={6}>
            <h2>Mission and Values</h2>
            <p>At Amish Hospitals, our mission is to provide exceptional healthcare services to our community, ensuring the highest standards of patient care and safety...</p>
            <p>We are guided by values of compassion, integrity, innovation, and patient-centered care. Our commitment is to deliver personalized and comprehensive medical services...</p>

            <h2>History and Background</h2>
            <p>Founded in 1990 by Dr. Hamidatu , Amish Hospitals has grown from a small clinic to a leading medical institution serving the Kasoa Ghana area...</p>
            <p>Throughout our journey, we have focused on delivering advanced healthcare solutions, investing in cutting-edge technology, and building a team of skilled professionals...</p>

            <h2>Leadership and Staff</h2>
            <p>Meet our dedicated team of medical professionals who are committed to delivering high-quality care with compassion and expertise...</p>
            <p>Under the guidance of our CEO, Dr, Adjei, our leadership team brings together diverse talents to ensure our hospital's continuous growth and excellence...</p>

            <h2>Facilities and Services</h2>
            <p>With over 3000 beds and 150 specialized departments, Amish Hospitals offers a comprehensive range of services to address a wide spectrum of medical needs...</p>
            <p>Our services include specialized treatments in areas such as cardiology, oncology, surgery, pediatrics, neurology, and more, all delivered by experienced and skilled physicians...</p>
          </Col>
          <Col md={6}>
            <h2>Technology and Innovations</h2>
            <p>We are at the forefront of medical innovation, utilizing state-of-the-art technology and advanced medical equipment to ensure accurate diagnoses and effective treatments...</p>
            <p>From robotic-assisted surgeries to precision diagnostics, our commitment to innovation drives us to continuously improve patient outcomes and provide the best care possible...</p>

            <h2>Patient Testimonials</h2>
            <p>"I am grateful for the exceptional care I received at Amish Hospitals. The medical staff's dedication and expertise made a significant difference in my recovery." - Mr. Boateng</p>
            <p>"The warm and caring environment at Amish Hospitals made me feel like family during my treatment journey. Thank you for the outstanding care." - Mrs.Agyeman</p>

            <h2>Community Involvement</h2>
            <p>Amish Hospitals takes pride in actively engaging with our community through various programs, workshops, and health awareness campaigns...</p>
            <p>We partner with local schools, organizations, and charities to promote health education and raise awareness about preventive care, healthy living, and wellness...</p>

            <h2>Accreditations and Certifications</h2>
            <p>Amish Hospitals is accredited by the National Accreditations Board and has received  numerous Awards and Recognitions for our commitment to quality and safety...</p>
            <p>These accolades are a testament to our unwavering dedication to providing exceptional healthcare services and maintaining the highest standards of patient care...</p>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
