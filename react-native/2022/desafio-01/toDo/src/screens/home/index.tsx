import { ClipboardText, PlusCircle } from "phosphor-react-native";
import { useEffect, useState } from "react";
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
import { CardTodo } from "../../components/CardTodo";
import {
  DeleteStorage,
  GetStorage,
  SetStorage,
} from "../../utils/localStorage";
import { styles } from "./styles";

export type Todo = {
  id: string;
  description: string;
  completed: boolean;
};

const KEY_STORAGE = "@toDo:todoList-1.0.0";

export function Home() {
  const [todoDescription, setTodoDescription] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);

  async function handleAddTodo() {
    if (todoDescription.trim().length <= 0) {
      return Alert.alert("Atenção", "O campo de descrição é obrigatório!");
    }
    const todo: Todo = {
      id: String(new Date().getTime()),
      description: todoDescription,
      completed: false,
    };
    const data = [...todoList, todo];
    await DeleteStorage(KEY_STORAGE);
    await SetStorage(KEY_STORAGE, data);
    setTodoList(data);
    setTodoDescription("");
    Keyboard.dismiss();
  }

  function handleRemoveTodo(_todo: Todo) {
    Alert.alert("Remover", `Remover o todo ${_todo.description}?`, [
      {
        text: "Sim",
        onPress: async () => {
          const data = todoList.filter((todo) => todo.id !== _todo.id);
          await DeleteStorage(KEY_STORAGE);
          await SetStorage(KEY_STORAGE, data);
          setTodoList(data);
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  async function handleCompletedTodo(_todo: Todo, completed: boolean) {
    const data = todoList.map((todo) => {
      const item = todo;
      if (todo.id === _todo.id) {
        item.completed = completed;
      }
      return item;
    });
    await DeleteStorage(KEY_STORAGE);
    await SetStorage(KEY_STORAGE, data);
    setTodoList(data);
  }

  async function fetchTodoListStorage() {
    const value = await GetStorage(KEY_STORAGE);
    if (value) {
      setTodoList(value);
    }
  }

  const countCreatedItensTodo = todoList.length;
  const countCompletedItensTodo = todoList.filter(
    (todo) => todo.completed
  ).length;

  useEffect(() => {
    fetchTodoListStorage();
  }, []);

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
          renderItem={({ item }) => (
            <CardTodo
              todo={item}
              handleRemove={handleRemoveTodo}
              handleCompleted={handleCompletedTodo}
            />
          )}
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
