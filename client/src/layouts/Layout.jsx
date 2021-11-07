import "./Layout.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
      <Footer className="layout-footer" />
    </div>
  );
}
