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
import { CircularProgress } from "@mui/material";

export default function Home() {
  const [theme, setTheme] = useState(lightTheme);
  const [search, setSearch] = useState();
  const [resultArray, setResultArray] = useState([]);
  const [resultName, setResultName] = useState("");
  const [loading, setloading] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.palette.mode === "light" ? darkTheme : lightTheme
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const data = await AlbumService.fetchAlbums(search);
        setResultArray(data.items);
        setResultName(data.name);
        setloading(false);
      } catch (error) {
        setResultArray([]);
        setloading(false);
      }
    };
    if (search && search.trim() !== "") {
      fetchData(search);
    } else {
      setSearch("");
    }
  }, [search]);

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
            {resultArray.length === 0 ? (
              <NoResult searchTerm={search} />
            ) : (
              <>
                <div style={{ width: "100%", textAlign: "center" }}>
                  <Typography variant="h6" color="primary" fontSize="1rem">
                    Mostrando resultados de {resultName}
                  </Typography>
                </div>
                {resultArray.map((album, index) => {
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
