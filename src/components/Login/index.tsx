import { Link } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
  return (
    <Link to="/profile">
      <div className={styles.userPic}>
        <div className={styles.userIcon}>👤</div>
        <h3>Profile</h3>
      </div>
    </Link>
  );
}

export default Login;
