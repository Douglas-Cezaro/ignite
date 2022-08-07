import { ClipboardText, PlusCircle } from "phosphor-react-native";
import { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

type Todo = {
  id: string;
  description: string;
  completed: boolean;
};

export function Home() {
  const [todoDescription, setTodoDescription] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleAddTodo = () => {
    if (todoDescription.trim().length <= 0) {
      return Alert.alert("Atenção", "O campo de descrição é obrigatório!");
    }
    const todo: Todo = {
      id: String(new Date().getTime()),
      description: todoDescription,
      completed: true,
    };

    setTodoList((prevState) => [...prevState, todo]);
    setTodoDescription("");
    Keyboard.dismiss();
  };

  const countCreatedItensTodo = todoList.length;
  const countCompletedItensTodo = todoList.filter(
    (todo) => todo.completed
  ).length;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../../assets/images/logo.png")} />
      </View>
      <View style={styles.main}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            keyboardAppearance="dark"
            value={todoDescription}
            onChangeText={setTodoDescription}
          />

          <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
            <PlusCircle size={20} color="#F2F2F2" />
          </TouchableOpacity>
        </View>
        <View style={styles.headerList}>
          <View style={styles.headerListRow}>
            <Text style={styles.textCreated}>Criadas</Text>
            <View style={styles.viewCount}>
              <Text style={styles.textCount}>{countCreatedItensTodo}</Text>
            </View>
          </View>
          <View style={styles.headerListRow}>
            <Text style={styles.textCompleted}>Concluídas</Text>
            <View style={styles.viewCount}>
              <Text style={styles.textCount}>{countCompletedItensTodo}</Text>
            </View>
          </View>
        </View>
        <FlatList
          data={todoList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Text>{item.description}</Text>}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.containerListEmpty}>
              <ClipboardText size={56} color="#808080" />
              <Text style={styles.listEmptyTextBold}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.listEmptyText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
