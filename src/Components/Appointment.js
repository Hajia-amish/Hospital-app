import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../App.css';

const Appointment = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulating a response message (you can replace this with actual logic)
    const responseMessage = 'Your appointment has been scheduled for Cardiology on May 5th, 2023 at 2:30 PM.';
    setSubmissionStatus(responseMessage);
  };

  return (
    <div className='appointment'>
      <h1>Appointment Page</h1>
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="appointmentName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="appointmentService">
        <Form.Label>Select Service</Form.Label>
        <Form.Control as="select">
        <option value="selct">Please Select Service</option>
          <option value="cardiology">Cardiology</option>

          <option value="radiology">Radiology</option>
          <option value="Lobaratory Service">Lobaratory Service</option>
          <option value="Emergency Care">Emergency Care</option>
          <option value="Neurologists">Neurologists</option>
          <option value="Surgery">Surgery</option>
          <option value="Pediatrics">Pediatrics</option>
          <option value="Out Patient Department">Out Patient Departments</option>
          </Form.Control>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="appointmentDate">
            <Form.Label>Preferred Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="appointmentTime">
            <Form.Label>Preferred Time</Form.Label>
            <Form.Control type="time" />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="appointmentNotes">
            <Form.Label>Additional Notes</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
              <Button variant="primary" type="submit">
                Schedule Appointment
              </Button>
            </Form>
          </Col>
          <Col>
            {submissionStatus ? (
              <div className="submission-response">
                <h2>Appointment Confirmation</h2>
                <p>{submissionStatus}</p>
                <Button variant="primary" type="submit">
    Print Appointment
              </Button>
              </div>
            ) : (
              <p>Submit the form to schedule your appointment.</p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Appointment;

/*

<Form onSubmit={handleSubmit}>
      
    
          <Button variant="primary" type="submit">
            Schedule Appointment
          </Button>
        </Form>
*/