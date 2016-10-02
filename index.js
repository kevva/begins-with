'use strict';
const escapeStringRegexp = require('escape-string-regexp');

module.exports = (str, match) => new RegExp('^' + escapeStringRegexp(match)).test(str);
