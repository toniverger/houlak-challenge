import express from "express";
import { getAlbumsFromArtist, getArtistId } from "../services/artistServices";
import { SpotifyArtist } from "../types";

const router = express.Router();

router.get('/:artist', async (req, res) => {
    const artist = await getArtistId(req.params.artist)
    const albums = await getAlbumsFromArtist(artist as SpotifyArtist, req.ip!)
    res.json(albums)
})

export default router