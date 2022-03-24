import React from "react";

import { Container, Title } from "./styles";

interface PropsButton {
  title: string;
  color?: string;
  onPress?: () => void;
}

export function Button({ title, color, onPress, ...rest }: PropsButton) {
  return (
    <Container color={color ? color : "black"} onPress={onPress} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
