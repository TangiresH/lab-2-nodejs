import {
  defaultHandler,
  movieDetailsHandler,
  recipeHandler,
  travelGuideHandler,
  musicPlaylistHandler
} from './controller.js'
import { parseBody, parseXml, jsonParse } from './utils.js'

const routes = {
  '': defaultHandler,
  'movie-details': movieDetailsHandler,
  recipe: recipeHandler,
  'travel-guide': travelGuideHandler,
  'music-playlist': musicPlaylistHandler
}

const contentTypes = {
  'text/html': (text) => text,
  'application/json': (json) => jsonParse(json, {}),
  'application/xml': (xml) => parseXml(xml),
  'application/x-www-form-urlencoded': (data) => {
    return Object.fromEntries(new URLSearchParams(data))
  }
}

export default async function router(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`)
  const routeName = url.pathname.slice(1)

  const handler = routes[routeName]

  if (handler) {
    if (req.method === 'POST') {
      try {
        const body = await parseBody(req)
        const filteredBody = contentTypes[req.headers['content-type']](body)
        console.log(filteredBody)
        handler(req, res, { routeName, filteredBody })
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
