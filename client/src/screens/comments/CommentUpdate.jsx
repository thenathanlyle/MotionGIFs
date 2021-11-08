import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { getOneComment } from "../../services/comments";
import { createTheme } from "@mui/material/styles";

export default function CommentUpdate(props) {
  const { handleCommentUpdate } = props;
  const [formData, setFormData] = useState({
    opinion: "",
  });

  const { opinion } = formData;
  const { post_id, id } = useParams();

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
    const prefillFormData = async () => {
      const commentData = await getOneComment(post_id, id);
      setFormData({
        opinion: commentData.opinion,
      });
    };
    prefillFormData();
  }, [post_id, id]);

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
      <p>Limit 200 characters</p>
      <form onSubmit={handleSubmit}>
        <TextField
          autoFocus
          multiline={true}
          rows={5}
          id="comment"
          fullWidth
          type="text"
          label="Comment"
          name="opinion"
          value={opinion}
          onChange={handleChange}
        />
        <Button type="submit" theme={theme} color="primary" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
}
