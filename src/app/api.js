const search = require('./bing-image-search')

function callback (res) {
  let string = ''
  res.on('data', (chunk) => {
    string += chunk
  })

  res.on('end', () => {
    console.log(string)
    console.log('request ended')
  })
}

search.makeRequest('lol cats angry', callback)
