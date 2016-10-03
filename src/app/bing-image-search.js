const https = require('https')
require('dotenv').config()

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

module.exports = {
  makeRequest (searchString) {
    const uriSearch = encodeURIComponent(searchString)
    const options = {
      host: 'api.cognitive.microsoft.com',
      path: '/bing/v5.0/images/search?q=' + uriSearch + '&q=' + uriSearch,
      headers: {
        'Ocp-Apim-Subscription-Key': process.env.BING_API_KEY
      }
    }
    https.request(options, callback).end()
  }
}
