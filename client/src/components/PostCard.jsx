import "./PostCard.css";
import { Link, useParams } from "react-router-dom";

export default function PostCard(props) {
  const { currentUser, post, handlePostDelete } = props;

  return (
    <div className="post-card">
      <img src={post?.user.image_url} alt="profile-pic" />
      <h3>{post?.user.username}</h3>
      {currentUser && (
        <>
          <img src={post?.image_url} alt="meme-pic" />
          {currentUser && currentUser.id === post?.user_id ? (
            <>
              <Link to={`/posts/${post.id}/update`}>Edit</Link>
              <button onClick={() => handlePostDelete(post.id)}>Delete</button>
            </>
          ) : null}{" "}
          <h5>Comments: {post.comments.length}</h5>
        </>
      )}
    </div>
  );
}
