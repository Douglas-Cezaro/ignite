import React, { useState } from "react";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import storage from "@react-native-firebase/storage";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Photo } from "../../components/Photo";

import { Container, Content, Progress, Transferred } from "./styles";

export function Upload() {
  const [image, setImage] = useState("");
  const [bytesTransferred, setBytesTransferred] = useState("");
  const [progress, setProgress] = useState("0");

  const validate = () => {
    if (image) {
      return Number(progress) < 100 && Number(progress) > 0;
    }
    return !image;
  };

  const validatePhoto = () => {
    if (image) {
      return Number(progress) < 100 && Number(progress) > 0;
    }
    return false;
  };

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
    const fileName = new Date().getTime();
    const MIME = image.match(/\.(?:.(?!\.))+$/);
    const reference = storage().ref(`/images/${fileName}${MIME}`);

    const uploadTask = reference.putFile(image);

    uploadTask.on("state_changed", (taskSnapshot) => {
      const percent = (
        (taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
        100
      ).toFixed(0);
      setProgress(percent);
      setBytesTransferred(
        `${taskSnapshot.bytesTransferred} transferidos de ${taskSnapshot.totalBytes}`
      );
    });

    uploadTask.then(() => {
      setImage("");
      setProgress("0");
      setBytesTransferred("");
      Alert.alert("Upload", "Upload com sucesso!");
    });

    uploadTask.catch((error) => {
      console.error(error);
      Alert.alert("Upload", "Erro ao fazer upload imagem!");
    });
  }

  return (
    <Container>
      <Header title="Lista de compras" />

      <Content>
        <Photo
          uri={image}
          onPress={handlePickImage}
          disabled={validatePhoto()}
        />
        <Button
          title="Fazer upload"
          onPress={handleUpload}
          disabled={validate()}
        />
        <Progress>{progress}%</Progress>
        <Transferred>{bytesTransferred}</Transferred>
      </Content>
    </Container>
  );
}

