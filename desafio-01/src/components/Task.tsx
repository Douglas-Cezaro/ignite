import { ClipboardText } from "phosphor-react";
import { deleteStorage, saveStorage } from "../utils/storage";
import { TaskInterface } from "../utils/types";
import { CardTask } from "./CardTask";
import styles from "./Task.module.css";

interface Props {
  setTasks: (tasks: TaskInterface[]) => void;
  tasks: TaskInterface[];
}

export function Task({ tasks, setTasks }: Props) {
  function handleRemoveTask(_task: TaskInterface) {
    const data = tasks.filter((task) => task.id !== _task.id);
    deleteStorage();
    saveStorage(data);
    setTasks(data);
  }

  function handleCompletedTask(_task: TaskInterface, completed: boolean) {
    const data = tasks.map((task) => {
      const item = task;
      if (task.id === _task.id) {
        item.completed = completed;
      }
      return item;
    });
    deleteStorage();
    saveStorage(data);
    setTasks(data);
  }

  const tasksCompleted = tasks.filter((item) => item.completed).length;
  return (
    <div className={styles.task}>
      <header>
        <div className={styles.createdTask}>
          <strong>Tarefas criadas</strong>
          <label className={styles.counter}>{tasks.length}</label>
        </div>
        <div className={styles.concludedTask}>
          <strong>Concluídas</strong>
          <label className={styles.counter}>
            {tasks.length != 0 ? `${tasksCompleted} de ${tasks.length}` : "0"}
          </label>
        </div>
      </header>
      <main>
        {tasks.length == 0 && (
          <div className={styles.contentIsEmpty}>
            <ClipboardText size={56} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <label>Crie tarefas e organize seus itens a fazer</label>
          </div>
        )}
        {tasks.map((task) => {
          return (
            <CardTask
              key={task.id}
              task={task}
              onCompleted={handleCompletedTask}
              onRemove={handleRemoveTask}
            />
          );
        })}
      </main>
    </div>
  );
}
