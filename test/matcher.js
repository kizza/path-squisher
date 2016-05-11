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

  it('works with reversed paths', () => {
    var paths = [
      'templates/foo',
      'templates/foo/bar'
    ]
    var expected = [
      'templates/foo/bar'
    ]
    chai.expect(matcher(paths)).to.eql(expected)
  })

  it('works with _almost_ matches', () => {
    var paths = [
      'templates/foobar',
      'templates/foo/bar',
      'templates/foo'
    ]
    var expected = [
      'templates/foobar',
      'templates/foo/bar'
    ]
    chai.expect(matcher(paths)).to.eql(expected)
  })

  it('works with multiple subdirectories', () => {
    var paths = [
      'templates/foo/bar',
      'templates/foo/bar/baz',
      'templates/foo'
    ]
    var expected = [
      'templates/foo/bar/baz'
    ]
    chai.expect(matcher(paths)).to.eql(expected)
  })

})
