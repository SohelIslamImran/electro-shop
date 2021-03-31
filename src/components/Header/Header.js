import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container className="mb-5 mt-2">
            <Navbar bg="dark" expand="lg" variant="dark">
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src="https://i.ibb.co/0jY2wPb/logo-8.png"
                            height="40"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link as={Link} to="/" className="mr-4" active>Home</Nav.Link>
                            <Nav.Link as={Link} to="orders" className="mr-4" active>Orders</Nav.Link>
                            <Nav.Link as={Link} to="admin" className="mr-4" active>Admin</Nav.Link>
                            <Nav.Link as={Link} to="deals" className="mr-4" active>Deals</Nav.Link>
                            <Button as={Link} to="login" className="shadow-none" variant="primary">
                                Login
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;