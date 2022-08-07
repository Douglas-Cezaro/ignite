import { Text, TouchableOpacity, View } from "react-native";
import { Todo } from "../../screens/home";
import { styles } from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Trash } from "phosphor-react-native";

type Props = {
  todo: Todo;
  handleRemove: (todo: Todo) => void;
  handleCompleted: (todo: Todo, completed: boolean) => void;
};
export function CardTodo({ todo, handleRemove, handleCompleted }: Props) {
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        fillColor="#5E60CE"
        unfillColor="transparent"
        textComponent={
          <Text style={todo.completed ? styles.textCompleted : styles.text}>
            {todo.description}
          </Text>
        }
        innerIconStyle={{ borderWidth: 2 }}
        isChecked={todo.completed}
        onPress={(isChecked: boolean) => {
          handleCompleted(todo, isChecked);
        }}
        style={styles.checkbox}
      />
      <TouchableOpacity
        style={styles.buttonRemove}
        onPress={() => {
          handleRemove(todo);
        }}
      >
        <Trash size={24} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
