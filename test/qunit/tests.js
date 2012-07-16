test( 'hello test', function () {
    ok( 1 == '1', 'Passed!' );
});

// From: http://qunitjs.com/cookbook/

// test.html?filter=validation - just the validation module
// test.html?filter=test 3 - just "test 3"

module( "validation" );
test( "test 1", function () {
  ok( true, "bool succeeds" );
});
test( "test 2", function () {
  equal( 5, 5.0, "equal succeeds" );
});

module( "tooltip" );
test( "test 3", function () {
  deepEqual( 3 === 3, true, "deepEqual succeeds" );
});
