import cors from 'cors'

const ACCPETED_ORIGINS = [
  'http://localhost:3000',
]

export const corsMiddelware = ({ acceptedOrigins = ACCPETED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (!origin || (typeof origin === 'string' && acceptedOrigins.includes(origin))) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
})
