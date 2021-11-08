import { useState } from "react";
import { useParams } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export default function CommentCreate(props) {
  const { handleCommentCreate } = props;
  const [formData, setFormData] = useState({
    opinion: "",
  });

  const { opinion } = formData;
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
