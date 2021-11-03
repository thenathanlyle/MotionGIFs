// import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/MotionGIFs_favicon.png";

export default function Header({ currentUser, handleLogout }) {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="MotionGIFs-logo" />
      </Link>
      {currentUser ? (
        <div>
          <p>Welcome {currentUser.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link to="/login">Login/Register</Link>
      )}
      <Link to="/posts">Posts</Link>
    </header>
  );
}
