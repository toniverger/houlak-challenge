import Typography from "@mui/material/Typography";

import styles from "./index.module.css";

export default function NoSearch() {
  return (
    <div className={styles.container}>
      <Typography variant="h6" fontSize="1rem">
        Bienvenid@
      </Typography>
      <Typography variant="p" fontSize="0.8rem">
        Usá el buscador para encontrar los albumes del artista que quieras
      </Typography>
    </div>
  );
}
