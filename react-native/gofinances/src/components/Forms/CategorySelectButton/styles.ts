import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${({ theme }) => theme.colors.shape};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: ${({ theme }) => theme.metrics.px(18)}px
    ${({ theme }) => theme.metrics.px(16)}px;
  border-radius: 5px;
`;

export const Category = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Icon = styled(Feather)`
  font-size: ${({ theme }) => theme.metrics.px(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;

