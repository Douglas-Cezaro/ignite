import React from "react";
import {
  Amount,
  Category,
  CategoryIcon,
  CategoryName,
  Container,
  Date,
  Footer,
  Title,
} from "./styles";

export const TransactionCard = () => {
  return (
    <Container>
      <Title>Desenvolvimento de site</Title>
      <Amount>R$ 12.000,00</Amount>
      <Footer>
        <Category>
          <CategoryIcon name="dollar-sign" />
          <CategoryName>Vendas</CategoryName>
        </Category>
        <Date>13/04/2020</Date>
      </Footer>
    </Container>
  );
};

