import express from 'express'
import itemRouter from './routes/admin/items'
import adminProfileRouter from './routes/admin/profile'
import cors from 'cors'

const app: express.Application = express()

app.use(cors())
app.use(express.json())
app.use(itemRouter)
app.use(adminProfileRouter)

app.listen(8000, () => console.log('listening on port 8000'))