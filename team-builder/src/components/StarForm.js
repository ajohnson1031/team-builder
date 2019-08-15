import React from "react";
import { Form, Button, Header, Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../App.css";

const StarForm = props => {
  const changeHandler = e => {
    props.fieldState[1]({
      ...props.fieldState[0],
      [e.target.name]: e.target.value
    });
  };

  const submitForm = event => {
    event.preventDefault();

    const newChar = props.fieldState[0];

    props.fieldState[0].name === "" ||
    props.fieldState[0].rank === "" ||
    props.fieldState[0].serial === "" ||
    props.fieldState[0].img === ""
      ? alert("All fields are required.")
      : props.createNewTeamMate(newChar);
  };

  return (
    <Form onSubmit={event => submitForm(event)}>
      <Container>
        <Header>Add A New Teammate!</Header>
      </Container>
      <Container className="form-fields">
        <Form.Field>
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={props.fieldState[0].name}
            onChange={event => changeHandler(event)}
          />
        </Form.Field>
        <Form.Field>
          <label>Rank</label>
          <input
            placeholder="Rank"
            name="rank"
            value={props.fieldState[0].rank}
            onChange={event => changeHandler(event)}
          />
        </Form.Field>
        <Form.Field>
          <label>Serial Number</label>
          <input
            placeholder="Serial Number"
            name="serial"
            value={props.fieldState[0].serial}
            onChange={event => changeHandler(event)}
          />
        </Form.Field>
        <Form.Field>
          <label>Image URL</label>
          <input
            placeholder="Image Url"
            name="img"
            value={props.fieldState[0].img}
            onChange={event => changeHandler(event)}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Container>
    </Form>
  );
};
export default StarForm;
