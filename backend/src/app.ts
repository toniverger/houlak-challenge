import express, {json} from 'express'
import { corsMiddelware } from './middlewares/cors'

const PORT = process.env.PORT ?? 8080

const app = express()

app.disable('x-powered-by')

app.use(json())
app.use(corsMiddelware())

app.use('/', (_, res) => {
    res.json("hola mundo")
})


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})