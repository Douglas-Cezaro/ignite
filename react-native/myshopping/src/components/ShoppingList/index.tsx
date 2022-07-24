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
    const subscribe = firestore()
      .collection("products")
      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        }) as ProductProps[];
        setProducts(data);
        setIsLoading(false);
      });

    return () => subscribe();
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

