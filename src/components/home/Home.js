import React from 'react'
import './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Home = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <h1 className='text-nowrap'>Anil Kumar Nayak</h1>
                        <h3 className='mes1'>A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</h3>
                        <div className='icon-container'>
                            <a href="https://github.com/Anil-Kumar-nayak-639">
                                <span className='h-icon'>
                                    <BsGithub size={30} style={{ color: 'white' }} />
                                </span>
                            </a>
                            <a href="https://www.linkedin.com/in/anil-kumar-nayak-39a85a18a/">
                                <span className='h-icon'>
                                    <BsLinkedin size={30} style={{ color: '#0A66C2' }} />
                                </span>
                            </a>
                            <a href="mailto:anilkumarnayak639@gmail.com">
                                <span className='h-icon'>
                                    <SiGmail size={30} style={{ color: 'red' }} />
                                </span>
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} md={6} >
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home