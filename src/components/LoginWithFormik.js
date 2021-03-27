import { Formik } from "formik";
import React from "react";
import { Alert, Button, Form } from "react-bootstrap";
import * as yup from 'yup';

const loginValidation = yup.object({
  email: yup.string().email().required("Enter valid email"),
  password: yup.string().min(8).max(12).required("Enter valid password")
})

class LoginWithFormik extends React.Component {
  
  onLoginSubmit = data => {
     console.log(data)
  }

  render() {
    return (
      <div>
        <Formik onSubmit={this.onLoginSubmit} initialValues={{ email: "", password: "" }} validationSchema={loginValidation} validateOnChange={false} >
          {
            (props) => {
              const { values, errors, handleChange, handleSubmit } = props;
              console.log('Form Errors >> ', errors)
              return (
                <Form onSubmit={handleSubmit}>
                  {/* { error && <Alert variant="danger">{error}</Alert> } */}
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" value={values.email} onChange={handleChange('email')} />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={values.password} onChange={handleChange('password')} />
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
              )
            }
          }
        </Formik>
      </div>
    );
  }
}

export default LoginWithFormik;
