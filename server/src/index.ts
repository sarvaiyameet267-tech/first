import express from 'express'
import cors from 'cors'

const app = express()
const PORT = Number(process.env.PORT) || 4000

app.use(cors())
app.use(express.json())

app.get('/', (_req, res) => {
  res.json({ name: 'Full Stack App API', status: 'ok' })
})

app.get('/api/hello', (_req, res) => {
  res.json({ message: 'Hello from the Express backend! 👋' })
})

app.get('/api/time', (_req, res) => {
  res.json({ time: new Date().toISOString() })
})

app.listen(PORT, () => {
  console.log(`✅ API server running at http://localhost:${PORT}`)
})