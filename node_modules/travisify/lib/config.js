var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');

var tty = require('tty');
function echo (mode) {
    tty.setRawMode(!mode);
}

module.exports = function (cb) {
    var dir = process.env.HOME + '/.config';
    mkdirp(dir, function (err) {
        if (err) return console.error(err);
        
        var file = dir + '/travisify.json';
        function read () {
            fs.readFile(file, function (err, body) {
                if (err) console.error(err)
                else cb(JSON.parse(body))
            })
        }
        
        path.exists(file, function (ex) {
            if (!ex) prompt(function (vars) {
                fs.writeFile(file, JSON.stringify(vars), function (err) {
                    if (err) console.error(err)
                    else read()
                });
            })
            else read()
        });
    });
};

function prompt (cb) {
    var vars = {};
    var queue = [
        function (user) {
            vars.user = user;
            process.stdout.write('github password: ');
            echo(false);
        },
        function (pass) {
            vars.pass = pass;
            process.stdout.write('\r\ntravis-ci api key: ');
            echo(true);
        },
        function (token) {
            vars.token = token;
            cb(vars);
        },
    ];
    process.stdout.write('github username: ');
    
    var line = '';
    process.stdin.on('data', function fn (buf) {
        if (buf[0] === 0x03) process.exit();
        
        line += buf;
        
        function findBreak () {
            var i = line.indexOf('\n');
            if (i >= 0) return i;
            return line.indexOf('\r');
        }
        
        var ix;
        while ((ix = findBreak()) >= 0) {
            var s = line.slice(0, ix);
            line = line.slice(ix + 1);
            if (queue.length === 0) process.stdin.removeListener('data', fn);
            else queue.shift()(s);
        }
    });
    
    process.stdin.resume();
}
