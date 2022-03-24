import styled from "styled-components/native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  justify-content: center;
  width: 100%;
  height: ${RFValue(70)}px;
  border-top-width: 1px;
`;

export const ButtonFotter = styled(RectButton)<RectButtonProps>`
  height: 100%;
  width: 80px;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  border-left-width: 1px;
  border-right-width: 1px;
  width: 80px;

  height: 100%;
`;

export const SecTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  border-right-width: 1px;
  width: 70px;

  height: 100%;
`;
