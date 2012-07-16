var server = require( '../../src/server/server.js' ),
    assert = require( 'assert' );

exports.testExample = function ( test ) {
    'use strict';
    assert.equal( 3, server.number(), 'Numbers are equal' );
    test.done();
};


// example code only
exports.testSomething = function( test ){
    'use strict';
    test.expect( 1 );
    test.ok( true, 'this assertion should pass' );
    test.done();
};

exports.testSomethingElse = function( test ) {
    'use strict';
    test.ok( true, 'this assertion should fail if you pass false as the first parameter' );
    test.done();
};
