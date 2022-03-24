import styled from "styled-components/native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

interface ButtonProps extends RectButtonProps {
  color: string;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: ${RFValue(100)}px;
  height: ${RFValue(35)}px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  background-color: ${({ color }) => color};
`;

export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
  color: #fff;
`;
