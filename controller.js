import { sendResponse, json } from './helpers.js'

function defaultHandler(req, res) {
  const defaultPage =
    '<h1>Home page</h1><p>Explore the available routes:</p><ol><li>/movie-details - Get details about a movie</li><li>/recipe - Discover a delicious recipe</li><li>/travel-guide - Explore a travel guide</li><li>/music-playlist - Enjoy a curated music playlist</li></ol>'

  sendResponse(res, 200, 'text/html', defaultPage)
}

function movieDetailsHandlerGET(req, res) {
  const movieDetails = {
    title: 'Inception',
    director: 'Christopher Nolan',
    year: 2010,
    genre: 'Sci-Fi',
    rating: 8.8
  }

  sendResponse(res, 200, 'application/json', JSON.stringify(movieDetails))
}

function recipeHandlerGET(req, res) {
  const recipe = {
    title: 'Spaghetti Bolognese',
    ingredients: [
      'Ground beef',
      'Tomato sauce',
      'Onion',
      'Garlic',
      'Spaghetti'
    ],
    instructions:
      'Cook the spaghetti; Brown the beef; Saute the onion and garlic; Mix all together!',
    serving: 4
  }

  sendResponse(res, 200, 'application/json', JSON.stringify(recipe))
}

function travelGuideHandlerGET(req, res) {
  const travelGuide = {
    destination: 'Paris',
    attractions: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral'],
    tips: [
      'Try local pastries',
      'Visit museums early to avoid crowds',
      'Take a boat cruise on the Seine River'
    ]
  }

  sendResponse(res, 200, 'application/json', JSON.stringify(travelGuide))
}

function musicPlaylistHandlerGET(req, res) {
  const musicPlaylist = {
    title: 'Chill Vibes',
    songs: ['Song 1', 'Song 2', 'Song 3', 'Song 4'],
    duration: '1 hour'
  }

  sendResponse(res, 200, 'application/json', JSON.stringify(musicPlaylist))
}

function movieDetailsHandlerPOST(req, res, payload) {
  json(res, payload)
}
function travelGuideHandlePOST(req, res, payload) {
  json(res, payload)
}
function recipeHandlerPOST(req, res, payload) {
  json(res, payload)
}
function musicPlaylistHandlerPOST(req, res, payload) {
  json(res, payload)
}

function movieDetailsHandlerOPTIONS(req, res) {
  res.writeHead(204, {
    'Access-Control-Allow-Origin': '*',
    // eslint-disable-next-line sonarjs/no-duplicate-string
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    // eslint-disable-next-line sonarjs/no-duplicate-string
    'Access-Control-Allow-Headers': 'Content-Type'
  })
  res.end()
}
// eslint-disable-next-line sonarjs/no-identical-functions
function travelGuideHandleOPTIONS(req, res) {
  res.writeHead(204, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  })
  res.end()
}
// eslint-disable-next-line sonarjs/no-identical-functions
function recipeHandlerOPTIONS(req, res) {
  res.writeHead(204, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  })
  res.end()
}
// eslint-disable-next-line sonarjs/no-identical-functions
function musicPlaylistHandlerOPTIONS(req, res) {
  res.writeHead(204, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  })
  res.end()
}

export {
  defaultHandler,
  movieDetailsHandlerGET,
  recipeHandlerGET,
  travelGuideHandlerGET,
  musicPlaylistHandlerGET
}
export {
  movieDetailsHandlerPOST,
  travelGuideHandlePOST,
  recipeHandlerPOST,
  musicPlaylistHandlerPOST
}
export {
  movieDetailsHandlerOPTIONS,
  travelGuideHandleOPTIONS,
  recipeHandlerOPTIONS,
  musicPlaylistHandlerOPTIONS
}
