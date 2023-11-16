import React from "react";
import Card from "react-bootstrap/Card";
const Cards = (props) => {
  return (
    <div className="d-flex flex-wrap justify-content-center text-center">
      {props.details.map((value, i) => (
        <div style={{ marginLeft: "20px", marginBottom: "20px" }} key={i}>
          <Card className="card_bg" style={{ width: "16rem" }}>
            <Card.Img variant="top" src={value.image} className="card_image" />
            <Card.Body>
              <Card.Title className="card_title">{value.title}</Card.Title>
              <Card.Text className="card_description">
                {value.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Cards;
