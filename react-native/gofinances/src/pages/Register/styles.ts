import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};

  width: 100%;
  height: ${({ theme }) => theme.metrics.px(113)}px;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: ${({ theme }) => theme.metrics.px(18)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.metrics.px(18)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Form = styled.View`
  flex: 1;
  justify-content: space-between;
  width: 100%;
  padding: ${({ theme }) => theme.metrics.px(24)}px;
`;

export const Fields = styled.View``;

