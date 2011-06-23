function isTrue(val) {
	return val;
}

module('Sample Module');

test('isTrue()', function() {
	ok(isTrue(1), '1 is true');
	ok(isTrue('true'), '"true" is true');
	ok(isTrue(true), 'true is true');
	ok(isTrue(0), '0 is true');
})

test('test', function() {
	deepEqual( {}, {}, 'passes, objects have the deepEqual content');
	deepEqual( {a: 2}, {a: 1} , 'passes');
	deepEqual( [], [], 'passes, arrays have the deepEqual content');
	deepEqual( [1], [1], 'passes');
})
