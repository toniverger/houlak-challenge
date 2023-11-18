"use client";
import { useState } from "react";
import styles from "./page.module.css";
import AppBar from "./components/TopBar";
import SearchBar from "./components/SearchBar";
import AlbumCard from "./components/AlbumCard";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme";
import { CssBaseline } from "@mui/material";

export default function Home() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.palette.mode === "light" ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar theme={theme} toggleTheme={toggleTheme} />
      <SearchBar />
      <div className={styles.gridContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <AlbumCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <AlbumCard />
          </Grid>{" "}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <AlbumCard />
          </Grid>{" "}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <AlbumCard />
          </Grid>{" "}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <AlbumCard />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}
