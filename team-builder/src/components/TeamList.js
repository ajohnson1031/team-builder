import React from "react";
import { Card, Image, Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../App.css";

const TeamList = props => {
  return (
    <Container className="teamlist-container">
      {props.characters[0] &&
        props.characters[0].map((teammate, i) => {
          return (
            <Card className="teammate" key={i}>
              <Image src={teammate.img} alt={teammate.name} />
              <Card.Content>
                <Card.Header className="teammate-header">
                  {teammate.name}
                </Card.Header>
                <Card.Content>
                  <ul>
                    <li>
                      <span style={{ fontWeight: "bold" }}>Rank:</span>{" "}
                      {teammate.rank}
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>Serial Number:</span>{" "}
                      {teammate.serial}
                    </li>
                  </ul>
                  <Card.Description>{teammate.history}</Card.Description>
                </Card.Content>
              </Card.Content>
            </Card>
          );
        })}
    </Container>
  );
};

export default TeamList;
