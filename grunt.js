/*global module:false*/
module.exports = function (grunt) {

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
                'spec/example/js/*.js',
                'spec/example/js/*_spec.js'
            ]
        },

        qunit: {
            files: ['test/**/*.html']
        },

        mocha: {
            index: ['spec/index.html']
        },

        concat: {
            dist: {
                src: ['<banner:meta.banner>', '<file_strip_banner:lib/<%= pkg.name %>.js>'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },

        min: {
            dist: {
                src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },

        watch: {
            files: '<config:lint.files>',
            tasks: 'lint mocha'
        },

        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true
            },
            globals: {
                describe: false,
                it: false,
                beforeEach: false,
                afterEach: false
            }
        },

        uglify: {}
    });

    // Default task.
    grunt.registerTask('default', 'lint mocha concat min');

    // Travis CI task.
    grunt.registerTask('travis', 'lint mocha');

    // grunt-mocha
    grunt.loadNpmTasks('grunt-mocha');
};
