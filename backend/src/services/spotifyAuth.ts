import axios from 'axios';
import config from '../config';
import { SpotifyAuthResponse } from '../types';

const clientId = '83dc7c80f05042209bf90590760eea2a';
const clientSecret = 'be1504ba6e8c4335a04ee81499b0a96c';
const tokenEndpoint = 'https://accounts.spotify.com/api/token';



// Function to obtain access token
export async function getAccessToken(): Promise<string> {
    try {
        const response = await axios.post<SpotifyAuthResponse>(tokenEndpoint, null, {
            params: {
                grant_type: 'client_credentials',
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: clientId,
                password: clientSecret,
            },
        });

        const accessToken = response.data.access_token;
        config.accessToken = accessToken;

        return accessToken;
    } catch (error) {
        console.error('Error obtaining access token:', error);
        throw error;
    }
}