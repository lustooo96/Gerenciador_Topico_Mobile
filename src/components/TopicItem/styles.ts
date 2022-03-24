import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  width: 100%;
  height: ${RFValue(60)}px;
  background-color: #fff;
  margin-top: 10px;
  padding: 0px 10px;
`;
export const Name = styled.Text`
  font-size: ${RFValue(17)}px;
`;
export const About = styled.Text`
  color: #5b5f63;
  font-size: ${RFValue(14)}px;
`;
export const ContainerSec = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 10px;
`;
export const ContainerText = styled.View`
  padding: 0px 10px;
`;
