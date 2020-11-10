import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';



export const NavBar = () => {
    return (
        <div className="NavBar">
            <Navbar bg="dark" variant="dark sticky-top">
                <Navbar.Brand href="#home">SinnoStore</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavDropdown title="Products" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Apps</NavDropdown.Item>
                        <NavDropdown.Item href="#">IoT</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Log in</Button>
                </Form>
            </Navbar>
        </div>
    )
}