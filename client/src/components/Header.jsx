import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/MotionGIFs_Logo.png";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { createTheme } from "@mui/material/styles";

export default function Header({ currentUser, handleLogout }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#000000",
      },
    },
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="header">
      <div>
        <div className="header-icon-button">
          <IconButton
            id="basic-button"
            theme={theme}
            color="primary"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            {anchorEl === null ? <MenuIcon /> : <CloseIcon />}
          </IconButton>
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {currentUser ? (
            <div>
              <MenuItem>{currentUser.username}</MenuItem>
              <MenuItem component={Link} to={`/posts/create`}>
                Create a Post
              </MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </div>
          ) : (
            <div>
              <MenuItem component={Link} to={`/register`}>
                Sign Up
              </MenuItem>
              <MenuItem component={Link} to={`/login`}>
                Log In
              </MenuItem>
              <MenuItem component={Link} to={`/posts/create`}>
                Create a Post
              </MenuItem>
            </div>
          )}
        </Menu>
      </div>
      <Link to="/">
        <img src={logo} className="header-logo" alt="MotionGIFs-logo" />
      </Link>
    </header>
  );
}
