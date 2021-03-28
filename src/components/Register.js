import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useFormFields } from "../libs/hooksLib";
import LoaderButton from "../components/LoaderButton";
import "../App.css";
import { withRouter, useHistory } from 'react-router-dom';

function Register() {
  var [fields, handleFieldChange] = useFormFields({
    name:"",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  let history = useHistory();

  function validateForm() {
    return (
      fields.email.length > 0 &&
      fields.password.length > 0 &&
      fields.password === fields.confirmPassword
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    alert(fields.email +" has been registered" );
    setIsLoading(false);
    history.push('/');
  }

  return (
    <div className="Register">
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name" size="lg">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type="name"
            value={fields.name}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group controlId="email" type ="email" size="lg" placeholder="name@example.com">
          <Form.Label>Email*</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group controlId="password" size="lg">
          <Form.Label>Password*</Form.Label>
          <Form.Control
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group controlId="confirmPassword" size="lg">
          <Form.Label>Confirm Password*</Form.Label>
          <Form.Control
            type="password"
            onChange={handleFieldChange}
            value={fields.confirmPassword}
          />
        </Form.Group>
        <div value={fields.error} class= "error"></div>
        <LoaderButton
          block
          size="lg"
          type="submit"
          variant="success"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Register
        </LoaderButton>
      </Form>

    </div>
  );
}
export default withRouter(Register);