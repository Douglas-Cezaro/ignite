import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${({ theme }) => theme.metrics.px(113)}px;

  background-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: flex-end;
  padding-bottom: ${({ theme }) => theme.metrics.px(20)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.metrics.px(18)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Category = styled.View`
  width: 100%;
  padding: ${({ theme }) => theme.metrics.px(15)}px;

  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: ${({ theme }) => theme.metrics.px(20)}px;
  margin-right: ${({ theme }) => theme.metrics.px(16)}px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.View`
  width: 100%;
  padding: ${({ theme }) => theme.metrics.px(24)}px;
  margin-bottom: ${({ theme }) => theme.metrics.px(getBottomSpace())}px;
`;

