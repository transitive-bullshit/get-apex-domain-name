'use strict'

const getFuzzyHostname = require('./get-fuzzy-hostname')
const tlds = require('./tlds.json')

module.exports = (uri) => {
  try {
    const hostname = getFuzzyHostname(uri)
    const parts = hostname.split('.')
    let tldLength = 1
    let tldStack = ''

    for (let i = parts.length - 1; i >= 0; i--) {
      const part = parts[i]
      tldStack = tldStack ? `${part}.${tldStack}` : part

      const tld = tlds[tldStack]
      if (tld) {
        tldLength = tld
      }
    }
    console.log({
      hostname,
      parts,
      tldLength,
      tldStack
    })

    if (parts.length > tldLength) {
      return parts[parts.length - tldLength - 1]
    }
  } catch (err) {}

  return null
}
