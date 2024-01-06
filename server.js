import http from 'http'
import router from './router.js'

const server = http.createServer((req, res) => {
  router(req, res)
})

const PORT = 3001

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

process.on('SIGINT', () => {
  console.log('Server shutting down...')
  server.close(() => {
    console.log('Server shut down.')
    process.exit(0)
  })
})
