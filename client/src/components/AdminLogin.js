import React from "react";
import { useNavigate } from 'react-router-dom';
import {Form,Button,Container} from 'react-bootstrap'

function AdminLogin(){
    const navigate = useNavigate();
    function goHome(){
        console.log("clicked")
        navigate('dashboard');
    }
    return(
        <div>
            <Container className="text-center col-md-3 border border-dark rounded-3" style={{marginTop:"300px"}}>
                <h2 style={{paddingTop:"40px"}}>Admin Login</h2>
                <Form style={{padding:"40px"}}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={goHome}>
                        Login
                    </Button>
                </Form>
            </Container>
        </div>
    )
}
export default AdminLogin;