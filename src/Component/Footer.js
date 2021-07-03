import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  root: {},
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <BottomNavigation
        style={{ backgroundColor: "#fff" }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label="Github"
          icon={
            <a href="https://github.com/M-Qasim786" target="_blank">
              <GitHubIcon className="social-icon" />
            </a>
          }
        />
        <BottomNavigationAction
          label="LinkedIn"
          icon={
            <a
              href="https://linkedin.com/in/muhammad-qasim-a90b64207"
              target="_blank"
            >
              <LinkedInIcon className="social-icon" />
            </a>
          }
        />
        <BottomNavigationAction
          label="Instagram"
          icon={
            <a href="https://github.com/M-Qasim786" target="_blank">
              <InstagramIcon className="social-icon" />
            </a>
          }
        />
      </BottomNavigation>
      <p className="copyright-message">
        {" "}
        Copyright © 2021 Article App Created By Muhammad Qasim
      </p>
    </div>
  );
}
