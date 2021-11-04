import { Link } from "react-router-dom";
import PostCard from "../../components/PostCard";

export default function Posts(props) {
  const { currentUser, posts, handlePostDelete } = props;
  return (
    <div>
      <h3>Test</h3>
      {posts.map((post) => (
        <div key={post.id}>
          <PostCard
            currentUser={currentUser}
            post={post}
            handlePostDelete={handlePostDelete}
          />
        </div>
      ))}
    </div>
  );
}
