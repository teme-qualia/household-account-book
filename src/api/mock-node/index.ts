import express from 'express'
import swaggerUi from 'swagger-ui-express'
import { swaggerDocs } from './docs'
import { userRouter } from './routes/userRoutes'
import { recordRouter } from './routes/recordRoutes'

const app = express()

if (process.env.NODE_ENV == 'development') {
    // Swagger UI を起動
    app.use(
        '/swagger',
        swaggerUi.serve,
        swaggerUi.setup(swaggerDocs)
    )
    // 定義した内容をJSONで閲覧可にする
    app.get('/api-docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.send(swaggerDocs)
    })
}

app.use(express.json())

const base_url = '/api/v1'
app.use(`${base_url}/user`, userRouter)
app.use(`${base_url}/record`, recordRouter)

const port = process.env.PORT || 3000

app.listen(port)
console.log('Listen on port ' + port)