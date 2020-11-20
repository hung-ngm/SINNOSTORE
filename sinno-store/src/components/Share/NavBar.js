import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';



export const NavBar = () => {
    return (
        <div className="NavBar">
            <Navbar bg="dark" variant="dark sticky-top">
                <Navbar.Brand as={Link} to="/">SinnoStore</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <NavDropdown title="Products" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/apps">Apps</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/iot">IoT</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Sign In</Button>
                    <Button variant="outline-info">Sign Up</Button>
                </Form>
            </Navbar>
        </div>
    )
}