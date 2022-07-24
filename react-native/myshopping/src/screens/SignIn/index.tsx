import React, { useState } from "react";
import auth from "@react-native-firebase/auth";

import { Container, Account, Title, Subtitle } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Alert } from "react-native";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleSignIsAnonymously() {
    const { user } = await auth().signInAnonymously();
    console.log(user);
  }

  function handleCreateUserAccount() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert("Login", "Usuário criado com sucesso!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          return Alert.alert(
            "Login",
            "E-mail não disponivel. Escolhe outro e-mail para cadastrar!"
          );
        }
        if (error.code === "auth/invalid-email") {
          return Alert.alert("Login", "E-mail inválido");
        }
        if (error.code === "auth/weak-password") {
          return Alert.alert("Login", "A senha deve ter no mínimo 6 dígitos.");
        }

        return Alert.alert("Login", "Erro ao cadastrar usuário!");
      });
  }

  return (
    <Container>
      <Title>MyShopping</Title>
      <Subtitle>monte sua lista de compra te ajudar nas compras</Subtitle>

      <Input
        placeholder="e-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Input
        placeholder="senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Entrar" onPress={handleSignIsAnonymously} />

      <Account>
        <ButtonText title="Recuperar senha" onPress={() => {}} />
        <ButtonText
          title="Criar minha conta"
          onPress={handleCreateUserAccount}
        />
      </Account>
    </Container>
  );
}

