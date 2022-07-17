import { Header } from "./components/Header";
import { InputTask } from "./components/InputTask";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.wrapper}>
        <InputTask />
      </main>
    </div>
  );
}

export default App;
