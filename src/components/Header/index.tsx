import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <Link to="/">
      <h1 className={styles.header}>Movie App 2.0</h1>
    </Link>
  );
}

export default Header;
