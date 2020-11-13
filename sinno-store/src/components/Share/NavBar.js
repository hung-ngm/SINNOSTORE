import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';



export const NavBar = () => {
    return (
        <div className="NavBar">
            <Navbar bg="dark" variant="dark sticky-top">
                <Link to="/"><Navbar.Brand>SinnoStore</Navbar.Brand></Link>
                <Nav className="mr-auto">
                    <Link to="/"><Nav.Link>Home</Nav.Link></Link>
                    <NavDropdown title="Products" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to="/apps">Apps</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/iot">IoT</Link></NavDropdown.Item>
                    </NavDropdown>
                    <Link to="/contact"><Nav.Link disabled="false">Contact</Nav.Link></Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Log in</Button>
                </Form>
            </Navbar>
        </div>
    )
}