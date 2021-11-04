import "./CommentCard.css";
import { Link } from "react-router-dom";

export default function CommentCard(props) {
  const { currentUser, comment, handleCommentDelete } = props;

  return (
    <div className="comment-card">
      <img src={comment?.user.image_url} alt="profile-pic" />
      <h3>{comment?.user.username}</h3>
      <h5>{comment?.opinion}</h5>
      {currentUser && currentUser.id === comment?.user_id ? (
        <>
          <Link to={`/posts/${comment.post_id}/comments/${comment.id}/update`}>
            Edit
          </Link>
          <button
            onClick={() => handleCommentDelete(comment.post_id, comment.id)}
          >
            Delete
          </button>
        </>
      ) : null}
    </div>
  );
}
