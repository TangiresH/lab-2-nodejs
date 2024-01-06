function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = ''

    req.on('data', (chunk) => {
      body += chunk.toString()
    })

    req.on('end', () => {
      resolve(body)
    })

    req.on('error', (err) => {
      reject(err)
    })
  })
}

function parseXml(xmlString) {
  const cleanXmlString = xmlString.replace(/\n/g, '').replace(/ /g, '')

  const tokens = cleanXmlString.split(/<|>/).filter(Boolean)

  const root = {}
  const stack = [root]
  let currentElement = root

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i].trim()

    if (token.startsWith('/')) {
      stack.pop()
      currentElement = stack[stack.length - 1]
    } else if (token) {
      const [tagName, content] = token.split(/\s(.+)/)
      const newElement = { tagName, content: content ? [content] : [] }

      if (!currentElement[tagName]) {
        currentElement[tagName] = []
      }

      currentElement[tagName].push(newElement)
      stack.push(newElement)
      currentElement = newElement
    }
  }

  return root
}

function jsonParse(data, failback) {
  try {
    return JSON.parse(data)
  } catch (e) {
    return failback
  }
}

export { parseXml, parseBody, jsonParse }
