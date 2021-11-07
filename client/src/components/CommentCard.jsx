import "./CommentCard.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { createTheme } from "@mui/material/styles";
import user from "../assets/user.png";

export default function CommentCard(props) {
  const { currentUser, comment, handleCommentDelete } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const theme = createTheme({
    palette: {
      primary: {
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
    <div className="comment-card">
      <div className="user-comment-card">
        <img className="user-comment-image" src={user} alt="profile-pic" />
        <h4 className="comment-username">{comment?.user.username}</h4>
        {currentUser && currentUser.id === comment?.user_id ? (
          <div className="comments-dots">
            <IconButton
              id="basic-button"
              theme={theme}
              color="primary"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MoreVertIcon />
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
              <MenuItem
                component={Link}
                to={`/posts/${comment.post_id}/comments/${comment.id}/update`}
              >
                Edit
              </MenuItem>
              <MenuItem
                onClick={() => handleCommentDelete(comment.post_id, comment.id)}
              >
                Delete
              </MenuItem>
            </Menu>
          </div>
        ) : null}
      </div>
      <div className="comments-detail">
        <h4>{comment?.opinion}</h4>
      </div>
    </div>
  );
}
