import axios from "axios";
import Navbar from "../../components/navbar/Navbar";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
// import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
         "https://mern-hotel-app-backend.onrender.com/api/auth/login",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
   
    <div className="container-fluid">
            <div className="col-lg-12 mb-4">
            <Navbar />
          
            </div>
      
      <div className="lContainer row justify-content-center mt-4 ">
      <div className="row justify-content-center mt-4 ">
        <div className="col-lg-8">
          <h2 className="text-center mb-4">Login</h2>
          <form>
            <div className="form-group mb-3">
              <input
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <button
              disabled={loading}
              onClick={handleClick}
              className="btn btn-primary w-100"
            >
              Login
            </button>
          </form>
          {error && <div className="alert alert-danger mt-3">{error.message}</div>}
          
          {/* Demo Credentials */}
          <div className="mt-4">
            <p className="text-muted">Demo credentials</p>
            <p className="text-muted">Username: jaga</p>
            <p className="text-muted">Email: abce@gmail.com</p>
            <p className="text-muted">Password: userpassword123</p>
          </div>
        </div>
      </div></div>
    </div>
  );
};

export default Login;
