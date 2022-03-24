import { useNavigation } from "@react-navigation/native";
import React from "react";

import { Container, ButtonFotter, Title, SecTitle } from "./styles";

export function Footer() {
  const navigation: any = useNavigation();
  function handleScreenForum() {
    navigation.navigate("Home");
  }

  function handleScreenNewTopic() {
    navigation.navigate("RegisterTopic");
  }
  return (
    <Container>
      <ButtonFotter onPress={handleScreenForum}>
        <Title>Fórum</Title>
      </ButtonFotter>
      <ButtonFotter onPress={handleScreenNewTopic}>
        <SecTitle>Novo Tópico</SecTitle>
      </ButtonFotter>
    </Container>
  );
}
