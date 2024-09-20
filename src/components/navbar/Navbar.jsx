import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Hotel Booking In.
        </Link>
        <div className="ml-auto">
          {user ? (
            <span className="navbar-text">{user.username}</span>
          ) : (
            <div className="navItems">
              <button
                className="btn btn-outline-primary me-2"
                onClick={() => navigate('/login')}
              >
                Register
              </button>
              <button
                className="btn btn-primary"
                onClick={() => navigate('/login')}
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
