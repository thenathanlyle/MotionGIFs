import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/MotionGIFs_Logo.png";

// import * as React from "react";
// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";

export default function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header className="header">
      <Link to="/">
        <img className="header-logo" src={logo} alt="MotionGIFs-logo" />
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
      <Link to="/posts/create">Create a post</Link>
    </header>
  );
}

// export default function Header({ currentUser, handleLogout }) {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <header className="header">
//       <Link to="/">
//         <img src={logo} alt="MotionGIFs-logo" />
//       </Link>
//       <div>
//         <Button
//           id="basic-button"
//           aria-controls="basic-menu"
//           aria-haspopup="true"
//           aria-expanded={open ? "true" : undefined}
//           onClick={handleClick}
//         >
//           Dashboard
//         </Button>

//         <Menu
//           id="basic-menu"
//           anchorEl={anchorEl}
//           open={open}
//           onClose={handleClose}
//           MenuListProps={{
//             "aria-labelledby": "basic-button",
//           }}
//         >
//           {currentUser ? (
//             <div>
//               <MenuItem>{currentUser.username}</MenuItem>
//               <MenuItem onClick={handleClose}>Add Meme</MenuItem>
//               <MenuItem onClick={handleLogout}>Logout</MenuItem>
//             </div>
//           ) : (
//             <div>
//               <MenuItem>
//                 <Link to="/login">Login/Register</Link>
//               </MenuItem>
//             </div>
//           )}
//         </Menu>
//       </div>
//     </header>
//   );
// }
