import { Link } from "react-router-dom";
// import PostCard from "../../components/PostCard";

export default function Posts(props) {
  const { posts, handlePostDelete } = props;
  return (
    <div>
      <h3>Test</h3>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <img>{post?.image_url}</img>
          </Link>
          <Link to={`/posts/${post.id}/edit`}>
            <button>edit</button>
          </Link>
          <button onClick={() => handlePostDelete(post.id)}>delete</button>
        </div>
      ))}
    </div>
  );
}
