import { Link } from "react-router-dom";

function Login() {
  return (
    <Link to="/profile">
      <div className="userpic">👤</div>
    </Link>
  );
}

export default Login;
