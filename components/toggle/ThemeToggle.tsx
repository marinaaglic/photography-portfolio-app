import styles from "./themeToggle.module.css";

interface ThemeToggleProps {
  onToggle: () => void;
}

export default function ThemeToggle({ onToggle }: ThemeToggleProps) {
  return (
    <label className={styles.toggleSwitch}>
      <input type="checkbox" onChange={onToggle} />
      <span className={styles.switch} />
    </label>
  );
}
