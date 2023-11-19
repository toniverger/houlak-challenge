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
import AlbumService from "./services/AlbumService";

export default function Home() {
  const [theme, setTheme] = useState(lightTheme);
  const [search, setSearch] = useState();
  const [testArray, setTestArray] = useState([]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.palette.mode === "light" ? darkTheme : lightTheme
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AlbumService.fetchAlbums(search);
        setTestArray(data.items);
      } catch (error) {
        // Handle error
      }
    };
    if (search && search.trim() !== "") {
      fetchData(search);
    }
  }, [search]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar theme={theme} toggleTheme={toggleTheme} />
      <SearchBar setSearch={setSearch} />
      {!search ? (
        <NoSearch />
      ) : (
        <div className={styles.gridContainer}>
          <Grid container spacing={2}>
            {testArray.length === 0 ? (
              <NoResult searchTerm={search} />
            ) : (
              testArray.map((album, index) => {
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
                      />
                    </Grid>
                  </Zoom>
                );
              })
            )}
          </Grid>
        </div>
      )}
    </ThemeProvider>
  );
}
