import React from 'react';
// import PropTypes from 'prop-types';
import './Homepage.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function Homepage () {
  return(
  <div className="Homepage">
   <Card border="warning" style={{ height: '35rem', width: '35rem',textAlign:'center', borderRadius:'30px',boxShadow:'5px 5px black'}}>
  <Card.Body style={{marginTop:'15vw'}}>
    <Card.Title>Hello Homepage</Card.Title>
    <Card.Text>
    <Button variant="outline-primary">Logout</Button>{' '}
    </Card.Text>
  </Card.Body>
</Card>
  </div>
);
}

// Homepage.propTypes = {};

// Homepage.defaultProps = {};

export default Homepage;
