task( "default", [], function () {
    console.log( "default" );
});

desc( "An example" );
task( "example", [ "dependency" ], function () {
    console.log( "example task in jake" );
});

task( "dependency", function () {
    console.log( "dependency for the example task" );
});
