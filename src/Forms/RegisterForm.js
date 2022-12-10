import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import classes from './RegisterForm.module.css';

const RegisterForm = (props) => {
  const [emailText, setEmailText] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [emailBorder, setEmailBorder] = useState(classes.inputDefaultBorder);
  const [passwordText, setPasswordText] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordBorder, setPasswordBorder] = useState(
    classes.inputDefaultBorder
  );
  const btnHandler = () => {};

  const emailChangeHandler = (e) => {
    const emailAddress = e.target.value;
    setEmailText(emailAddress);

    if (emailAddress.length === 0) {
      setEmailBorder(classes.inputDefaultBorder);
      return;
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)) {
      setEmailValid(true);
      setEmailBorder(classes.inputSuccessBorder);
    } else {
      setEmailValid(false);
      setEmailBorder(classes.inputErrorBorder);
    }
  };

  const passwordChangeHandler = (e) => {
    const password = e.target.value;
    setPasswordText(password);

    if (password.length === 0) {
      setPasswordBorder(classes.inputDefaultBorder);
      return;
    }
    if (password.length > 6) {
      setPasswordValid(true);
      setPasswordBorder(classes.inputSuccessBorder);
    } else {
      setPasswordValid(false);
      setPasswordBorder(classes.inputErrorBorder);
    }
  };

  return (
    <div className={classes.formContainer}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className={emailBorder}
            type="email"
            placeholder="Enter email"
            value={emailText}
            onChange={emailChangeHandler}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className={passwordBorder}
            type="password"
            placeholder="Password"
            onChange={passwordChangeHandler}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button
          className="mb-3"
          variant="primary"
          type="submit"
          onClick={btnHandler}
          disabled={!emailValid || !passwordValid}
        >
          {props.buttonText}
        </Button>
      </Form>
      <p
        data-testid="emailValidMessage"
        className={
          emailValid ? classes.messageAddressValid : classes.messageAddressError
        }
      >
        Email address: {emailText}
      </p>
    </div>
  );
};

export default RegisterForm;
