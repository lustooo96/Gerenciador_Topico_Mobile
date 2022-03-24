import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;
export const Content = styled.View`
  padding: 15px;
  height: 50%;
  border-bottom-width: 1px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 110px;
`;

export const Name = styled.Text`
  margin-left: 10px;
  font-size: ${RFValue(18)}px;
`;
export const About = styled.Text`
  margin-top: 10px;
  color: #5b5f63;
`;

export const ContName = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Main = styled.View`
  flex: 1;
`;

export const ModalContainer = styled.View`
  background-color: gray;
  width: 80%;
  height: 100%;
  margin-top: 30px;
  margin-left: 30px;
`;
export const Title = styled.Text`
  padding: 5px 7px;
`;
export const SubTitle = styled.Text`
  padding: 5px 7px;
`;
export const ButtonContainerModal = styled.View`
  flex-direction: row;
  padding: 10px 40px;
  width: 100%;

  justify-content: space-between; ;
`;
