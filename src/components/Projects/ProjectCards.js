import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const ProjectCards = (props) => {
  return (
    <div className="d-flex flex-wrap justify-content-center text-center">
      {props.details.map((value) => (
        <div style={{ marginLeft: "20px", marginBottom: "20px" }}>
          <Card className="card_bg" style={{ width: "16rem" }}>
            <Card.Img variant="top" src={value.image} className="card_image" />
            <Card.Body>
              <Card.Title className="card_title">{value.title}</Card.Title>
              <Card.Text className="card_description">
                {value.description}
              </Card.Text>
              <Button href={value.site_link} target="_blank" variant="warning">
                Go To Website
              </Button>{" "}
              <Button
                href={value.github_link}
                target="_blank"
                variant="warning"
              >
                Github
              </Button>{" "}
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
