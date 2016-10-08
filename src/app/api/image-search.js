require('dotenv').config()
const https = require('https')

function constructHeaders (searchString) {
  const uriSearch = encodeURIComponent(searchString)
  return {
    host: 'api.cognitive.microsoft.com',
    path: '/bing/v5.0/images/search?q=' + uriSearch + '&q=' + uriSearch,
    headers: {
      'Ocp-Apim-Subscription-Key': process.env.BING_API_KEY
    }
  }
}

module.exports = function (searchString, protocolRequest) {
  return new Promise(function (resolve, reject) {
    protocolRequest = protocolRequest || https.request
    const options = constructHeaders(searchString)
    protocolRequest(options, resolve).end()
  })
}
