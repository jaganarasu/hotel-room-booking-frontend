import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://mern-hotel-app-backend.onrender.com/api/auth/register",
        credentials
      );
      // You can use the response here if needed
      console.log(res.data); // For example, logging the response
      navigate("/login"); // Navigate to login page after successful registration
    } catch (err) {
      setError(err.response.data);
    }
  };
  
  

  return (
    <div className="container-fluid">
      <div className="col-lg-12 mb-4">
        <Navbar />
      </div>

      <div className="rContainer row justify-content-center mt-4">
        <div className="row justify-content-center mt-4">
          <div className="col-lg-8">
            <h2 className="text-center mb-4">Register</h2>
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
                  type="email"
                  placeholder="Email"
                  id="email"
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
                onClick={handleClick}
                className="btn btn-primary w-100"
              >
                Register
              </button>
            </form>
            {error && <div className="alert alert-danger mt-3">{error.message}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
