import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import { getAllPosts, postPost, putPost, deletePost } from "../services/posts";
import Posts from "../screens/posts/Posts";
import Home from "../screens/home/Home";

export default function MainContainer() {
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
    const newPost = await postPost(formData);
    setPosts((prevState) => [...prevState, newPost]);
    history.push("/posts");
  };

  const handlePostUpdate = async (id, formData) => {
    const newPost = await putPost(id, formData);
    setPosts((prevState) =>
      prevState.map((post) => {
        return post.id === Number(id) ? newPost : post;
      })
    );
    history.push("/posts");
  };

  const handlePostDelete = async (id) => {
    await deletePost(id);
    setPosts((prevState) => prevState.filter((post) => post.id !== Number(id)));
    history.push("/posts");
  };

  return (
    <div>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/posts">
          <Posts posts={posts} handlePostDelete={handlePostDelete} />
        </Route>
      </Switch>
    </div>
  );
}
