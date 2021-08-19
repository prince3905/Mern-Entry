import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import './Register.css';
import { Card, FormGroup, FormLabel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {Form} from 'react-bootstrap'
import { FloatingLabel } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

function Register () {

  const [user,setUser] = useState({
    name:'',
    email:'',
    password:'',
    rePassword:'',
  })
  
  const handleChange = e => {
    // console.log(e.target)
    const {name, value} = e.target
    setUser({
      ...user,
      [name]: value
    })
  }
  
  const userInfo = () =>{
    const{name,email,password,rePassword} = user
    console.log(user)
  }

  return(
  <div className="Register">
     <Container>
    <Card border="warning" style={{ height: '28rem', width: '35rem',textAlign:'center', borderRadius:'30px',boxShadow:'5px 5px black'}}>
<Row className="justify-content-md-center">
  <Col xs lg="10">
    <form style={{margin:'auto'}}>
    <Form.Group className="mb-0" controlId="formBasicEmail">
      <FormLabel><h1>Register</h1></FormLabel>
    <Form.Control type="name" name='name' value={user.name} onChange={handleChange} placeholder="Your Name" />
  </Form.Group>

  <Form.Group className="mb-0" controlId="formBasicEmail">
      <FormLabel><h1></h1></FormLabel>
    <Form.Control type="email" name='email' value={user.email} onChange={handleChange} placeholder="Your email" />
  </Form.Group>


  <Form.Group className="mb-0" controlId="formBasicPassword">
  <FormLabel><h1></h1></FormLabel>
    <Form.Control type="password" name='password' value={user.password} onChange={handleChange} placeholder="Your Password" />
  </Form.Group>

  <Form.Group className="mb-0" controlId="formBasicPassword">
  <FormLabel><h1></h1></FormLabel>
    <Form.Control type="password" name='rePassword' value={user.rePassword} onChange={handleChange} placeholder="Re-enter Your Password" />
  </Form.Group>

  <div className="d-grid gap-2" style={{marginTop:'10px'}}>
  <Button variant="primary" type="submit" size='sm' onClick={userInfo}>
  Register
  </Button>
  
  <h8>Or</h8>
  
  <Button variant="primary" type="submit" size='sm' >
    Login
  </Button>
  </div>
    </form>
  </Col>
  
</Row>
</Card>
</Container>
  </div>
);
}

// Register.propTypes = {};

// Register.defaultProps = {};

export default Register;
