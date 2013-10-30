var openings = require('./lib/openings/openings.js');
var evaluator = require('./index');
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
var x = evaluator.development(fen.getHistory());
log(x);
