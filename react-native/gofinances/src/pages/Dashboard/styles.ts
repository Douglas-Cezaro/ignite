import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { DataListProps } from ".";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${({ theme }) => theme.metrics.px(278)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`;

export const UserWrapper = styled.View`
  width: 100%;

  padding: 0 ${({ theme }) => theme.metrics.px(24)}px;
  margin-top: ${({ theme }) => theme.metrics.px(getStatusBarHeight() + 28)}px;

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

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  paddingHorizontal: 24,
})`
  width: 100%;

  position: absolute;
  margin-top: ${({ theme }) => theme.metrics.px(135)}px;
`;

export const Transactions = styled.View`
  flex: 1;
  padding: 0 ${({ theme }) => theme.metrics.px(24)}px;

  margin-top: ${({ theme }) => theme.metrics.px(85)}px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: ${({ theme }) => theme.metrics.px(16)}px;
`;

export const TransactionList = styled(
  FlatList as new (
    props: FlatListProps<DataListProps>
  ) => FlatList<DataListProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace(),
  },
})``;

