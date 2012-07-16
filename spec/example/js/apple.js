var Apple = function(opts) {
    "use strict";

    opts = opts || {};

    this.name = opts.name || 'Fuji';
    this.sound = opts.sound || 'crunch';

    return this;
};
