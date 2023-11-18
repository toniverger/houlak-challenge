import styles from "./index.module.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ThemeToggleButton from "../ThemeToggle";

export default function TopBar({ theme, toggleTheme }) {
  return (
    <AppBar position="static" className={styles.topBar}>
      <Toolbar variant="dense">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography variant="h6" color="inherit" component="div">
            Houlak Challenge
          </Typography>
          <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
        </div>
      </Toolbar>
    </AppBar>
  );
}
