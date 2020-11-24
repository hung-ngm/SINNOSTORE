import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const SignUp = (props) => {
    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
          confirmPassword:""
        },
        validationSchema : Yup.object({
            email: Yup.string()
              .email("Invalid email format")
              .required("Required!"),
            password: Yup.string()
              .min(8, "Minimum 8 characters")
              .required("Required!"),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref("password")], "Password's not match")
              .required("Required!")
        }),
        onSubmit: (values) => {
            console.log(values.email, values.password)
        },  
        
    });
    

    return (
        
        <Card>
        <Card.Header as="h5">Sign Up</Card.Header>
        <Card.Body>
            <Form onSubmit={formik.handleSubmit}>

            <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" value={formik.values.email} onChange={formik.handleChange} />
            {formik.errors.email && formik.touched.email && (
                <Card.Text>{formik.errors.email}</Card.Text>
            )}
            </Form.Group>
        
            <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" value={formik.values.password} onChange={formik.handleChange} />
            {formik.errors.password && formik.touched.password && (
                <Card.Text>{formik.errors.password}</Card.Text>
            )}
            </Form.Group>
            
            <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" value={formik.values.confirmPassword} onChange={formik.handleChange} />
            {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                <Card.Text>{formik.errors.confirmPassword}</Card.Text>
            )}
            </Form.Group>
            
            <div className="d-flex">
                
            <Button type="submit" size="sm" variant="primary">Sign Up</Button>
            <Card.Text className="m-3">
            Have an account?
            <Card.Link as={Link} to="/auth"> Sign In</Card.Link>
            </Card.Text>
            
            
        </div>
            </Form>
        
            
        </Card.Body>
        </Card>
            
        
        
    )
}