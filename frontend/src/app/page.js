"use client";
import styles from "./page.module.css";
import AppBar from "./components/TopBar";
import SearchBar from "./components/SearchBar";
import AlbumCard from "./components/AlbumCard";
import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <main>
      <AppBar />
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
    </main>
  );
}
