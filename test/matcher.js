'use strict'

var matcher = require('../matcher')
var chai = require('chai')

describe('Path squisher', () => {

  it('appears to work... at first glance', () => {
    var paths = [
      'templates/foo/bar',
      'templates/foo'
    ]
    var expected = [
      'templates/foo/bar'
    ]
    chai.expect(matcher(paths)).to.eql(expected)
  })

})
