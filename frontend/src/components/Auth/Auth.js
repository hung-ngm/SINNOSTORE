import React from "react";
import { Link, Route } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';



export const Auth = () => {
    return (
        <div>
        <Navbar bg="dark" variant="dark sticky-top">
        <Navbar.Brand as={Link} to="/">SinnoStore</Navbar.Brand>
        
        </Navbar>
        <Container>
        
        
        <Route path="/auth/signin" component={SignIn} />
        <Route path="/auth/signup" component={SignUp} />
        
        

        </Container>
        
        </div>
    )
}