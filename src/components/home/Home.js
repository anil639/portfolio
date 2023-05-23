import React from 'react'
import './Home.css';
import SocialMedia from '../SocialMedia/SocialMedia';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Home = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <h1 className='text-nowrap'>Anil Kumar Nayak</h1>
                        <h3 className='mes1'>A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</h3>
                        <SocialMedia />
                    </Col>
                    <Col xs={12} md={6} >
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home