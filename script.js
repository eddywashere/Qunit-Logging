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
