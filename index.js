var pawnstructure = require('./lib/pawnstructure.js');
var development = require('./lib/development.js');
var material = require('./lib/material.js');

exports.pawnstructure = pawnstructure.analyze;
exports.development = development.development;
exports.material = material.materialanalysis;
