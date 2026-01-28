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
        className={styles.switch}
        onClick={() => setIsTop(!isTop)}
        animate={{
          backgroundColor: isTop ? "wheat" : "lightgray",
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          animate={{
            x: isTop ? 20 : 0,
            backgroundColor: isTop ? "gray" : "white",
          }}
        />
      </motion.div>
    </div>
  );
}

export default Switch;
