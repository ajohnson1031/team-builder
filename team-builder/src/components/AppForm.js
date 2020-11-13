import React, { useState } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";

const AppForm = ({ users, setUsers }) => {
  const [values, setValues] = useState({ name: "", role: "", err: null });

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value, err: null });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (values.name === "" || values.role === "")
      setValues({ ...values, err: "Please complete all fields." });
    else {
      setUsers(
        users.concat({
          name: values.name,
          role: values.role,
        })
      );

      setValues({ ...values, name: "", role: "", err: null });
    }
  };

  return (
    <>
      <Form className='appform'>
        <FormGroup>
          <Input
            className='inputtext'
            type='text'
            name='name'
            placeholder='enter name...'
            value={values.name}
            onChange={changeHandler}
          />
          <Input
            className='inputtext'
            type='text'
            name='role'
            placeholder='enter role...'
            value={values.role}
            onChange={changeHandler}
          />
          <Button className='submitbtn' type='submit' onClick={submitHandler}>
            submit
          </Button>
        </FormGroup>
      </Form>
      {values.err && (
        <>
          <div className='break'></div>
          <p className='err'>{values.err}</p>
        </>
      )}
    </>
  );
};
export default AppForm;
