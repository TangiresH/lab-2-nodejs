import {
  defaultHandler,
  movieDetailsHandler,
  recipeHandler,
  travelGuideHandler,
  musicPlaylistHandler
} from './controller.js'

const routes = {
  default: defaultHandler,
  'movie-details': movieDetailsHandler,
  recipe: recipeHandler,
  'travel-guide': travelGuideHandler,
  'music-playlist': musicPlaylistHandler
}

export default function router(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`)
  const routeName = url.pathname.slice(1)

  const handler = routes[routeName] || routes.default

  if (handler) {
    handler(req, res, { routeName })
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('Not Found')
  }
}
