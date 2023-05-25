import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css'
const Contact = () => {
    const [state, handleSubmit] = useForm("mbjeealz");
    if (state.succeeded) {
        return <h1 className='contact_mes'>Thank You</h1>
    }
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
                        <Form className='c_form' onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text"
                                    id="text"
                                    name="text"
                                    placeholder="Name"
                                    required />
                                <ValidationError
                                    prefix="Name"
                                    field="name"
                                    errors={state.errors}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email Address"
                                    required />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Number</Form.Label>
                                <Form.Control
                                    type="number"
                                    id="number"
                                    name="number"
                                    placeholder="contact Number"
                                    required />
                                <ValidationError
                                    prefix="Number"
                                    field="number"
                                    errors={state.errors}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    id="message"
                                    name="message"
                                    rows={3}
                                    required />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </Form.Group>
                            <Button className='form_button' type='submit' variant="primary" disabled={state.submitting}>Submit</Button>{' '}
                        </Form>
                    </Col>

                </Row>
            </Container>
        </div>

    )
}

export default Contact