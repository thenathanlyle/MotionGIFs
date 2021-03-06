import { useState, useEffect } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import {
  getAllPosts,
  createPost,
  putPost,
  deletePost,
} from "../services/posts";
import { createComment, putComment } from "../services/comments";
import Posts from "../screens/posts/Posts";
import PostCreate from "../screens/posts/PostCreate";
import PostUpdate from "../screens/posts/PostUpdate";
import PostDetail from "../screens/posts/PostDetail";
import CommentCreate from "../screens/comments/CommentCreate";
import CommentUpdate from "../screens/comments/CommentUpdate";

export default function MainContainer(props) {
  const { currentUser } = props;
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts();
      setPosts(postList);
    };
    fetchPosts();
  }, []);

  const handlePostCreate = async (formData) => {
    const newPost = await createPost(formData);
    setPosts((prevState) => [...prevState, newPost]);
    history.push("/posts");
  };

  const handlePostUpdate = async (id, formData) => {
    const updatePost = await putPost(id, formData);
    setPosts((prevState) =>
      prevState.map((post) => (post.id === Number(id) ? updatePost : post))
    );
    history.push(`/posts/${id}`);
  };

  const handlePostDelete = async (id) => {
    await deletePost(id);
    setPosts((prevState) => prevState.filter((post) => post.id !== Number(id)));
    history.push("/posts");
  };

  const handleCommentCreate = async (post_id, formData) => {
    const newComment = await createComment(post_id, formData);
    const associatedPost = posts.find((post) => post.id === Number(post_id));
    associatedPost.comments.push({ id: newComment.id });
    setPosts((prevState) =>
      prevState.map((post) => {
        return post.id === post_id ? associatedPost : post;
      })
    );
    history.push(`/posts/${post_id}`);
  };

  const handleCommentUpdate = async (post_id, comment_id, formData) => {
    await putComment(post_id, comment_id, formData);
    history.push(`/posts/${post_id}`);
  };

  return (
    <div>
      <Switch>
        <Route path="/posts/:post_id/comments/:id/update">
          {currentUser ? (
            <CommentUpdate handleCommentUpdate={handleCommentUpdate} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/posts/:id/comments/create">
          {currentUser ? (
            <CommentCreate handleCommentCreate={handleCommentCreate} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/posts/create">
          {currentUser ? (
            <PostCreate handlePostCreate={handlePostCreate} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/posts/:id/update">
          {currentUser ? (
            <PostUpdate posts={posts} handlePostUpdate={handlePostUpdate} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/posts/:id">
          <PostDetail
            posts={posts}
            setPosts={setPosts}
            handlePostDelete={handlePostDelete}
            currentUser={currentUser}
          />
        </Route>
        <Route path="/path">
          <Posts
            posts={posts}
            handlePostDelete={handlePostDelete}
            currentUser={currentUser}
          />
        </Route>
        <Route path="/">
          <Posts
            posts={posts}
            handlePostDelete={handlePostDelete}
            currentUser={currentUser}
          />
        </Route>
      </Switch>
    </div>
  );
}
