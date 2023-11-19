"use client";
import styles from "./index.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function AlbumCard({
  name,
  releaseDate,
  songs,
  image,
  albumURI,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="disc cover"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lanzado el: {releaseDate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {songs} canciones
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={albumURI}>
          <Button size="small" color="primary">
            Ver en sporify
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}
