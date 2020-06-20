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

Inform the key, the client code and a language code (if other than 'en') when creating a new object

```javascript
import HockeyTech from "hockeytech";

const ht = new HockeyTech('4767a11864244441', 'ohl');

ht.getSeasonList()
    .then(data => console.log(data))
    .catch(err => console.log(err));
```

## TODO

- Add types for the responses

## Maintainer

[Jonathas Ribeiro][0]

## License

MIT

[0]: https://github.com/jonathas