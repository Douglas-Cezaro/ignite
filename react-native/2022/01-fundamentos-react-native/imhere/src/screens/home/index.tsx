import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  function handleParticipantAdd() {
    console.log("Você clicou no botão de Adicionar!");
  }
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>
          <>
            <Text style={styles.eventName}>Nome do evento</Text>
            <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                keyboardAppearance="dark"
                placeholder="Nome do participante"
                placeholderTextColor="#6b6b6b"
              />
              <TouchableOpacity
                style={styles.button}
                onPress={handleParticipantAdd}
              >
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
            <Participant name="Douglas" />
            <Participant name="Cezaro" />
          </>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
}
