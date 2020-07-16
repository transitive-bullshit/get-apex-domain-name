'use strict'

const test = require('ava')
const getApexDomainName = require('./get-apex-domain-name')

const fixtures = [
  'http://example.com',
  'https://example.com',
  'example.com',
  'example.com/foo/bar',
  'example.com?foo=123&abc=bar',
  'example.com/foo/bar?foo=bar',
  'https://example.com/foo/bar?foo=bar',
  'foo.example.com',
  'foo.example.co.uk',
  'foo.example.gs.aa.no',
  'example.gs.aa.no',
  'example.dev',
  'http://highfieldsdataservices.co.uk/'
]

fixtures.forEach((fixture) => {
  test(fixture, (t) => {
    const result = getApexDomainName(fixture)
    console.log(fixture, '=>', result)
    t.truthy(result)
    t.snapshot(result)
  })
})
