import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  margin-left: 10px;
`;

export const About = styled.Text`
  font-size: ${RFValue(16)}px;
  margin-left: 10px;
`;

export const Content = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  flex: 1;
`;

export const ButtonContainer = styled.View`
  align-self: center;
  padding: 40px;
`;

export const Error = styled.Text`
  color: red;
  margin-left: 7px;
  width: 100%;
`;
