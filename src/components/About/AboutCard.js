import React from 'react'
import Card from 'react-bootstrap/Card'
import { FaUserGraduate } from "react-icons/fa";
const AboutCard = (props) => {
    return (

        <div>
            {props.data.map((value) => (
                <div style={{ marginBottom: '20px' }}>
                    <Card className='about_card'>
                        <Card.Title>


                        </Card.Title>
                        <Card.Body>
                            <div className='gra_icon'>
                                <FaUserGraduate size={50} style={{ color: "orange" }} />
                                <h6 className='card_mes'>{value.about}</h6>
                                <span className='card_mes'>{value.name}</span>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            ))
            }
        </div>

    )
}

export default AboutCard