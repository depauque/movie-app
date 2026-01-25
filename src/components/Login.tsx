import { Link } from "react-router-dom";

function Login() {
  return (
    <Link to="/profile">
      <div className="user-pic">
        <div className="user-icon">👤</div>
        <h3>User</h3>
      </div>
    </Link>
  );
}

export default Login;
