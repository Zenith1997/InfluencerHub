import React from "react";
import {Nav,NavDropdown,Navbar,Container} from 'react-bootstrap'
import { Outlet, Link } from "react-router-dom";

function Menu(){
    return(
        <div>
             <Navbar bg="light" variant="light" expand="lg">
            <Container>
                <Navbar.Brand>Admin Name</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-center">
                    <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                    <Nav.Link><Link to='/allUsers'>All Users</Link></Nav.Link>
                    <Nav.Link><Link to='/newUsers'>New Users</Link></Nav.Link>
                    <NavDropdown title="Reports" id="basic-nav-dropdown">
                    <NavDropdown.Item ><Link to='/accountReports'>Account Reports</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to='/commentReports'>Comment Reports</Link></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <Outlet />
        </div>
    )
}

export default Menu;