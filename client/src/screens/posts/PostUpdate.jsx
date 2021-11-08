import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { createTheme } from "@mui/material/styles";

export default function PostUpdate(props) {
  const { posts, handlePostUpdate } = props;

  const [formData, setFormData] = useState({
    image_url: "",
  });
  const { image_url } = formData;
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
    const formDataLoad = () => {
      const currentPost = posts.find((post) => post.id === Number(id));
      const { image_url } = currentPost;
      setFormData({ image_url: image_url });
    };
    if (posts.length) {
      formDataLoad();
    }
  }, [posts, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePostUpdate(id, formData);
  };

  return (
    <div>
      <h1>Update your Post</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          label="Image"
          name="image_url"
          value={image_url}
          fullWidth
          onChange={handleChange}
        />
        <Button type="submit" theme={theme} color="primary" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
}
