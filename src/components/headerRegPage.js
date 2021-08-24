import React from "react";
import {Image} from "react-bootstrap";
import logo from "../assets/medical_logo.png";

export default function HeaderRegForm() {
  return (
    <div>
      <div style={{textAlign: "center"}}>
        <Image className="mt-3" width={70} height={70} src={logo} alt="logo" />
      </div>
      <h3 style={{textAlign: "center"}}>SingUp with email</h3>
    </div>
  );
}
