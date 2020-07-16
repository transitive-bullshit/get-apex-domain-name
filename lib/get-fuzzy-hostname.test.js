'use strict'

const test = require('ava')
const getFuzzyHostname = require('./get-fuzzy-hostname')

const fixtures = [
  'example.com',
  'foo.example.com',
  'foo.example.co.uk',
  'foo.example.co.uk',
  'example.dev',
  'http://example.com',
  '//foo.example.com',
  'http://foo.example.co.uk',
  'ftp://foo.example.co.uk',
  'mailto:example.dev'
]

fixtures.forEach((fixture) => {
  test(fixture, (t) => {
    const result = getFuzzyHostname(fixture)
    // console.log(fixture, '=>', result)
    t.truthy(result)
    t.snapshot(result)
  })
})
