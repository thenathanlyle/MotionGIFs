import { useState } from "react";
import { TextField } from "@mui/material";

export default function PostCreate(props) {
  const { handlePostCreate } = props;

  const [formData, setFormData] = useState({
    image_url: "",
  });
  const { image_url } = formData;

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
      <h1>Create a new post!</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          label="Image"
          name="image_url"
          value={image_url}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
