import { ClipboardText } from "phosphor-react";
import { CardTask } from "./CardTask";
import styles from "./Task.module.css";

const teste = [0, 1, 2, 3, 4, 5, 6, 7, 8];
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
        {teste.map((item, key) => {
          return <CardTask key={key} />;
        })}
        {/* <div className={styles.contentIsEmpty}>
          <ClipboardText size={56} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <label>Crie tarefas e organize seus itens a fazer</label>
        </div> */}
      </main>
    </div>
  );
}
