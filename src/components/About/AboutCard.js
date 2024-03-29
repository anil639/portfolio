import React from "react";
import Card from "react-bootstrap/Card";
import { FaUserGraduate } from "react-icons/fa";
const AboutCard = (props) => {
  return (
    <div>
      {props.data.map((value, i) => (
        <div style={{ marginBottom: "20px" }} key={i}>
          <Card className="about_card">
            <Card.Body>
              <div className="gra_icon">
                <div>
                  <FaUserGraduate size={50} style={{ color: "orange" }} />
                </div>
                <div className="card_mes">
                  <h6>{value.about}</h6>
                  <span>{value.name}</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default AboutCard;
