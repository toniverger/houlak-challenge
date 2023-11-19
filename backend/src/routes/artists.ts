import express from "express";
import config from "../config";
import axios from 'axios'

const router = express.Router();

router.get('/:artist', async (req, res) => {
    const { artist } = req.params
    try {
        const response = await axios.get(`https://api.spotify.com/v1/search?q=${artist}&type=artist`, {
            headers: {
                Authorization: `Bearer ${config.accessToken}`
            }
        })
        if (response.data.artists.items.length === 0) {
            res.json({ name: "", items: [] })
            throw new Error("Artist not found")
        }

        const firstArtist = response.data.artists.items[0]
        const artistId = firstArtist?.id
        const artistName = firstArtist?.name
        const albumsResponse = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/albums`, {
            headers: {
                Authorization: `Bearer ${config.accessToken}`
            }
        })
        res.json({ name: artistName, items: albumsResponse.data.items })

    } catch (e) {
        console.log(e)
    }
})

export default router