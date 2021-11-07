import "./PostCard.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Badge from "@mui/material/Badge";
import ChatIcon from "@mui/icons-material/Chat";
import { createTheme } from "@mui/material/styles";
import user from "../assets/user.png";

export default function PostCard(props) {
  const { currentUser, post, handlePostDelete } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFCC00",
      },
      secondary: {
        main: "#fafafa",
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
    <div className="post-card">
      <div className="user-post-card">
        <img className="user-image" src={user} alt="profile-pic" />
        <h3 className="user-name">{post?.user?.username}</h3>
        {currentUser && currentUser.id === post?.user_id ? (
          <div className="post-dots">
            <IconButton
              id="basic-button"
              theme={theme}
              color="secondary"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MoreHorizIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem component={Link} to={`/posts/${post.id}/update`}>
                Edit
              </MenuItem>
              <MenuItem onClick={() => handlePostDelete(post.id)}>
                Delete
              </MenuItem>
            </Menu>
          </div>
        ) : null}
      </div>
      <Link to={`/posts/${post.id}/`}>
        <img className="post-image" src={post?.image_url} alt="meme-pic" />
      </Link>
      <div className="post-comments">
        <Badge
          component={Link}
          to={`/posts/${post.id}/`}
          badgeContent={post?.comments?.length}
          theme={theme}
          color="primary"
        >
          <ChatIcon theme={theme} color="secondary" />
        </Badge>
      </div>
    </div>
  );
}
