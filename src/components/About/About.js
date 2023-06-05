import React from 'react'
import './About.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import passport from './images/passport.JPG';
import AboutCard from './AboutCard';
import AboutData from './AboutData';

const About = () => {
    return (
        <div>
            <Container>
                <h1 className='about_heading'>Who Am I ?</h1>
                <Row>
                    <Col xs={12} md={6}>
                        <div className='about_mes'>
                            <p >Hello,I'm Anil kumar Nayak. an enthusiastic and dedicated web developer with a passion for creating impactful digital experiences.</p>
                            <p> I am eager to kick-start my career in this dynamic field.my enthusiasm and commitment to learning make me a valuable asset to any development team.</p>
                            <p>While my professional experience may be limited, I am constantly expanding my skill set through personal projects and online learning platforms. I am dedicated to staying updated with the latest industry trends and technologies, and I'm excited to apply my knowledge to real-world projects.</p>
                            <p>What sets me apart as a fresher is my eagerness to learn and my adaptability. I thrive in dynamic environments and embrace challenges as opportunities for growth. I have a keen eye for detail, ensuring that my code is clean, efficient, and follows best practices.</p>
                            <p>I would love to connect with you to discuss how my skills and enthusiasm can contribute to your organization. Let's collaborate and create amazing digital experiences together!</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div >
                            <img className='about_img' src={passport} alt="img" />
                        </div>
                    </Col>
                </Row>
                <h1 className='about_heading_1'>Education</h1>
                <Row>
                    <Col xs={12} md={6}>

                    </Col>
                    <Col xs={12} md={6}>
                        <AboutCard data={AboutData} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About