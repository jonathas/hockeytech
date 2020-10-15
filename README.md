# HockeyTech

This is a package to connect to the [HockeyTech](http://hockeytech.com/) API.

It can be used in Node.js and fronted projects.

## Introduction

HockeyTech is a worldwide leader in providing hockey-related technologies, analytics and information services.

## Dependencies

- axios

## Installation

```bash
  yarn add hockeytech
```

## Usage

Inform the key, the client code, a language code ('en' or 'fr') and optionally a proxy base url when creating a new object.
The proxy is necessary in development, as the HockeyTech API doesn't allow localhost access.

```javascript
import HockeyTech from 'hockeytech';

const ht = new HockeyTech('4767a11864244441', 'ohl');

ht.getSeasonList()
    .then(data => console.log(data))
    .catch(err => console.log(err));
```

or

```javascript
import HockeyTech from 'hockeytech';

const ht = new HockeyTech('4767a11864244441', 'ohl', 'en', 'http://localhost:3001/proxy?url=');

ht.getSeasonList()
    .then(data => console.log(data))
    .catch(err => console.log(err));
```

## Maintainer

[Jonathas Ribeiro][0]

## License

MIT

[0]: https://github.com/jonathas