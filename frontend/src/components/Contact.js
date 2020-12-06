import React from "react";
import { NavBar } from "./Share/NavBar";
import { Footer } from "./Share/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button  } from 'react-bootstrap';

export const Contact = () => {
    return (
        <div className="Contact">
            <NavBar />
            <div className="App">
                 <Form className = "text-center">
                      <Form.Group as={Row} controlId="formBasicEmail">
                          <Form.Label column sm="3">Email address</Form.Label>
                          <Col sm="8">
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                              We'll never share your email with anyone else.
                            </Form.Text>
                          </Col>
                      </Form.Group>

                      <Form.Group as={Row} controlId="formBasicComments">
                        <Form.Label column sm="3">Comments</Form.Label>
                        <Col sm="8">
                          <Form.Control type="text" placeholder="Comments" />
                        </Col>
                      </Form.Group>
                      <Button  as={Row} column sm ="2" variant="primary" type="submit">
                        Submit
                      </Button>
                </Form>
            </div>
            <Footer/>
        </div>
    )
}
export default Contact;
