import React from "react";
import {Container} from "react-bootstrap";
import FooterRegForm from "./components/FooterRegPage";
import FormRegPage from "./components/FormRegPage";
import HeaderRegForm from "./components/HeaderRegPage";


function App() {
  return (
    <Container>
      <HeaderRegForm/>
      <FormRegPage/>      
      <FooterRegForm />
    </Container>
  );
}

export default App;
