import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Container, Name, About, ContainerSec, ContainerText } from "./styles";
import { ItemDTO } from "../../dtos/ItemDTO";
import { RFValue } from "react-native-responsive-fontsize";

interface propsData {
  data: ItemDTO;
  onPress: () => void;
}

export function TopicItem({ data, onPress, ...rest }: propsData) {
  return (
    <Container {...rest} onPress={onPress}>
      <ContainerSec>
        <FontAwesome name="user-circle-o" size={RFValue(50)} color="black" />

        <ContainerText>
          <Name>{data.nm_usuario}</Name>
          <About>{data.ds_mensagem.substring(0, 10)}...</About>
        </ContainerText>
      </ContainerSec>
    </Container>
  );
}
