'use strict';

module.exports = url;

const orgParse = require("@orglnd/org-parse");

function url(url) {
    return orgParse(new URL(url));
}
