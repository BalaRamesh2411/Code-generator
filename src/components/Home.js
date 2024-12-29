import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const navigateToQR = () => {
      navigate("/QR_code");
    };
  
    const navigateToBar = () => {
      navigate("/Bar_code");
    };
  return (
    <div className="container d-flex justify-content-center align-items-center flex-wrap gap-3 my-5">
    <h1 className="w-100 text-center">CODE GENERATOR</h1>
    <Card style={{ width: '18rem' }}>
      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
        <Card.Title>QR CODE GENERATOR</Card.Title>
        <Button variant="primary" onClick={navigateToQR}>QR_code</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
        <Card.Title>BAR CODE GENERATOR</Card.Title>
        <Button variant="primary" onClick={navigateToBar}>BAR_code</Button>
      </Card.Body>
    </Card>
  </div>
  )
}

export default Home