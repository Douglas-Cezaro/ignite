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

interface Category {
  name: string;
  icon: string;
}

interface Props {
  data: {
    title: string;
    amount: string;
    category: Category;
    date: string;
  };
}

export const TransactionCard = ({ data }: Props) => {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount>{data.amount}</Amount>
      <Footer>
        <Category>
          <CategoryIcon name="dollar-sign" />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
};

