import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container } from "./styles";

interface Inputs {
  name: string;
  email: string;
  whatsapp: number;
  city: string;
  uf: string;
}

const schema = yup
  .object({
    name: yup.string().required("O Nome é obrigatório"),
    email: yup.string().email().required("O Email é obrigatório"),
    whatsapp: yup
      .number()
      .min(11)
      .typeError("O Número deve ter pelo menos 11 dígitos")
      .required("O Número deve ter pelo menos 11 dígitos"),
    city: yup.string().required("A Localização é obrigatória"),
    uf: yup.string().required(),
  })
  .required();
export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  function onSubmit(userData: any) {
    console.log(userData);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input
            type="text"
            className="campo"
            placeholder="Nome da ONG"
            autoComplete="off"
            {...register("name", { required: true })}
          />
          <div>
            <span>{errors.name?.message}</span>
          </div>
        </label>
        <label>
          <input
            type="text"
            className="campo"
            placeholder="E-mail"
            autoComplete="off"
            {...register("email", { required: true })}
          />
          <div>
            <span>{errors.email?.message}</span>
          </div>
        </label>
        <label>
          <input
            type="tel"
            className="campo"
            pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
            placeholder="WhatsApp"
            autoComplete="off"
            {...register("whatsapp", { required: true })}
          />
          <div>
            <span>{errors.whatsapp?.message}</span>
          </div>
        </label>
        <label>
          <input
            type="text"
            id="camp"
            placeholder="Cidade"
            autoComplete="off"
            {...register("city", { required: true })}
          />
          <input
            id="uf"
            placeholder="UF"
            autoComplete="off"
            {...register("uf", { required: true })}
          />
          <div>
            <span>{errors.city?.message}</span>
          </div>
        </label>
        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </Container>
  );
};
