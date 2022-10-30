import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;

  padding: ${({ theme }) => theme.metrics.px(17)}px
    ${({ theme }) => theme.metrics.px(24)}px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Amount = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(20)}px;
  /* color: ${({ theme }) => theme.colors.title}; */
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 2px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.metrics.px(20)}px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CategoryIcon = styled(Feather)`
  font-size: ${({ theme }) => theme.metrics.px(20)}px;
  color: ${({ theme }) => theme.colors.text};

  margin-right: ${({ theme }) => theme.metrics.px(17)}px;
`;

export const CategoryName = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Date = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;

