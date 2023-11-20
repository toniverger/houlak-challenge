import axios from 'axios';
import { FetchAlbumResponse, SpotifyArtist } from '../types';
import config from '../config';
import { Searches } from '../database/models/searches';


export const getArtistId = async (artist: string): Promise<SpotifyArtist | null> => {
    try {
        const response = await axios.get(`https://api.spotify.com/v1/search?q=${artist}&type=artist`, {
            headers: {
                Authorization: `Bearer ${config.accessToken}`
            }
        })
        if (response.data.artists.items.length === 0) {
            return null
        }
        const firstArtist = response.data.artists.items[0]
        return firstArtist
    } catch (e) {
        console.log(e)
        return null
    }

}

export const getAlbumsFromArtist = async (artist: SpotifyArtist, ip: string): Promise<FetchAlbumResponse> => {
    try {
        const { name, id } = artist
        Searches.create({
            ip: ip,
            date: new Date().toLocaleString(),
            artist: name
        })
        const albumsResponse = await axios.get(`https://api.spotify.com/v1/artists/${id}/albums`, {
            headers: {
                Authorization: `Bearer ${config.accessToken}`
            }
        })
        return ({ name: name, items: albumsResponse.data.items })
    } catch (e) {
        return ({ name: "", items: [] })
    }
}