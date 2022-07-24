import React, { useState } from "react";
import firestore from "@react-native-firebase/firestore";

import { Container } from "./styles";
import { ButtonIcon } from "../ButtonIcon";
import { Input } from "../Input";
import { Alert } from "react-native";

export function FormBox() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);

  async function handleProductAdd() {
    firestore()
      .collection("products")
      // .doc("id-custom")
      // .set({

      // })
      .add({
        description,
        quantity,
        done: false,
        createAt: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setDescription("");
        setQuantity(0);
        Alert.alert("Produtos", "Produto adicionado com sucesso!");
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("Produtos", "Erro ao adicionar produto.");
      });
  }

  return (
    <Container>
      <Input
        placeholder="Nome do produto"
        size="medium"
        value={description}
        onChangeText={setDescription}
      />

      <Input
        placeholder="0"
        keyboardType="numeric"
        size="small"
        style={{ marginHorizontal: 8 }}
        value={String(quantity)}
        onChangeText={(value) => {
          setQuantity(Number(value));
        }}
      />

      <ButtonIcon
        size="large"
        icon="add-shopping-cart"
        onPress={handleProductAdd}
      />
    </Container>
  );
}

