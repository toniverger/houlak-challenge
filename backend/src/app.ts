import express, { json } from 'express'
import { corsMiddelware } from './middlewares/cors'
import artistRoutes from "./routes/artists"
import { getAccessToken } from './services/spotifyAuth';
import config from './config';
import sequelize from './database/db';
import createDatabase from './database/createDatabase';
import dotenv from 'dotenv';

dotenv.config();

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


createDatabase().then(() => {
  sequelize.sync({ force: false }).then(() => {
    console.log("Connected to database")
  }).catch(error => {
    console.log(error)
  })
});


app.use('/api/artist', artistRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})

