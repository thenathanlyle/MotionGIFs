import "./Layout.css";
import Header from "../components/Header";

export default function Layout(props) {
  const { children, currentUser, handleLogout } = props;
  return (
    <div className="layout">
      <Header
        className="layout-header"
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
      <div className="layout-children">{children}</div>
    </div>
  );
}
