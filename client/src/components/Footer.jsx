import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { createTheme } from "@mui/material/styles";
import "./Footer.css";

export default function Footer() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFCC00",
      },
    },
  });

  return (
    <footer className="footer">
      <div className="footer-icons">
        <Link
          to={{ pathname: "https://www.linkedin.com/in/thenathanlyle/" }}
          target="_blank"
        >
          <GitHubIcon
            className="footer-github"
            theme={theme}
            color="primary"
            fontSize="large"
          />
        </Link>
        <Link
          className="footer-linkedin"
          to={{ pathname: "https://www.linkedin.com/in/thenathanlyle/" }}
          target="_blank"
        >
          <LinkedInIcon theme={theme} color="primary" fontSize="large" />
        </Link>
      </div>
    </footer>
  );
}
