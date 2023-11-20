"use client";
import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme";
import { CssBaseline, Typography } from "@mui/material";
import styles from "./page.module.css";
import AppBar from "./components/TopBar";
import NoSearch from "./components/NoSearch";
import NoResult from "./components/NoResult";
import SearchBar from "./components/SearchBar";
import AlbumCard from "./components/AlbumCard";
import Grid from "@mui/material/Grid";
import Zoom from "@mui/material/Zoom";
import { CircularProgress } from "@mui/material";
import useFetchArtistAlbums from "./hooks/useFetchArtist";

export default function Home() {
  const [theme, setTheme] = useState(lightTheme);
  const [search, setSearch] = useState();
  const { data, loading, error } = useFetchArtistAlbums(search, setSearch);

  if (error) {
    console.log(error);
  }

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.palette.mode === "light" ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar theme={theme} toggleTheme={toggleTheme} />
      <SearchBar setSearch={setSearch} />
      {loading ? (
        <div className={styles.loadingContainer}>
          <CircularProgress color="primary" size={44} />
        </div>
      ) : !search ? (
        <NoSearch />
      ) : (
        <div className={styles.gridContainer}>
          <Grid container spacing={2}>
            {data.items.length === 0 ? (
              <NoResult searchTerm={search} />
            ) : (
              <>
                <div style={{ width: "100%", textAlign: "center" }}>
                  <Typography variant="h6" color="primary" fontSize="1rem">
                    Mostrando resultados de {data.name}
                  </Typography>
                </div>
                {data.items.map((album, index) => {
                  return (
                    <Zoom
                      in
                      style={{ transitionDelay: `${index * 300}ms` }}
                      key={album.id}
                    >
                      <Grid item xs={12} sm={6} md={4} lg={3}>
                        <AlbumCard
                          name={album.name}
                          releaseDate={album.release_date}
                          songs={album.total_tracks}
                          image={album.images[0].url}
                          albumURI={album.uri}
                        />
                      </Grid>
                    </Zoom>
                  );
                })}
              </>
            )}
          </Grid>
        </div>
      )}
    </ThemeProvider>
  );
}
