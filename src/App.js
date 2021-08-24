import React from "react";
import {Container} from "react-bootstrap";
import FooterRegForm from "./components/footerRegPage";
import FormRegPage from "./components/formRegPage";
import HeaderRegForm from "./components/headerRegPage";


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
