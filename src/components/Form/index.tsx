import React from "react";
import { useForm } from "react-hook-form";

import { Container } from "./styles";

type Inputs = {
  name: string;
  email: string;
  whatsapp: number;
  city: string;
  uf: string;
};
export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  function onSubmit(userData: any) {
    console.log(userData);
  }

  console.log(errors);

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input
            type="text"
            className="campo"
            placeholder="Nome da ONG"
            {...register("name", { required: true })}
          />
          <div>
            <span>O nome é obrigatório</span>
          </div>
        </label>
        <label>
          <input
            type="email"
            className="campo"
            placeholder="E-mail"
            {...register("email")}
          />
          <div>
            <span>O E-mail é obrigatório</span>
          </div>
        </label>
        <label>
          <input
            type="tel"
            className="campo"
            placeholder="WhatsApp"
            {...register("whatsapp")}
          />
          <div>
            <span>O WhatsApp é obrigatório</span>
          </div>
        </label>
        <label>
          <input
            type="text"
            id="camp"
            placeholder="Cidade"
            {...register("city")}
          />
          <input type="text" id="uf" placeholder="UF" {...register("uf")} />
          <div>
            <span>A Localização é obrigatória</span>
          </div>
        </label>
        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </Container>
  );
};
