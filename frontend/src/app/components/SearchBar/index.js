import styles from "./index.module.css";
import TextField from "@mui/material/TextField";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const handleSearchChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.search}>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          style={{ marginRight: "10px" }}
        />
        <IconButton
          size="large"
          variant="contained"
          color="primary"
          onClick={handleSearchChange}
        >
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default SearchBar;
