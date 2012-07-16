/*global module:false*/
module.exports = function (grunt) {
    "use strict";

    // Project configuration.
    grunt.initConfig({
        pkg: '<json:package.json>',
        meta: {
            banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
                ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
        },

        lint: {
            files: [
                'grunt.js',
                'test/mocha/example/**/*.js',
                'test/nodeunit/*.js',
                'src/**/*.js'
            ]
        },

        qunit: {
            all: [ 'test/qunit/*.html' ]
        },

        mocha: {
            index: [ 'test/mocha/index.html' ]
        },

        // nodeunit tests
        test: {
            files: [ 'test/nodeunit/**/*.js' ]
        },

        concat: {
            dist: {
                src: [ '<banner:meta.banner>', '<file_strip_banner:lib/<%= pkg.name %>.js>' ],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },

        min: {
            dist: {
                src: [ '<banner:meta.banner>', '<config:concat.dist.dest>' ],
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },

        watch: {
            files: '<config:lint.files>',
            tasks: 'lint mocha'
        },

        jshint: {
            // All options now explicity defined, rather than relying on defaults
            // Any changes have been documented inline
            options: {
                // Enforcing options
                bitwise: true,
                curly: true,
                eqeqeq: true,
                forin: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                noempty: false,     // allow empty catch clauses
                nonew: true,
                plusplus: true,     // i++ is fine by me
                regexp: true,
                undef: true,
                strict: true,
                trailing: true,     // don't leave trailing whitespace ... but don't use multi-line comments either!

                // Relaxing options
                asi: false,
                boss: false,
                debug: false,
                eqnull: false,
                es5: false,
                esnext: false,
                evil: false,
                expr: false,
                funcscope: false,
                globalstrict: false,
                iterator: false,
                lastsemic: false,
                laxbreak: false,
                laxcomma: false,
                loopfunc: false,
                maxlen: 120,        // not documented on the JSLint options page
                multistr: false,
                onecase: false,
                proto: false,
                regexdash: false,
                scripturl: false,
                smarttabs: false,
                shadow: false,      // ... although this might be useful (eg. self-redefining functions)
                sub: false,         // either notation is fine (obj.key or obj['key']), could be flipped
                supernew: false,
                validthis: false,

                // Environments
                browser: true,
                couch: false,
                devel: false,
                dojo: false,
                jquery: false,
                mootools: false,
                node: false,        // let's watch this break first
                nonstandard: false,
                prototypejs: false,
                rhino: false,
                wsh: false,

                // Legacy
                nomen: false,
                onevar: true,       // I've been using onevar for so long it feels natural
                passfail: false,
                white: false
            },
            globals: {
                // BDD
                describe: false,
                it: false,
                before: false,
                after: false,
                beforeEach: false,
                afterEach: false,
                expect: false,

                // nodeunit
                require: false,
                exports: false
            }
        },

        uglify: {}
    });

    // Default task.
    grunt.registerTask( 'default', 'lint mocha concat min' );

    // Travis CI task.
    grunt.registerTask( 'travis', 'lint mocha test qunit' );

    // grunt-mocha
    grunt.loadNpmTasks( 'grunt-mocha' );
};
