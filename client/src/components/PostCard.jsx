import "./PostCard.css";
import { Link } from "react-router-dom";

export default function PostCard(props) {
  const { currentUser, post, handlePostDelete } = props;

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
          <Link to={`/posts/${post.id}/update`}>Edit</Link>
          <button onClick={() => handlePostDelete(post.id)}>Delete</button>
        </div>
      ) : null}
      <Link to={`/posts/${post.id}/`}>
        <img className="post-image" src={post?.image_url} alt="meme-pic" />
      </Link>
      <Link to={`/posts/${post.id}/`}>
        <h5 className="post-comments">Comments: {post.comments?.length}</h5>
      </Link>
    </div>
  );
}
