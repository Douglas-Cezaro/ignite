import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import styled, { css } from "styled-components/native";

interface IconsProps {
  type: "up" | "down";
}

interface ContainerProps {
  isActive?: boolean;
  type: "up" | "down";
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 48%;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-width: ${({ isActive }) => (isActive ? 0 : 1.5)}px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};

  border-radius: 5px;

  padding: ${({ theme }) => theme.metrics.px(16)}px;

  ${({ isActive, type, theme }) =>
    isActive &&
    type === "up" &&
    css`
      background-color: ${theme.colors.success_light};
    `}
  ${({ isActive, type, theme }) =>
    isActive &&
    type === "down" &&
    css`
      background-color: ${theme.colors.attention_light};
    `}
`;

export const Icon = styled(Feather)<IconsProps>`
  font-size: ${({ theme }) => theme.metrics.px(24)}px;
  margin-right: ${({ theme }) => theme.metrics.px(12)}px;
  color: ${({ theme, type }) =>
    type === "up" ? theme.colors.success : theme.colors.attention};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`;

