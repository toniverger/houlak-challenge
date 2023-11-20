import express from "express";
import { getAlbumsFromArtist, getArtistId } from "../services/artistServices";

const router = express.Router();

router.get('/:artist', async (req, res) => {
    const artist = await getArtistId(req.params.artist)
    if (artist) {
        const albums = await getAlbumsFromArtist(artist, req.ip!)
        res.json(albums)
    } else {
        res.json({ name: "", items: [] })
    }
})

export default router