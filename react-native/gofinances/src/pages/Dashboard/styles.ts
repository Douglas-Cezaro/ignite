import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${({ theme }) => theme.metrics.px(278)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 ${({ theme }) => theme.metrics.px(24)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${({ theme }) => theme.metrics.px(48)}px;
  height: ${({ theme }) => theme.metrics.px(48)}px;
  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: ${({ theme }) => theme.metrics.px(18)}px;
`;

const UserTextBase = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-size: ${({ theme }) => theme.metrics.px(18)}px;
`;

export const UserGreeting = styled(UserTextBase)`
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const UserName = styled(UserTextBase)`
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.metrics.px(24)}px;
`;
