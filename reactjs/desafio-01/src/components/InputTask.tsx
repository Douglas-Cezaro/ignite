import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { deleteStorage, saveStorage } from "../utils/storage";
import { TaskInterface } from "../utils/types";
import styles from "./InputTask.module.css";

interface Props {
  tasks: TaskInterface[];
  setTasks: (task: TaskInterface[]) => void;
}

export function InputTask({ tasks, setTasks }: Props) {
  const [task, setTask] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    const newTask: TaskInterface = {
      id: Math.floor(Math.random() * 200),
      description: task,
      completed: false,
    };
    deleteStorage();
    setTasks([...tasks, newTask]);
    saveStorage([...tasks, newTask]);
    setTask("");
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setTask(event.target.value);
  }

  return (
    <div className={styles.inputTask}>
      <form className={styles.inputTaskForm} onSubmit={handleCreateNewTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={task}
          onChange={handleNewTaskChange}
          name="task"
          required
          onInvalid={handleNewTaskInvalid}
        />
        <button type="submit" title="Adicionar tarefa">
          <label>Criar</label>
          <PlusCircle size={20} />
        </button>
      </form>
    </div>
  );
}
