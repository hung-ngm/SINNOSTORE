import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, NavDropdown, Button } from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';
import AuthCtx from '../../context/auth';
import { NavIcon } from './NavIcon';

export const NavBar = () => {
    const authCtx = useContext(AuthCtx);
    return (
        <div className="NavBar">
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">SinnoStore</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">    
                <Nav className="mr-auto">  
                    <NavDropdown title="Products" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/apps">Apps</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/iot">IoT</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                    
                    {authCtx.authUser ? <NavIcon /> : <Nav.Link as={Link} to="/auth" className="text-white">Sign In</Nav.Link>}
                    
                </Form>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}