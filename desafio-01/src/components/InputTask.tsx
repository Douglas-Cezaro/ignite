import { PlusCircle } from "phosphor-react";
import styles from "./InputTask.module.css";

export function InputTask() {
  return (
    <div className={styles.inputTask}>
      <form className={styles.inputTaskForm}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit" title="Adicionar tarefa">
          <label>Criar</label>
          <PlusCircle size={20} />
        </button>
      </form>
    </div>
  );
}
