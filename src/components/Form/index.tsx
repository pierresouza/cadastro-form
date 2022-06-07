import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { api } from "../../services/api";
import {
  Container,
  NameInput,
  EmailInput,
  NumberInput,
  CityInput,
  Button,
} from "./styles";

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
    uf: yup.string().required(""),
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
    if (!data) return;
    api
      .post("/Entitys", data)
      .then((response) => {
        alert("Cadastro Realizado com Sucesso");
      })
      .catch((error) => {
        console.log(error.data);
        alert("Erro ao cadastrar");
      });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <NameInput>
          <label>
            <input
              type="text"
              placeholder="Nome da ONG"
              {...register("name", { required: true })}
            />
            <span>{errors.name?.message}</span>
          </label>
        </NameInput>
        <EmailInput>
          <label>
            <input
              type="text"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            <span>{errors.email?.message}</span>
          </label>
        </EmailInput>
        <NumberInput>
          <label>
            <input
              type="text"
              placeholder="WhatsApp"
              maxLength={11}
              {...register("whatsapp", { required: true })}
            />
            <span>{errors.whatsapp?.message}</span>
          </label>
        </NumberInput>
        <CityInput>
          <label>
            <input
              type="text"
              id="city"
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
          </label>

          <span>{errors.city?.message}</span>
        </CityInput>
        <Button>
          <button type="submit">Cadastrar</button>
        </Button>
      </form>
    </Container>
  );
};
