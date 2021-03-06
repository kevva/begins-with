# begins-with [![Build Status](https://travis-ci.org/kevva/begins-with.svg?branch=master)](https://travis-ci.org/kevva/begins-with)

> Checks if string begins with the given target string


## Install

```
$ npm install --save begins-with
```


## Usage

```js
const beginsWith = require('begins-with');

beginsWith('foo bar cat', 'foo');
//=> true

beginsWith('123foobar', '123foo');
//=> true

beginsWith('+lol+foo+bar', '+lol');
//=> true

beginsWith('foobar', 'cat');
//=> false
```


## API

### beginsWith(string, match)

Checks if `string` begins with `match`

#### string

Type: `string`

String to be tested against.

#### match

Type: `string`

String to test with.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
