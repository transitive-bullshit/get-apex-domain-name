'use strict'

module.exports = (uri) => {
  try {
    const { hostname } = new URL(uri)
    if (hostname) {
      return hostname
    }
  } catch (err) {}

  // if the URI is not a well-formed URL, then ignore any potential pathname or query
  const uriNoPathname = uri.replace(/^\/+/, '').split('/')[0]
  const uriNoQuery = uriNoPathname.split('?')[0]

  return uriNoQuery.replace(/^.*:/, '')
}
