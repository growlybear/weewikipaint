var path = require('path');

module.exports = function (dir) {
    var ps = dir.split('/');
    for (var i = ps.length; i > 0; i--) {
        var p = ps.slice(0, i).join('/');
        if (path.existsSync(p + '/.git')) return p;
    }
};
