import React from "react";
import { Container } from "./styles";
import Logo from "../../assets/Logo.png";

export const Info = () => {
  return (
    <Container>
      <img src={Logo} alt="" />
      <p>Cadastro</p>
    </Container>
  );
};
