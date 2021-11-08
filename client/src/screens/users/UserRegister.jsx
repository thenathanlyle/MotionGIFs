import { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export default function UserRegister({ handleRegister }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    // image_url: "",
    password: "",
  });
  // Have logic for user image_url when able to have user create/update screens done.
  const { username, email, password } = formData;

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
    handleRegister(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          autoFocus
          type="text"
          label="Username"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <TextField
          type="email"
          label="Email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        {/* <TextField
        type="text"
        label="Image"
        name="image_url"
        value={image_url}
        onChange={handleChange}
      /> */}
        <TextField
          minLength="6"
          type="password"
          label="Password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <Button type="submit" theme={theme} color="primary" variant="contained">
          Submit
        </Button>
      </form>
      <Button
        component={Link}
        to={`/login`}
        theme={theme}
        color="primary"
        variant="contained"
      >
        Already a user? Log in here!
      </Button>
    </div>
  );
}
