'use strict';

var test = require('ava');
var beginsWith = require('./');

test(function (t) {
	t.assert(beginsWith('foo bar cat', 'fo'));
	t.assert(beginsWith('foo bar cat', 'foo '));
	t.assert(beginsWith('foobar', 'foo'));
	t.assert(beginsWith('123foobar', '123foo'));
	t.assert(beginsWith('+lol+foo+bar', '+lol'));
	t.assert(beginsWith('***', '***'));
	t.assert(!beginsWith('***', '+**'));
	t.assert(!beginsWith('*', '**'));
	t.assert(!beginsWith('foobar', 'bar'));
	t.end();
});
