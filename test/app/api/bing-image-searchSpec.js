const api = require('../../../src/app/api/image-search.js')
const chai = require('chai')
const sinon = require('sinon')

chai.should()

describe('httpRequestBingImageSearch', () => {
  var protocolRequest

  it('Should callback the protocol request', function () {
    protocolRequest = function (options, cb) {
      cb()
      return {end: () => {}}
    }
    const spy = sinon.spy()
    const test = function (cb) {
      console.log('called function')
      cb()
    }

    api('lkajsldfkj', protocolRequest)
    .then(test(spy))

    spy.called.should.be.true
  })
  it('Should have the needed options for a proper bing api request', function (done) {
    protocolRequest = function (option, cb) {
      ('Ocp-Apim-Subscription-Key' in option.headers).should.be.true
      done()
      return {end: () => {}}
    }

    api('lkajdslf', protocolRequest)
    .catch(function (err) {
      console.log(err)
    })
  })
})
