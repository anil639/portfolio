import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Contact.css'
const Contact = () => {
    return (
        <div >
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <Card style={{ width: '25rem' }}>
                            <Card.Body>
                                <h1>Contact Me</h1><br />
                                <h4>Address</h4>
                                <p>Nepur,jagatsinghpur,Odisha</p>
                                <h1>Phone</h1><br />
                                <h4>Mobile Number</h4>
                                <p>(+91)8895312122</p>
                                <h1>Email</h1>
                                <p>anilkumarnayak639@gmail.com</p>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={8} >
                        <Card style={{ width: '50rem' }}>
                            <Card.Body>
                                welcome
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Contact