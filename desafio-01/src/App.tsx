import { Header } from "./components/Header";
import { InputTask } from "./components/InputTask";
import { Task } from "./components/Task";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { TaskInterface } from "./utils/types";
import { getStorage } from "./utils/storage";

function App() {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);

  useEffect(() => {
    const value = getStorage();
    if (value) {
      setTasks(value);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.wrapper}>
        <InputTask tasks={tasks} setTasks={setTasks} />
        <Task tasks={tasks} setTasks={setTasks} />
      </main>
    </div>
  );
}

export default App;
