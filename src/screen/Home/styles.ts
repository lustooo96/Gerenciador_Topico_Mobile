import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Content = styled.View`
  flex: 1;
`;

export const ContentCard = styled.View``;

export const TopicList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})``;
