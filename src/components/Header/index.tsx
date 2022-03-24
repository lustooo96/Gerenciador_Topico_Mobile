import React from "react";

import { Container, Title } from "./styles";

interface props {
  title: string;
}
export function Header({ title }: props) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}
