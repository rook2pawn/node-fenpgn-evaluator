var pawnstructure = require('./lib/pawnstructure.js');
var development = require('./lib/development.js');
var openings = require('./lib/openings/openings.js');
/*
var Fenpgn = require('fenpgn');
var util = require('util');

var log = function(obj) {
    console.log(util.inspect(obj,{colors:true,depth:null}));
};
var fen = new Fenpgn;
openings.fulldev.forEach(function(move) {
    console.log("move :" + move);
    fen.mm(move);
});

*/

exports.pawnstructure = pawnstructure.analyze;
exports.development = development.development;


/*
var startboard = [
['1','1','1','1','1','1','1','1'],
['1','1','1','1','1','1','1','1'],
['1','P','1','1','1','1','1','1'],
['1','1','P','1','1','1','1','1'],
['1','1','p','1','1','1','1','1'],
['1','p','1','1','1','1','1','1'],
['1','1','1','1','1','1','1','1'],
['1','1','1','1','1','1','1','1']
];
*/
//var x = development(fen.getHistory());
