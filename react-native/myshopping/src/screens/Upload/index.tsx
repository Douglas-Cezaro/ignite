import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import storage from "@react-native-firebase/storage";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Photo } from "../../components/Photo";

import { Container, Content, Progress, Transferred } from "./styles";
import { ActivityIndicator, Alert } from "react-native";
import theme from "../../theme";

export function Upload() {
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState("");

  async function handlePickImage() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status == "granted") {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 4],
        quality: 1,
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    }
  }

  async function handleUpload() {
    setIsLoading(true);
    const fileName = new Date().getTime();
    const reference = storage().ref(`/images/${fileName}.png`);
    reference
      .putFile(image)
      .then(() => {
        setIsLoading(false);
        setImage("");
        Alert.alert("Upload", "Upload concluído!");
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
        Alert.alert("Upload", "Erro ao fazer upload imagem!");
      });
  }

  return (
    <Container>
      <Header title="Lista de compras" />

      <Content>
        {isLoading ? (
          <ActivityIndicator color={theme.COLORS.PURPLE} size="large" />
        ) : (
          <>
            <Photo uri={image} onPress={handlePickImage} />
            <Button
              title="Fazer upload"
              onPress={handleUpload}
              disabled={!image}
            />
            <Progress>0%</Progress>
            <Transferred>0 de 100 bytes transferido</Transferred>
          </>
        )}
      </Content>
    </Container>
  );
}

