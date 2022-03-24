import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TextInput)`
  width: 100%;
  height: ${RFValue(50)}px;
  font-size: ${RFValue(14)}px;
  border-radius: 5px;
  padding: 0 10px;
`;
