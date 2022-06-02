import React from "react";

import { Container } from "./styles";

export const Form = () => {
  return (
    <Container>
      <form>
        <label>
          <input type="text" id="campo" placeholder="Nome da ONG" />
        </label>
        <label>
          <input type="text" id="campo" placeholder="E-mail" />
        </label>
        <label>
          <input type="text" id="campo" placeholder="WhatsApp" />
        </label>
        <label>
          <input type="text" placeholder="Cidade" />
          <input type="text" id="uf" placeholder="UF" />
        </label>
        <div>
          <button>Cadastrar</button>
        </div>
      </form>
    </Container>
  );
};
