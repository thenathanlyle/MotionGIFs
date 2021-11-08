import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PostCard from "../../components/PostCard";
import CommentCard from "../../components/CommentCard";
import { getOnePost } from "../../services/posts";
import { deleteComment } from "../../services/comments";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";

export default function PostDetail(props) {
  const { currentUser, posts, setPosts, handlePostDelete } = props;
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);
  const [toggle, setToggle] = useState(false);
  const { id } = useParams();

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

  useEffect(() => {
    const fetchPost = async () => {
      const postData = await getOnePost(id);
      setPost(postData);
      setComments(postData.comments);
      setToggle(true);
    };
    fetchPost();
  }, [id]);

  const handleCommentDelete = async (post_id, comment_id) => {
    await deleteComment(post_id, comment_id);
    setToggle(false);
    setComments((prevState) =>
      prevState.filter((comment) => comment.id !== comment_id)
    );

    const associatedPost = posts.find((post) => post.id === post_id);
    const deletedCommentIndex = associatedPost.comments.findIndex(
      (comment) => comment.id === comment_id
    );
    associatedPost.comments.splice(deletedCommentIndex, 1);

    setPosts((prevState) =>
      prevState.map((post) => {
        return post.id === post_id ? associatedPost : post;
      })
    );
    setToggle(true);
  };
  if (!toggle) return <h3>loading</h3>;

  return (
    <div>
      <PostCard
        currentUser={currentUser}
        post={post}
        handlePostDelete={handlePostDelete}
      />
      <Button
        component={Link}
        to={`/posts/${post.id}/comments/create`}
        theme={theme}
        color="primary"
        variant="contained"
        style={{ margin: "0 auto", display: "flex" }}
      >
        Add a Comment
      </Button>
      {comments.map((comment) => (
        <CommentCard
          currentUser={currentUser}
          comment={comment}
          handleCommentDelete={handleCommentDelete}
        />
      ))}
    </div>
  );
}
