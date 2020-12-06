import React from "react";
import { Link, Route } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';
import Avatar from '@material-ui/core/Avatar';


export const Auth = () => {
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Navbar.Brand as={Link} to="/">
                <Container  className="ml-0">
                <Avatar src="/sinno_logo.jpg" alt="" style={{ height: 35, marginRight: 10 }} />
                SinnoStore
                </Container>
                </Navbar.Brand>
                
            
            </Navbar.Collapse>
            </Navbar>
        <Container>
        
        
        <Route path="/auth" component={SignIn} exact />
        <Route path="/auth/signup" component={SignUp} />
        
        

        </Container>

        </div>
    )
}