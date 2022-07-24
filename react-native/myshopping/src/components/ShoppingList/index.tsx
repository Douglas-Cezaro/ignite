import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, FlatList, Text, View } from "react-native";
import firestore from "@react-native-firebase/firestore";

import { ShoppingListContainer, styles } from "./styles";
import { Product, ProductProps } from "../Product";

import { shoppingListExample } from "../../utils/shopping.list.data";
import theme from "../../theme";

export function ShoppingList() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    setIsLoading(true);
    firestore()
      .collection("products")
      .get()
      .then((response) => {
        const data = response.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        }) as ProductProps[];
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
        Alert.alert("Produtos", "Erro ao buscar produtos");
      });
  }, []);

  if (isLoading) {
    return (
      <ShoppingListContainer>
        <ActivityIndicator color={theme.COLORS.PURPLE} size="large" />
      </ShoppingListContainer>
    );
  }
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Product data={item} />}
      showsVerticalScrollIndicator={false}
      style={styles.list}
      contentContainerStyle={styles.content}
      ListEmptyComponent={
        <ShoppingListContainer>
          <Text
            style={{
              fontSize: 20,
              color: theme.COLORS.PURPLE,
              fontWeight: "bold",
            }}
          >
            Nenhum registro adicionado
          </Text>
        </ShoppingListContainer>
      }
    />
  );
}

