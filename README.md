fenpgn-evaluator
================

evaluation is broken up into the following components

* pawnstructure
* development 

pawnstructure
-------------

pawnstructure takes a single board state (a 2x2 matrix) and returns a set
of interesting results

development
-----------

development takes a full game history and returns a the development
progress.


example time (development)
--------------------------

    var openings = require('./lib/openings/openings.js');
    var evaluator = require('fenpgn-evaluator');
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