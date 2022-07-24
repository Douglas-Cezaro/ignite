import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, FlatList, Text, View } from "react-native";
import storage from "@react-native-firebase/storage";

import { Container, PhotoInfo } from "./styles";
import { Header } from "../../components/Header";
import { Photo } from "../../components/Photo";
import { File, FileProps } from "../../components/File";

import { photosData } from "../../utils/photo.data";
import theme from "../../theme";

export function Receipts() {
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState<FileProps[]>([]);
  const [photoSelected, setPhotoSelected] = useState("");

  async function handleShowImage(path: string) {
    const urlImage = await storage().ref(path).getDownloadURL();
    setPhotoSelected(urlImage);
  }

  useEffect(() => {
    setIsLoading(true);
    storage()
      .ref("images")
      .list()
      .then((result) => {
        setIsLoading(false);
        const files: FileProps[] = [];

        result.items.forEach((file) => {
          files.push({
            name: file.name,
            path: file.fullPath,
          });
        });
        setPhotos(files);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        Alert.alert("Comprovantes", "Erro ao buscar arquivos.");
      });
  }, []);

  return (
    <Container>
      <Header title="Comprovantes" />

      {isLoading ? (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ActivityIndicator color={theme.COLORS.PURPLE} size="large" />
        </View>
      ) : (
        <>
          <Photo uri={photoSelected} />

          <PhotoInfo>Informações da foto</PhotoInfo>

          <FlatList
            data={photos}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <File
                data={item}
                onShow={() => handleShowImage(item.path)}
                onDelete={() => {}}
              />
            )}
            contentContainerStyle={{ paddingBottom: 20 }}
            showsVerticalScrollIndicator={false}
            style={{ width: "100%", padding: 24 }}
            ListEmptyComponent={() => {
              return (
                <View
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: theme.COLORS.PURPLE,
                      fontWeight: "bold",
                    }}
                  >
                    Nenhum comprovante encontrado!
                  </Text>
                </View>
              );
            }}
          />
        </>
      )}
    </Container>
  );
}

