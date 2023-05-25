import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router-dom';
import SocialMedia from '../SocialMedia/SocialMedia';
import './Contact.css'
const Contact = () => {
    const [state, handleSubmit] = useForm("mbjeealz");
    const navigate = useNavigate()
    if (state.succeeded) {
        return (
            <div className='contact_mes'>
                <h1>Thank You</h1>
                <button className='back_button' onClick={() => navigate(-1)}>Go Back</button>
            </div>
        )
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
                        <div className='contact_social_media_icon'>
                            <SocialMedia />
                        </div>
                    </Col>
                    <Col className='card1_c_bg'>
                        <Form className='c_form' onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" >
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
                            <Form.Group className="mb-3" >
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
                            <Form.Group className="mb-3" >
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
                            <Form.Group className="mb-3" >
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
                <iframe className='map_contact' title='myFrame' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14973.097293118914!2d86.20128384976319!3d20.24745469815984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1981abeeef41e3%3A0x7a14fc5ec909c4c6!2sNepur%2C%20Odisha!5e0!3m2!1sen!2sin!4v1685040053880!5m2!1sen!2sin" width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </Container>
        </div>

    )
}

export default Contact