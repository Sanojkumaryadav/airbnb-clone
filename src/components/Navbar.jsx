import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
    <div className="navbar">
      {user ? (
        <ul className="login_first_container">
          {/* <li className="listItem">
            <img src={user.photos[0].value} alt="" className="avatar" />
          </li> */}
          {/* <li className="listItem">{user.displayName}</li> */}
      <a href="">Message</a>
      <a href="">Notifications</a>
      <a href="">Trips</a>
      <a href="">Whishlist</a>
      <a href="">Host your home</a>
      <a href="">Host your Experiance</a>
      <a href="">Account</a>
      <a href="">Help</a>
      <a className="listItem" onClick={logout}>
            Logout
          </a>
        </ul>
        
      ) : (
        <Link className="link" to="/">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
