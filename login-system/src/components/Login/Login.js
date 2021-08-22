import React, { useState } from "react";
// import PropTypes from 'prop-types';
import "./Login.css";
import { Card, FormLabel } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

import axios from "axios";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // console.log(e.target)
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const userLogin = () => {
    axios.post('http://localhost:5000/login' ,user).then(res => console.log(res)) 
    // console.log(user);
  };

  return (
    <div className="Login">
      <Container>
        <Card
          border="warning"
          style={{
            height: "25rem",
            width: "35rem",
            textAlign: "center",
            borderRadius: "30px",
            boxShadow: "5px 5px black",
          }}
        >
          <Row className="justify-content-md-center">
            <Col xs lg="10">
              <Form.Group className="mb-0" controlId="formBasicEmail">
                <FormLabel>
                  <h1>Login</h1>
                </FormLabel>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-0" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Enter your Password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
              </Form.Group>

              <div className="d-grid gap-2" style={{ marginTop: "10px" }}>
                <Button
                  variant="primary"
                  size="sm"
                  type="submit"
                  onClick={userLogin}
                >
                  Login
                </Button>

                <h5>Or</h5>

                <Button variant="primary" type="submit" size="sm">
                  Register
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default Login;
