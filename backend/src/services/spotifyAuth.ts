import axios from 'axios';
import config from '../config';
import { SpotifyAuthResponse } from '../types';
import dotenv from 'dotenv';

dotenv.config();

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
                username: `${process.env.CLIENT_ID}`,
                password: `${process.env.CLIENT_SECRET}`,
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