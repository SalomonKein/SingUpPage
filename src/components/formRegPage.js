import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";
import ChoiceGender from "../components/choiceGender";
import showPass from "../resources/showPassword";
import validateEmail from "../resources/validationEmail";

function FormRegPage() {
  const [typeEmail, setTypeEmail] = useState("");
  const [typePass, setTypePass] = useState("");
  const [typePassValid, setTypePassValid] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPassValid, setIsPassValid] = useState(true);
  const [isPassConfirm, setIsPassConfirm] = useState(true);
  const [isFormConfirm, setIsFormConfirm] = useState(false);

  let style = {
    passShow: {
      position: "absolute",
      right: "10px",
      top: "48px",
      color: "grey",
    },
  };

  function validationForm(valueOne, valueTwo, email) {
    setIsEmailValid(validateEmail(email));
    setIsPassValid(valueOne.split("").length >= 6);
    setIsPassConfirm(valueOne === valueTwo);
  }

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

      <Form.Group
        className="mb-3"
        controlId="formBasicEmail"
        style={{marginTop: "20px"}}
      >
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
          onChange={(e) => setTypeEmail(e.currentTarget.value)}
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
          type="password"
          name="password"
          autoComplete="new-password"
          placeholder="Password"
          className={
            isPassValid ? "border border-success" : "border border-danger"
          }
          onChange={(e) => setTypePass(e.currentTarget.value)}
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
          className="fa fa-eye icon-password"
          style={style.passShow}
          onClick={(e) => showPass(e)}
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
          type="password"
          autoComplete="new-password"
          placeholder="Confirm password"
          className={
            isPassConfirm ? "border border-success" : "border border-danger"
          }
          onChange={(e) => setTypePassValid(e.currentTarget.value)}
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
          className="fa fa-eye icon-password"
          style={style.passShow}
          onClick={(e) => showPass(e)}
        ></i>
      </Form.Group>
      <Button
        variant="success"
        type="submit"
        style={{width: "100%"}}
        onClick={() => validationForm(typePass, typePassValid, typeEmail)}
      >
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
