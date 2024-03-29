import React from "react";
import {Nav,NavDropdown,Navbar,Container} from 'react-bootstrap'
import { Outlet, Link } from "react-router-dom";

function Menu(){
    return(
        <div>
             <Navbar bg="light" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand>InfluencerHub Admin</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-center">
                        <Nav.Link><Link to='/'  className="text-decoration-none">Home</Link></Nav.Link>
                        <Nav.Link><Link to='/allUsers'className="text-decoration-none"> All Users</Link></Nav.Link>
                        <Nav.Link><Link to='/newUsers' className="text-decoration-none">New Users</Link></Nav.Link>
                        <NavDropdown title="Reports" id="basic-nav-dropdown">
                        <NavDropdown.Item ><Link to='/accountReports' className="text-decoration-none">Account Reports</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='/commentReports' className="text-decoration-none">Comment Reports</Link></NavDropdown.Item>
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