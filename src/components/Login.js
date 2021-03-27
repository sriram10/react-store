import React from "react";
import { Alert, Button, Form } from "react-bootstrap";
import * as yup from 'yup';

const loginValidation = yup.object({
  email: yup.string().email().required("Enter valid email"),
  password: yup.string().min(8).max(12).required("Enter valid password")
})

class Login extends React.Component {
  state={
    email: "",
    password: "",
    error: ""
  }

  handleChange = (key, value) => {
    this.setState({
      [key]: value,
      error: ""
    }, () => {
      // if(key === "password" && this.state.password.length < 8) {
      //   this.setState({
      //     error: "Password should be min 8 chars long!"
      //   })
      // }
    })
  }

  onLoginSubmit = e => {
     e.preventDefault();
      loginValidation.validate(this.state)
      .then(res => {
        console.log('VALIDATION >>', res)
      })
      .catch(err => {
        console.log('ERRORS >> ', err.errors)
      })
  }

  render() {
    const { email, password, error } = this.state;

    return (
      <div>
        { error && <Alert variant="danger">{error}</Alert> }
        <Form onSubmit={this.onLoginSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter email" value={email} onChange={(e) => this.handleChange("email", e.target.value)} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => this.handleChange("password", e.target.value)} style={{ borderColor: error ? 'red' : '#ccc' }} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Upload</Form.Label>
            <Form.Control type="file" onChange={e => {
              console.log(e.target.files)
            }} />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
