import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

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
         "https://hotel-booking-backend-vi05.onrender.comapi/auth/login",
      //  "http://localhost:3000/api/auth/login",
        
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
        <p style={ {margin: "0 0 0 20px", textAlign: "left",width: "100%",fontFamily:"'Roboto','Helvetica','Arial',sans-serif",fontSize:"14px"} }>Demo credentials</p>
        <p style={ {margin: "0 0 0 20px", textAlign: "left",width: "100%",fontFamily:"'Roboto','Helvetica','Arial',sans-serif",fontSize:"14px"} }>Username: demo</p>
          <p style={ {margin: "0 0 0 20px", textAlign: "left",width: "100%",fontFamily:"'Roboto','Helvetica','Arial',sans-serif",fontSize:"14px"} }>Email: demo@example.com</p>
          <p style={ {margin: "0 0 0 20px", textAlign: "left",width: "100%",fontFamily:"'Roboto','Helvetica','Arial',sans-serif",fontSize:"14px"} }>Password: demo123</p>
          <p style={ {margin: "0 0 0 20px", textAlign: "left",width: "100%",fontFamily:"'Roboto','Helvetica','Arial',sans-serif",fontSize:"14px"} }>Admin: admin</p>
          <p style={ {margin: "0 0 0 20px", textAlign: "left",width: "100%",fontFamily:"'Roboto','Helvetica','Arial',sans-serif",fontSize:"14px"} }>Email: admin@example.com</p>
          <p style={ {margin: "0 0 0 20px", textAlign: "left",width: "100%",fontFamily:"'Roboto','Helvetica','Arial',sans-serif",fontSize:"14px"} }>Password: admin123</p>

      </div>
    </div>
  );
};

export default Login;
