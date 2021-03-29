import React from 'react';
import {
    Form,
    Button
} from 'react-bootstrap'

class Register extends React.Component{
    render(){
        return(
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="number" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="re-enter Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="I Accept the policies" />
                    </Form.Group>
                    <Button  variant="primary" type="submit">
                        Register Me
                    </Button>
                </Form>
            </div>            
        );
    }
}
export default Register;