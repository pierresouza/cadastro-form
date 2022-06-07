import React from "react";
import { Form } from "./Form";
import { Info } from "./Info";
import { Container, Content } from "./styles";

export const Layout = () => {
  return (
    <Container>
      <Content>
        <Info />
        <Form />
      </Content>
    </Container>
  );
};
