// import "./navbar.css";
// import { Link, useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";

// const Navbar = () => {
//   const { user, dispatch } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     dispatch({ type: "LOGOUT" });
//     navigate("./login");
//   };

//   return (
//     <div className="navbar">
//       <div className="navContainer">
//         <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
//           <span className="logo">Hotel-Booking-App</span>
//         </Link>
//         {user ? (
//           <div className="navItems">
//             <span className="navUsername">{user.username}</span>
//             <button className="navButton" onClick={handleLogout}>
//               Logout
//             </button>
//           </div>
//         ) : (
//           <div className="navItems">
//             <button className="navButton" onClick={() => navigate("/login")}>
//               Register
//             </button>
//             <button className="navButton" onClick={() => navigate("/login")}>
//               Login
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login"); 
    navigate("/register");  // Change from './login' to '/login'
  };

  return (
    <div className=" bg-dark  ">
    <div className="container navbar ">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Hotel Booking In.</span>
        </Link>
        {user ? (
          <div className="navItems">
            <span className="navUsername">{user.username}</span>
            <button className="navButton" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton" onClick={() => navigate("/register")}>
              Register
            </button>
            <button className="navButton" onClick={() => navigate("/login")}>
              Login
            </button>
          </div>
        )}
      </div>
    </div></div>
  );
};

export default Navbar;

