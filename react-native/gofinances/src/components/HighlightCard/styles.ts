import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};

  width: ${({ theme }) => theme.metrics.px(300)}px;
  border-radius: 5px;

  padding: ${({ theme }) => theme.metrics.px(18)}px
    ${({ theme }) => theme.metrics.px(22)}px;
  padding-bottom: ${({ theme }) => theme.metrics.px(42)}px;
`;

export const Header = styled.View``;

export const Title = styled.Text``;

export const Icon = styled(Feather)``;

export const Footer = styled.View``;

export const Amount = styled.Text``;

export const LastTransaction = styled.Text``;

