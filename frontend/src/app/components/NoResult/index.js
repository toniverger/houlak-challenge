import Typography from "@mui/material/Typography";
import SearchOffIcon from "@mui/icons-material/SearchOff";

import styles from "./index.module.css";

export default function NoResult({ searchTerm }) {
  return (
    <div className={styles.container}>
      <SearchOffIcon fontSize="large" />
      <Typography variant="h6" fontSize="1rem">
        No se encontraron resultados para {searchTerm}
      </Typography>
      <Typography variant="p" fontSize="0.8rem" color="primary">
        Probá con una nueva búsqueda
      </Typography>
    </div>
  );
}
