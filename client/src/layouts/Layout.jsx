import "./Layout.css";
import Header from "../components/Header";

export default function Layout({ children, currentUser, handleLogout }) {
  return (
    <div>
      <Header currentUser={currentUser} handleLogout={handleLogout} />
      <div className="content">{children}</div>
    </div>
  );
}
