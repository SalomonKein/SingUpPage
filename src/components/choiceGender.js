import React, {useState} from "react";
import {ToggleButton} from "react-bootstrap";

function ChoiceGender() {
  const [radioValue, setRadioValue] = useState("Other");
  const radios = [
    {name: "Male", value: "Male", img: "fa fa-mars"},
    {name: "Female", value: "Female", img: "fa fa-venus"},
    {name: "Other", value: "Other", img: "fa fa-transgender-alt"},
  ];

  return (
    <div
      style={{width: "100%", display: "flex", justifyContent: "space-between"}}
    >
      {radios.map((radio, idx) => (
        <ToggleButton
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
          key={idx}
          id={`radio-${idx}`}
          type="radio"
          variant={"outline-secondary"}
          name="gender"
          value={radio.value}
          checked={radioValue === radio.value}
          onChange={(e) => setRadioValue(e.currentTarget.value)}
        >
          <i className={radio.img}></i>
          {radio.name}
        </ToggleButton>
      ))}
    </div>
  );
}

export default ChoiceGender;
