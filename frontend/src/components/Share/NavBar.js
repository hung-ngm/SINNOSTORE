import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, NavDropdown, Container } from 'react-bootstrap';
import AuthCtx from '../../context/auth';
import { NavIcon } from './NavIcon';
import Avatar from '@material-ui/core/Avatar';


export const NavBar = () => {
    const authCtx = useContext(AuthCtx);
    return (
        <div className="NavBar">
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Navbar.Brand as={Link} to="/">
                <Container  className="ml-0">
                <Avatar src="/sinno_logo.jpg" alt="" style={{ height: 35, marginRight: 10 }} />
                SinnoStore
                </Container>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    
                    <NavDropdown title="Products" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/apps">Apps</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/iot">IoT</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    {authCtx.authUser ? <NavIcon /> : <Nav.Link as={Link} to="/auth" className="text-white">Sign In</Nav.Link>}
                    
                </Form>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}