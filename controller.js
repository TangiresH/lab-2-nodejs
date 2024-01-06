import { sendResponse } from './helpers.js'

function defaultHandler(req, res, payload, body) {
  const defaultPage =
    '<h1>Home page</h1><p>Explore the available routes:</p><ol><li>/movie-details - Get details about a movie</li><li>/recipe - Discover a delicious recipe</li><li>/travel-guide - Explore a travel guide</li><li>/music-playlist - Enjoy a curated music playlist</li></ol>'

  sendResponse(res, 200, 'text/html', defaultPage)
}

function movieDetailsHandler(req, res, payload, body) {
  const movieDetails = {
    title: 'Inception',
    director: 'Christopher Nolan',
    year: 2010,
    genre: 'Sci-Fi',
    rating: 8.8
  }

  sendResponse(res, 200, 'application/json', JSON.stringify(movieDetails))
}

function recipeHandler(req, res, payload, body) {
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

function travelGuideHandler(req, res, payload, body) {
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

function musicPlaylistHandler(req, res, payload, body) {
  const musicPlaylist = {
    title: 'Chill Vibes',
    songs: ['Song 1', 'Song 2', 'Song 3', 'Song 4'],
    duration: '1 hour'
  }

  sendResponse(res, 200, 'application/json', JSON.stringify(musicPlaylist))
}

export { defaultHandler }
export { movieDetailsHandler }
export { recipeHandler }
export { travelGuideHandler }
export { musicPlaylistHandler }
