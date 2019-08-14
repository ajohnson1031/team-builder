import React, { useState } from "react";
import { Form, Button, Header, Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../App.css";

const StarForm = props => {
  console.log(props);
  return (
    <Form>
      <Container>
        <Header>Add A New Teammate!</Header>
      </Container>
      <Container className="form-fields">
        <Form.Field>
          <label>Name</label>
          <input placeholder="Name" name="name" value={props.fieldState[0]} />
        </Form.Field>
        <Form.Field>
          <label>Rank</label>
          <input placeholder="Rank" name="rank" value={props.fieldState[0]} />
        </Form.Field>
        <Form.Field>
          <label>Serial Number</label>
          <input
            placeholder="Serial Number"
            name="serial"
            value={props.fieldState[0]}
          />
        </Form.Field>
        <Form.Field>
          <label>Image URL</label>
          <input
            placeholder="Image Url"
            name="imgurl"
            value={props.fieldState[0]}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Container>
    </Form>
  );
};
export default StarForm;
