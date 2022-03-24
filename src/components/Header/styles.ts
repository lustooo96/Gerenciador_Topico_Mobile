import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(75)}px;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
`;

export const Title = styled.Text`
  color: black;
  font-weight: bold;

  font-size: ${RFValue(20)}px;
`;
