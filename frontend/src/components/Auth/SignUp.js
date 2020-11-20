import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

export const SignUp = (props) => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleChanges = (event) => {
        setValues({
            ...values,
            [event.target.name] : event.target.value
        })
    }

    return (
        
        <Card>
        <Card.Header as="h5">Sign Up</Card.Header>
        <Card.Body>
            <Form>

            <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" value={values.email} onChange={handleChanges} />
            
            </Form.Group>
        
            <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" value={values.password} onChange={handleChanges} />
            </Form.Group>
            
            <Form.Group controlId="password">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" value={values.confirmPassword} onChange={handleChanges} />
            </Form.Group>
            
            
            </Form>
        
            <Button variant="primary">Submit</Button>
        </Card.Body>
        </Card>
            
        
        
    )
}