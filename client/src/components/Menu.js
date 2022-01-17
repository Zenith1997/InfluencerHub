import React from "react";
import {Nav,NavDropdown,Navbar,Container} from 'react-bootstrap'

function Menu(){
    return(
        <div>
             <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-center">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">All Users</Nav.Link>
                    <Nav.Link href="#link">New Users</Nav.Link>
                    <NavDropdown title="Reports" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Account Reports</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Comment Reports</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default Menu;