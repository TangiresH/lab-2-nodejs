import {
  defaultHandler,
  movieDetailsHandler,
  recipeHandler,
  travelGuideHandler,
  musicPlaylistHandler
} from './controller.js'
import { parseBody } from './utils.js'

const routes = {
  default: defaultHandler,
  'movie-details': movieDetailsHandler,
  recipe: recipeHandler,
  'travel-guide': travelGuideHandler,
  'music-playlist': musicPlaylistHandler
}

export default async function router(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`)
  const routeName = url.pathname.slice(1)

  const handler = routes[routeName]

  if (handler) {
    if (req.method === 'POST') {
      try {
        const body = await parseBody(req)
        handler(req, res, { routeName, body })
      } catch (error) {
        console.error('Error parsing body:', error)
        res.writeHead(400, { 'Content-Type': 'text/plain' })
        res.end('Bad Request')
      }
    } else {
      handler(req, res, { routeName })
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('Not Found')
  }
}
