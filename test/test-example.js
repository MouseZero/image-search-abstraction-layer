const chai = require('chai')
const example = require('../src/example')
chai.should()

describe('increment', () => {
  it('should increment 5 to 6', () => {
    const answer = example.increment(5)
    answer.should.equal(6)
  })
})
