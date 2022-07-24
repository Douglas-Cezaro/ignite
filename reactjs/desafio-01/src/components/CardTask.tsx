import { Trash } from "phosphor-react";
import { useState, ChangeEvent } from "react";
import { TaskInterface } from "../utils/types";
import styles from "./CardTask.module.css";
import { Checkbox } from "./Checkbox";

interface Props {
  task: TaskInterface;
  onRemove: (task: TaskInterface) => void;
  onCompleted: (task: TaskInterface, completed: boolean) => void;
}

export function CardTask({ task, onCompleted, onRemove }: Props) {
  const [checked, setChecked] = useState(task.completed);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    onCompleted(task, event.target.checked);
  };

  return (
    <div className={styles.card}>
      <Checkbox checked={checked} handleChange={handleCheckboxChange} />
      <div className={styles.contentText}>
        <label className={checked ? styles.labelCompleted : styles.label}>
          {task.description}
        </label>
      </div>
      <a
        onClick={() => {
          onRemove(task);
        }}
      >
        <Trash size={24} />
      </a>
    </div>
  );
}
