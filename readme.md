# begins-with [![Build Status](https://travis-ci.org/kevva/begins-with.svg?branch=master)](https://travis-ci.org/kevva/begins-with)

> Checks if string begins with the given target string


## Install

```
$ npm install --save begins-with
```


## Usage

```js
var beginsWith = require('begins-with');

beginsWith('foo bar cat', 'foo');
beginsWith('123foobar', '123foo');
beginsWith('+lol+foo+bar', '+lol');
```


## API

### beginsWith(string, match)

Checks if `string` begins with `match`

#### string

*Required*  
Type: `string`

String to be tested against.

#### match

*Required*  
Type: `string`

String to test with.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
