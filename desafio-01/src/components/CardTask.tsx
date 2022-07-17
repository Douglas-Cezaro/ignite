import { Trash } from "phosphor-react";
import { useState, ChangeEvent } from "react";
import styles from "./CardTask.module.css";
import { Checkbox } from "./Checkbox";

export function CardTask() {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={styles.card}>
      <Checkbox checked={checked} handleChange={handleCheckboxChange} />
      <div className={styles.contentText}>
        <label>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </label>
      </div>
      <a>
        <Trash size={24} />
      </a>
    </div>
  );
}
