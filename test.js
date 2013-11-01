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
var results = {};
results.development = evaluator.development(fen.getHistory());
results.material = evaluator.material(fen.last().board);
results.pawnstructure = evaluator.pawnstructure(fen.last().board);
results.kingsafety = evaluator.kingsafety(fen.last().board);
results.mobility = evaluator.mobility(fen.last());
log(results);
