var blokPut = require('./')
var isSHA256 = require('is-sha-256-hex-digest')
var levelup = require('levelup')
var memdown = require('memdown')
var sha256 = require('sha256')
var test = require('tape');

test('put an empty object', function(t) {
  blokPut(
    levelup({ db: memdown }),
    sha256,
    {},
    function(error, digest) {
      t.error(error, 'no error')
      t.ok(
        isSHA256(digest),
        'callback argument is a valid digest')
      t.end()
    }) })
