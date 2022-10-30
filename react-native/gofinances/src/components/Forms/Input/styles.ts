import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled(TextInput)`
  width: 100%;
  padding: ${({ theme }) => theme.metrics.px(16)}px
    ${({ theme }) => theme.metrics.px(18)}px;

  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text_dark};

  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;

  margin-bottom: ${({ theme }) => theme.metrics.px(8)}px;
`;

