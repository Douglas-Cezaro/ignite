import { Check } from "phosphor-react";
import { ChangeEvent } from "react";
import styles from "./Checkbox.module.css";

type Props = {
  checked: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox = ({ checked, handleChange }: Props) => {
  return (
    <div className={styles.containerCheckbox}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => handleChange(e)}
        />
        <div className={styles.checkbox}>
          <Check className={styles.icon} size={15} weight="bold" />
        </div>
      </label>
    </div>
  );
};
