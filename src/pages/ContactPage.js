import React from 'react';
import { Formik, Field, Form } from "formik";

const ContactPage = () => {
    return(
        <>
            <h4>Contact Us</h4>
            <Formik
                initialValues={{ name: "", email: "", subject: "", message: "" }}
                onSubmit={async values => {
                await new Promise(resolve => setTimeout(resolve, 500));
                alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                <lable>Name: </lable><Field name="name" type="text" /><br/>
                <lable>Email: </lable><Field name="email" type="email" /><br/>
                <lable>Subject: </lable><Field name="subject" type="text" /><br/>
                <lable>Message: </lable><Field name="message" type="text" /><br/>
                <button type="submit">Submit</button>
                </Form>
        </Formik>
      </>
    )
}

export default ContactPage;