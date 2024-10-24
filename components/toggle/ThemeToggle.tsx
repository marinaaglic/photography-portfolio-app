import styles from "./themeToggle.module.css";

interface ThemeToggleProps {
  onToggle: () => void;
  theme: string;
}

export default function ThemeToggle({ onToggle, theme }: ThemeToggleProps) {
  return (
    <label className={styles.toggleSwitch}>
      <input type="checkbox" onChange={onToggle} checked={theme === "dark"} />
      <span className={styles.switch} />
    </label>
  );
}
