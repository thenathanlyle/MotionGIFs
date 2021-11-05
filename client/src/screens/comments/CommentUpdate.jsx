import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import { getOneComment } from "../../services/comments";

export default function CommentUpdate(props) {
  const { handleCommentUpdate } = props;
  const [formData, setFormData] = useState({
    opinion: "",
  });

  const { opinion } = formData;
  const { post_id, id } = useParams();

  useEffect(() => {
    const prefillFormData = async () => {
      const commentData = await getOneComment(post_id, id);
      setFormData({
        opinion: commentData.opinion,
      });
    };
    prefillFormData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommentUpdate(post_id, id, formData);
  };

  return (
    <div>
      <h1>Update your Comment</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          autoFocus
          multiline={true}
          rows={10}
          id="comment"
          type="text"
          label="Comment"
          name="opinion"
          value={opinion}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
