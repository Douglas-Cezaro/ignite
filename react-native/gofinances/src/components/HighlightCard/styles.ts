import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};

  width: ${({ theme }) => theme.metrics.px(300)}px;
  border-radius: 5px;

  padding: ${({ theme }) => theme.metrics.px(18)}px
    ${({ theme }) => theme.metrics.px(22)}px;
  padding-bottom: ${({ theme }) => theme.metrics.px(42)}px;

  margin-right: ${({ theme }) => theme.metrics.px(16)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.metrics.px(14)}px;

  color: ${({ theme }) => theme.colors.title};
`;

export const Icon = styled(Feather)`
  font-size: ${({ theme }) => theme.metrics.px(40)}px;
`;

export const Footer = styled.View``;

export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.metrics.px(32)}px;

  color: ${({ theme }) => theme.colors.title};

  margin-top: ${({ theme }) => theme.metrics.px(35)}px;
`;

export const LastTransaction = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.metrics.px(12)}px;

  color: ${({ theme }) => theme.colors.text};
`;

