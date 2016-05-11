'use strict'

var _ = require('lodash')

module.exports = function (paths) {
  return _.reduce(paths, function(result, path){
    var exists = _.chain(result).map(function(result) {
      return (result + '/').indexOf(path + '/') >= 0
    }).reduce(function(looking, match){
      return match || looking
    }, false).value()
    return exists ? result : result.push(path) && result
  }, [])
}
