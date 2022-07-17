import { Header } from "./components/Header";
import { InputTask } from "./components/InputTask";
import { Task } from "./components/Task";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.wrapper}>
        <InputTask />
        <Task />
      </main>
    </div>
  );
}

export default App;
