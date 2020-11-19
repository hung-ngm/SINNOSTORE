import React from "react";
import { NavBar } from "./Share/NavBar";
import { Footer } from "./Share/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button  } from 'react-bootstrap';

export const Contact = () => {
    return (
        <div className="Contact">
            <NavBar />
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicComments">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control type="text" placeholder="Comments" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
            <Footer/>
        </div>
    )
}
export default Contact;
