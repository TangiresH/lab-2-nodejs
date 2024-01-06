function sendResponse(res, statusCode, contentType, data) {
  res.writeHead(statusCode, { 'Content-Type': contentType })
  res.end(data)
}

function json(res, data) {
  res.end(JSON.stringify(data))
}

export { sendResponse, json }
