import { motion } from "framer-motion";
import styles from "./ToggleSwitch.module.css";

interface SwitchProps {
  isTop: boolean;
  setIsTop: (value: boolean) => void;
}

function Switch({ isTop, setIsTop }: SwitchProps) {
  return (
    <div className={styles.switchContainer}>
      <div>🔥 Топ IMDB</div>
      <motion.div
        className={`${styles.switch} ${isTop ? styles.on : ""}`}
        onClick={() => setIsTop(!isTop)}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className={`${styles.thumb} ${isTop ? styles.on : ""}`}
          animate={{ x: isTop ? 20 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </div>
  );
}

export default Switch;
