import { useState } from "react";
import styles from "./index.module.css";
import TextField from "@mui/material/TextField";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ setSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.search}>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          style={{ marginRight: "10px" }}
          onChange={handleSearchChange}
          onKeyDown={(e) => e.key === "Enter" && setSearch(searchTerm)}
          required
        />
        <IconButton
          size="large"
          variant="contained"
          color="primary"
          onClick={() => {
            setSearch(searchTerm);
          }}
        >
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default SearchBar;
