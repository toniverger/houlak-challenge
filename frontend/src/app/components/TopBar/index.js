import styles from "./index.module.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function TopBar() {
  return (
    <AppBar position="static" className={styles.topBar}>
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          Houlak Challenge
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
