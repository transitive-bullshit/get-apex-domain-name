# get-apex-domain-name

> Robustly parses the root / apex domain name without the TLD.

[![NPM](https://img.shields.io/npm/v/get-apex-domain-name.svg)](https://www.npmjs.com/package/get-apex-domain-name) [![Build Status](https://travis-ci.com/transitive-bullshit/get-apex-domain-name.svg?branch=master)](https://travis-ci.com/transitive-bullshit/get-apex-domain-name) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save get-apex-domain-name
```

## Usage

```js
const getApexDomainName = require('get-apex-domain-name')

getApexDomainName('https://example.com') // 'example'
getApexDomainName('example.com') // 'example'
getApexDomainName('example.co.uk') // 'example'
getApexDomainName('https://example.dev/sub/path?foo=bar&nala=cat') // 'example'
getApexDomainName('') // null
```

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)

Support my OSS work by <a href="https://twitter.com/transitive_bs">following me on twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a>
