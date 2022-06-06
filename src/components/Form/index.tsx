import React from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import axios from "axios";
import { Container } from "./styles";

export interface Inputs {
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
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    axios
      .post("http://localhost:3000/posts", data, {
        headers: { input: "db.json" },
      })
      .then((response: { data: any }) => {
        console.log(response.data);
        alert("Cadastro Realizado com Sucesso");
      })
      .catch((error: { data: any }) => {
        console.log(error.data);
      });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input
            type="text"
            id="campo"
            placeholder="Nome da ONG"
            {...register("name", { required: true })}
          />
          <div>
            <span>{errors.name?.message}</span>
          </div>
        </label>
        <label>
          <input
            type="text"
            id="campo"
            placeholder="E-mail"
            {...register("email", { required: true })}
          />
          <div>
            <span>{errors.email?.message}</span>
          </div>
        </label>
        <label>
          <input
            type="tel"
            id="campo"
            maxLength={11}
            placeholder="WhatsApp"
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
            {...register("city", { required: true })}
          />
          <input
            type="text"
            id="uf"
            placeholder="UF"
            maxLength={2}
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
