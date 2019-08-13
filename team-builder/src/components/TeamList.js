import React from "react";
import { Card, Image, Container } from "semantic-ui-react";

const TeamList = props => {
  return (
    <Container className="teamlist-container">
      {console.log(props)}
      {props.characters.map((teammate, i) => {
        return (
          <Card className="teammate" key={i}>
            <Image src={teammate.img} alt={teammate.name} />
            <Card.Content>
              <Card.Header>{teammate.name}</Card.Header>
              <Card.Content>
                <h3>Character Stats</h3>
                <ul>
                  <li>
                    <span style={{ fontWeight: "bold" }}>Rank</span>{" "}
                    {teammate.rank}
                  </li>
                  <li>
                    <span style={{ fontWeight: "bold" }}>Serial Number:</span>{" "}
                    {teammate.serial}
                  </li>
                  <li>
                    <span style={{ fontWeight: "bold" }}>Living Quarters</span>{" "}
                    {teammate.quarters}
                  </li>
                  <li>
                    <span style={{ fontWeight: "bold" }}>Education:</span>{" "}
                    {teammate.education}
                  </li>
                  <li>
                    <span style={{ fontWeight: "bold" }}>Date of Birth:</span>{" "}
                    {teammate.dob}
                  </li>
                  <li>
                    <span style={{ fontWeight: "bold" }}>Place of Birth:</span>{" "}
                    {teammate.pob}
                  </li>
                  <li>
                    <span style={{ fontWeight: "bold" }}>Marital Status:</span>{" "}
                    {teammate.marital}
                  </li>
                  <li>
                    <span style={{ fontWeight: "bold" }}>Children:</span>{" "}
                    {teammate.children}
                  </li>
                  <li>
                    <span style={{ fontWeight: "bold" }}>Date of Death:</span>{" "}
                    {teammate.dod}
                  </li>
                  <li>
                    <span style={{ fontWeight: "bold" }}>Place of Death:</span>{" "}
                    {teammate.pod}
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
