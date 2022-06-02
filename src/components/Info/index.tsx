import React from "react";
import { Container } from "./styles";
import Logo from "../../assets/Logo.png";

export const Info = () => {
  return (
    <Container>
      <img src={Logo} alt="" />
      <strong>Cadastro</strong>
      <p>
        Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os
        casos da sua ONG.
      </p>
    </Container>
  );
};
