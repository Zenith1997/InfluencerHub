import React, { Component } from 'react'
import Menu from './Menu'
import {Accordion,Container,Row,Col,Form,Button} from 'react-bootstrap'

class AdminSettings extends Component{
    render(){
        return(
            <div>
                <Menu/>
                <Accordion defaultActiveKey="0" style={{padding:"10px 40px 0px 40px"}}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className="text-decoration-none text-dark">Register new Admin</Accordion.Header>
                        <Accordion.Body>
                            <Container>
                                <Form>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formFirstName">
                                                <Form.Control type="text" placeholder="First Name" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formLastName">
                                                <Form.Control type="text" placeholder="Last Name" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formEmail">
                                                <Form.Control type="email" placeholder="Email" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formContactNo">
                                                <Form.Control type="text" placeholder="Contact Number" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formPassword">
                                                <Form.Control type="password" placeholder="Password" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formPasswordRep">
                                                <Form.Control type="password" placeholder="Repeat Password" />
                                            </Form.Group>
                                        </Col>
                                        <Button variant="primary" type="submit">
                                            Register
                                        </Button>
                                    </Row>
                                </Form>
                            </Container>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion> 
            </div>       
        )
    }
}

export default AdminSettings;