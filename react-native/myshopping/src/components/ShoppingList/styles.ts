import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const styles = StyleSheet.create({
  list: {
    width: "100%",
    padding: 24,
  },
  content: {
    paddingBottom: 100,
  },
});

export const ShoppingListContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

