import { Link } from "react-router-dom";

function Login() {
  return (
    <Link to="/profile">
      <div className="userpic">
        <div className="user-icon">👤</div>
        <div>Admin</div>
      </div>
    </Link>
  );
}

export default Login;
