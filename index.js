var stringify = require('blok-stringify')

function blokPut(level, hash, value, callback) {
  var stringified = stringify(value)
  var digest = hash(stringified)
  level.put(digest, stringified, function(error) {
    if (error) {
      callback(error) }
    else {
      callback(null, digest) } }) }

module.exports = blokPut
