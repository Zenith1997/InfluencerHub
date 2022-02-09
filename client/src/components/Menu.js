import React from "react";
import {Nav,NavDropdown,Navbar,Container} from 'react-bootstrap'
import { Outlet, Link } from "react-router-dom";

const handleLogout = () => {
    localStorage.clear();
  };

function Menu(){
    return(
        <div>
        <Navbar bg="light" variant="light" expand="lg">
                    <Container>
                        <Navbar.Brand><Link to='/dashboard' className="text-decoration-none text-dark">InfluencerHub</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-center">
                            <Nav.Link><Link to='/dashboard'  className="text-decoration-none text-dark">Home</Link></Nav.Link>
                            <Nav.Link><Link to='/allUsers'className="text-decoration-none text-dark"> All Users</Link></Nav.Link>
                            <Nav.Link><Link to='/newUsers' className="text-decoration-none text-dark">New Users</Link></Nav.Link>
                            <NavDropdown title="Reports" id="basic-nav-dropdown">
                            <NavDropdown.Item ><Link to='/accountReports' className="text-decoration-none text-dark">Account Reports</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to='/commentReports' className="text-decoration-none text-dark">Comment Reports</Link></NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link><Link to='/suspendedUsers' className="text-decoration-none text-dark">Suspended Users</Link></Nav.Link>
                            <Nav.Link><Link to='/adminSettings' className="text-decoration-none text-dark">Settings</Link></Nav.Link>
                            <Nav.Link onClick={handleLogout}><Link to='/' className="text-decoration-none text-dark">Log out</Link></Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Outlet />       
        </div>
    )
}

export default Menu;