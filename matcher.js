'use strict'

module.exports = function (paths) {
  return paths.sort().reverse().reduce((result, path) => {
    var exists = result.map((result) => {
      return (result + '/').indexOf(path + '/') >= 0
    }).reduce((looking, match) => {
      return match || looking
    }, false)
    return exists ? result : result.push(path) && result
  }, [])
}
