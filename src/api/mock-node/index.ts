import express from 'express'
import { userRouter } from './routes/userRoutes'
import { recordRouter } from './routes/recordRoutes'

const app = express()

app.use(express.json())

const base_url = '/api/v1'
app.use(`${base_url}/user`, userRouter)
app.use(`${base_url}/record`, recordRouter)

const port = process.env.PORT || 3000

app.listen(port)
console.log('Listen on port ' + port)