import React from "react";
import { Container } from "./styles";
import Logo from "../../assets/Logo.svg";
import Back from "../../assets/Voltar.svg";

export const Info = () => {
  return (
    <Container>
      <div className="content">
        <div id="top">
          <img src={Logo} alt="logo" />
          <strong>Cadastro</strong>
        </div>
        <div id="info">
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
        </div>
        <div id="bottom">
          <img src={Back} alt="botão de voltar" />
          <p>Voltar para o logon</p>
        </div>
      </div>
    </Container>
  );
};
