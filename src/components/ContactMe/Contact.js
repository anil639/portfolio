import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import './Contact.css'
const Contact = () => {
    return (
        <div className='contact_pg'>
            <Container>
                <Row>
                    <Col className='card_c_bg' >
                        <h1>Contact Me</h1><br />
                        <h4>Address</h4>
                        <p>Nepur,jagatsinghpur,Odisha</p>
                        <h1>Phone</h1>
                        <h4>Mobile Number</h4>
                        <p>(+91)8895312122</p>
                        <h1>Email</h1>
                        <p>anilkumarnayak639@gmail.com</p>
                    </Col>

                    <Col className='card1_c_bg'>
                        <Form className='c_form'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Number</Form.Label>
                                <Form.Control type="number" placeholder="Phone Number" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button className='form_button' variant="primary">Submit</Button>{' '}
                        </Form>
                    </Col>

                </Row>
            </Container>
        </div>

    )
}

export default Contact