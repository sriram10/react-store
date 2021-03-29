import React from 'react';
import {
    Form,
    Button
} from 'react-bootstrap'

export default class Contact extends React.Component{
    render(){
        return(
            <div>
                <Form>                    
                    {/* <Form.label>We'd Love to help You</Form.label> */}
                    <Form.Group>
                        <Form.Control type="text" placeholder="Enter Full Name" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>            
        );
    }
}