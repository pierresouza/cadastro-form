import React from "react";
import { Container } from "./styles";
import Logo from "../../assets/Logo.svg";
import Back from "../../assets/Voltar.svg";

export const Info = () => {
  return (
    <Container>
      <div id="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div id="info">
        <strong>Cadastro</strong>
        <article>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
        </article>
        <div id="button-bottom">
          <img src={Back} alt="botão de voltar" />
          <p>Voltar para o logon</p>
        </div>
      </div>
    </Container>
  );
};
