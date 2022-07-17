import { ClipboardText } from "phosphor-react";
import styles from "./Task.module.css";

export function Task() {
  return (
    <div className={styles.task}>
      <header>
        <div className={styles.createdTask}>
          <strong>Tarefas criadas</strong>
          <label className={styles.counter}>0</label>
        </div>
        <div className={styles.concludedTask}>
          <strong>Concluídas</strong>
          <label className={styles.counter}>0</label>
        </div>
      </header>
      <main>
        <div className={styles.contentIsEmpty}>
          <ClipboardText size={56} />

          <strong>Você ainda não tem tarefas cadastradas</strong>
          <label>Crie tarefas e organize seus itens a fazer</label>
        </div>
      </main>
    </div>
  );
}
