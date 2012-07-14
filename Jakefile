task( "default", [], function () {
    console.log( "default jake task" );
});

desc( "An example" );
task( "example", [ "dependency" ], function () {
    console.log( "example task in jake" );
});

task( "dependency", function () {
    console.log( "dependency for the example task" );
});


// desc( 'run tests' );
// task( 'test', [], require( './tasks/test' ) );
//
// desc( 'lint code' );
// task( 'lint', [], require( './tasks/lint' ) );
