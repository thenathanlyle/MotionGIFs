import { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export default function UserLogin({ handleLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;

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
    handleLogin(formData);
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
        to={`/register`}
        theme={theme}
        color="primary"
        variant="contained"
      >
        Not a user? Sign up for MotionGIFS today!
      </Button>
    </div>
  );
}
