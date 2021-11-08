import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export default function PostCreate(props) {
  const { handlePostCreate } = props;

  const [formData, setFormData] = useState({
    image_url: "",
  });
  const { image_url } = formData;

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
    handlePostCreate(formData);
  };

  return (
    <div>
      <h1>Create a MotionGIFs Post</h1>
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
