import { useState } from "react";
import { useParams } from "react-router-dom";
import { TextField } from "@mui/material";

export default function CommentCreate(props) {
  const { handleCommentCreate } = props;
  const [formData, setFormData] = useState({
    opinion: "",
  });

  const { opinion } = formData;
  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommentCreate(id, formData);
  };

  return (
    <div>
      <h1>Add a Comment</h1>
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
