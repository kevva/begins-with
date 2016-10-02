import test from 'ava';
import m from './';

test(t => {
	t.true(m('foo bar cat', 'fo'));
	t.true(m('foo bar cat', 'foo '));
	t.true(m('foobar', 'foo'));
	t.true(m('123foobar', '123foo'));
	t.true(m('+lol+foo+bar', '+lol'));
	t.true(m('***', '***'));
	t.false(m('***', '+**'));
	t.false(m('*', '**'));
	t.false(m('foobar', 'bar'));
});
