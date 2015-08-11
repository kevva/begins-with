'use strict';
var escapeStringRegexp = require('escape-string-regexp');

module.exports = function (str, match) {
	var regex = new RegExp('^' + escapeStringRegexp(match) + '[^]*$');
	return regex.test(str);
};
