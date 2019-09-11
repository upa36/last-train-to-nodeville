var train = require('./index')
var expect = require('chai').expect

describe('calculateTicketPrice', () => {
  it('calculates the fare based on mileage only when off peak', () => {
    expect(train.calculateTicketPrice('2019-04-17 12:36:00', 30)).to.equal(10.5)
  })

  it('adds the upcharge to the fare when the trip is during peak hours', () => {
    expect(train.calculateTicketPrice('2019-04-17 16:36:00', 30)).to.equal(13)
  })
})
