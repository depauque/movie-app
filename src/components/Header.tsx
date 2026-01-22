import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Link to="/">
        <h1 className="header">Movie App 2.0</h1>
      </Link>
    </>
  );
}

export default Header;
