import express, { json } from 'express'
import { corsMiddelware } from './middlewares/cors'
import artistRoutes from "./routes/artists"
import { getAccessToken } from './services/spotifyAuth';
import config from './config';

const PORT = process.env.PORT ?? 8080

const app = express()

app.disable('x-powered-by')
app.use(corsMiddelware())
app.use(json())

getAccessToken()
  .then(() => {
    config.accessToken;
  })
  .catch((error) => {
    console.error('Error during server startup:', error.message);
  });

app.use('/api/artist', artistRoutes)

app.listen(PORT, () => {
  getAccessToken()
  console.log(`Server listening on port: ${PORT}`)
})
