var bitwiseOR = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(bitwiseOR));
});

test('performs bitwise or', function(t) {
  t.plan(3);
  t.equal(bitwiseOR(14, 9), 14 | 9);
  t.equal(bitwiseOR(37, 0), 37 | 0);
  t.equal(bitwiseOR(5, -1), 5 | -1);
});