import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import '../App.css';

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [errorPass, setErrorPass] = useState('');
  const [errorMob, setErrorMob] = useState('');
  function validPass() {
    if((password.length<8)&&(password.length!=0)){setErrorPass('Password length should be > 8');}
    else{setErrorPass("");}
  }
  function validMob() {
    if(mobile.length!=10){setErrorMob('Mobile No. should have 10 digit');}
    else{setErrorMob("");}
  }

  function handleSubmit(event) {
    event.preventDefault();
  } 

  return (
    <div className="Register">
      <Form onSubmit={handleSubmit}>
      <Form.Group>
          <Form.Control
            type="text"
            value={name}
            required
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="email"
            value={email}
            required
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="tel"
            value={mobile}
            required
            placeholder="Enter Your Mobile No."
            onChange={(e) => setMobile(e.target.value)}
            onBlur={() => validMob()}
          />
        </Form.Group>
        <p className="error"> {errorMob} </p>
        <Form.Group>
          <Form.Control
            type="password"
            value={password}
            required
            placeholder="Enter Your Password (>8)"
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => validPass()}
          />
        </Form.Group>
        <p className="error"> {errorPass} </p>
        <Button block type="submit" >
          Register
        </Button>
      </Form>
    </div>
  );
}