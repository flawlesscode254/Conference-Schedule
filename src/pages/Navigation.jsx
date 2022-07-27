import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            fixed="top"
            sticky="top"
            variant="dark"
        >
            <Container>
                {/* <img src={Logo} alt="logo" width={60} height={60} /> */}
                <Navbar.Brand
                    style={{
                        marginLeft: 30,
                    }}
                >
                    Conference Schedule
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Nav.Link
                            style={{
                                marginRight: 20,
                            }}
                        >
                            Duncan
                        </Nav.Link>
                        <Button variant="danger">
                            Logout
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;