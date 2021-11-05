import "./PostCard.css";
import { Link } from "react-router-dom";

export default function PostCard(props) {
  const { currentUser, post, handlePostDelete } = props;

  return (
    <div className="post-card">
      <div className="user-post-card">
        <img
          className="user-image"
          src={post?.user.image_url}
          alt="profile-pic"
        />
        <h3 className="user-name">{post?.user.username}</h3>{" "}
      </div>
      <div className="post-image">
        <Link to={`/posts/${post.id}/`}>
          <img src={post?.image_url} alt="meme-pic" />
        </Link>
      </div>
      <>
        {currentUser && currentUser.id === post?.user_id ? (
          <>
            <Link to={`/posts/${post.id}/update`}>Edit</Link>
            <button onClick={() => handlePostDelete(post.id)}>Delete</button>
          </>
        ) : null}
      </>
      <Link to={`/posts/${post.id}/`}>
        <h5>Comments: {post.comments.length}</h5>
      </Link>
    </div>
  );
}
