import React, {useEffect, useState} from "react";
import {Form, Button} from "react-bootstrap";
import ChoiceGender from "./ChoiceGender";
import validateEmail from "../resources/validationEmail";

function FormRegPage() {
  const [typeEmail, setTypeEmail] = useState("");
  const [typePass, setTypePass] = useState("");
  const [typePassValid, setTypePassValid] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPassValid, setIsPassValid] = useState(true);
  const [isPassConfirm, setIsPassConfirm] = useState(true);
  const [isFormConfirm, setIsFormConfirm] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isShowConfirm, setIsShowConfirm] = useState(false);

  let style = {
    passShow: {
      position: "absolute",
      right: "10px",
      top: "48px",
      color: "grey",
    },
  };

  function validationForm(valueOne, valueTwo, email) {
    if (typeEmail !== "") setIsEmailValid(validateEmail(email));
    if (typePass !== "") setIsPassValid(valueOne.split("").length >= 6);
    if (typePassValid !== "") setIsPassConfirm(valueOne === valueTwo);
  }

  useEffect(() => {
    validationForm(typePass, typePassValid, typeEmail);
    // eslint-disable-next-line
  }, [typePass, typePassValid, typeEmail]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    typePass === "" && typePassValid === "" && typeEmail === ""
      ? setIsFormConfirm(true)
      : setIsFormConfirm(false);
    if (isEmailValid && isPassValid && isPassConfirm) {
      setTypeEmail("");
      setTypePass("");
      setTypePassValid("");
      alert(JSON.stringify(data));
    }
  };

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <h6>Gender</h6>
      <ChoiceGender />

      <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
        <Form.Label>
          <h6>Email address</h6>
        </Form.Label>
        <Form.Control
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Enter email"
          className={
            isEmailValid ? "border border-success" : "border border-danger"
          }
          onChange={(e) => setTypeEmail(e.target.value)}
          value={typeEmail}
          required
        />
        <Form.Control.Feedback
          type="invalid"
          className="email-validate"
          style={isEmailValid ? {display: "none"} : {display: "block"}}
        >
          Please enter correct email.
        </Form.Control.Feedback>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="formBasicPassword"
        style={{
          position: "relative",
        }}
      >
        <Form.Label>
          <h6>Password</h6>
        </Form.Label>
        <Form.Control
          type={isShow ? "text" : "password"}
          name="password"
          autoComplete="new-password"
          placeholder="Password"
          className={
            isPassValid ? "border border-success" : "border border-danger"
          }
          onChange={(e) => setTypePass(e.target.value)}
          value={typePass}
          required
        />
        <Form.Control.Feedback
          type="invalid"
          className="password"
          style={isPassValid ? {display: "none"} : {display: "block"}}
        >
          Password must include min 6 characters.
        </Form.Control.Feedback>
        <i
          className={
            isShow ? "fa fa-eye-slash icon-password" : "fa fa-eye icon-password"
          }
          style={style.passShow}
          onClick={(e) => (isShow ? setIsShow(false) : setIsShow(true))}
        ></i>
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="formConfirmPassword"
        style={{
          position: "relative",
        }}
      >
        <Form.Label>
          <h6>Confirm password</h6>
        </Form.Label>
        <Form.Control
          type={isShowConfirm ? "text" : "password"}
          autoComplete="new-password"
          placeholder="Confirm password"
          className={
            isPassConfirm ? "border border-success" : "border border-danger"
          }
          onChange={(e) => setTypePassValid(e.target.value)}
          value={typePassValid}
          required
        />
        <Form.Control.Feedback
          type="invalid"
          className="password-validation"
          style={isPassConfirm ? {display: "none"} : {display: "block"}}
        >
          Password mismatch.
        </Form.Control.Feedback>
        <i
          className={
            isShow ? "fa fa-eye-slash icon-password" : "fa fa-eye icon-password"
          }
          style={style.passShow}
          onClick={(e) =>
            isShowConfirm ? setIsShowConfirm(false) : setIsShowConfirm(true)
          }
        ></i>
      </Form.Group>
      <Button variant="success" type="submit" style={{width: "100%"}}>
        Sing Up
      </Button>
      <span
        style={
          isFormConfirm
            ? {color: "red", display: "block"}
            : {color: "red", display: "none"}
        }
      >
        please fill out the form{" "}
      </span>
    </Form>
  );
}

export default FormRegPage;
