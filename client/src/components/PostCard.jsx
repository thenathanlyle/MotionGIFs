import "./PostCard.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function PostCard(props) {
  const { currentUser, post, handlePostDelete } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="post-card">
      <div className="user-post-card">
        <img
          className="user-image"
          src={post?.user?.image_url}
          alt="profile-pic"
        />
        <h3 className="user-name">{post?.user?.username}</h3>
      </div>
      {currentUser && currentUser.id === post?.user_id ? (
        <div className="post-card-edit-delete">
          <IconButton
            id="basic-button"
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
      <Link to={`/posts/${post.id}/`}>
        <img className="post-image" src={post?.image_url} alt="meme-pic" />
      </Link>
      <Link to={`/posts/${post.id}/`}>
        <h5 className="post-comments">Comments: {post?.comments?.length}</h5>
      </Link>
    </div>
  );
}
