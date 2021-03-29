import React from 'react';
import { Form, Button } from 'react-bootstrap';
const Register = () => {
    const showAlert = () => {
        alert("Registered Successfully")
    }
    return (
        <div className="register">
            <div className="register-title">
                <h1>Register</h1>
            </div>
            <Form>
                <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="formBasicAge">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="Enter Age" />
                </Form.Group>
                <Form.Group controlId="formBasiclAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Address" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicPasswordCon">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                
                <Button variant="primary" type="submit" onClick = {showAlert}>
                Submit
                </Button>
            </Form>
        </div>
    );
}

export default Register;