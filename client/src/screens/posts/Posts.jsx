import PostCard from "../../components/PostCard";

export default function Posts(props) {
  const { currentUser, posts, handlePostDelete } = props;
  return (
    <div className="posts-container">
      {posts
        .slice(0)
        .reverse()
        .map((post) => (
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
