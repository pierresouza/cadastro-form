import React from "react";
import { Form } from "./Form";
import { Info } from "./Info";
import { Container } from "./styles";

export const Layout = () => {
  return (
    <Container>
      <Info />
      <Form />
    </Container>
  );
};
