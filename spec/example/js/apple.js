var Apple = function(opts) {
    "use strict";

    opts = opts || {};

    this.name = opts.name || 'Fuji';
    this.sound = opts.sound || 'ringy';

    return this;
};
