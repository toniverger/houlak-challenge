export interface AppConfig {
    accessToken?: string;
}

export interface SpotifyAuthResponse {
    access_token: string;
}

export interface SpotifyAlbum {
    album_type: string,
    total_tracks: number,
    available_markets: [],
    href: string,
    id: string,
    images: [
        {
            url: string,
            height: number,
            width: number
        }
    ],
    name: string,
    release_date: string,
    release_date_precision: string,
    restrictions?: {
        reason: string,
    },
    type: string,
    uri: string,
    artists: [
        {
            external_urls?: {
                spotify: string
            },
            href: string,
            id: string,
            name: string,
            type: string,
            uri: string
        }
    ],
    album_group: string
}

export interface SpotifyArtist {
    external_urls: {
        spotify: string
    },
    followers: {
        href: string,
        total: number,
    },
    genres: string[],
    href: string,
    id: string,
    images: [
        {
            url: string,
            height: number,
            width: number
        }
    ],
    name: string,
    popularity: 0,
    type: string,
    uri: string
}

export interface FetchArtistResponse {
    artists: {
        items: SpotifyArtist[]
    }
}

export interface FetchAlbumResponse {
    name: string;
    items: SpotifyAlbum[]
}

export interface EmptyResponse {
    name: string;
    items: []
}