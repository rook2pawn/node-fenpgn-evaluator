fenpgn-evaluator
================

evaluation is broken up into the following components

* pawnstructure
* development 
* king safety

pawnstructure
-------------

pawnstructure takes a single board state (a 2x2 matrix) and returns a set
of interesting results

development
-----------

development takes a full game history and returns a the development
progress.

king safety
-----------

king safety takes a single board state and returns 

* pawn shields (shields in front two rows)
* pawn storm (upcoming)

mobility
--------

mobility takes a single history item (board state plus metainformation) and 
returns mobility information


example time
------------

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

    var results = {};
    results.development = evaluator.development(fen.getHistory());
    results.material = evaluator.material(fen.last().board);
    results.pawnstructure = evaluator.pawnstructure(fen.last().board);
    results.kingsafety = evaluator.kingsafety(fen.last().board);
    results.mobility = evaluator.mobility(fen.last());

    log(results);
