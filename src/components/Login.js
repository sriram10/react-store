import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import '../App.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  function validateForm() {
    if(password.length<8){setErrorMessage('Password length should be > 8');}
    else{setErrorMessage("");}
  }

  function handleSubmit(event) {
    event.preventDefault();
  } 

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Control
            type="email"
            value={email}
            required
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Control
            type="password"
            value={password}
            required
            placeholder="Enter Your Password (>8)"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <p className="error"> {errorMessage} </p>
        <Button block type="submit" onClick={() => validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}